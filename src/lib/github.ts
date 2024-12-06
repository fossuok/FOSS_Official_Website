import { AppDispatch, RootState } from "@/store/store"; // Add RootState for accessing Redux state
import {
  setContributors,
  setRepos,
} from "@/store/features/leaderboard/leaderboard.slice";
import { Contributor, Repository } from "@/interfaces/GitHub";

const GITHUB_API_URL = "https://api.github.com";
const GITHUB_ORG = "fossuok";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const RATE_LIMIT_DELAY = 1000; // 1 second delay between requests to avoid rate limits
const MAX_RETRIES = 3; // Maximum number of retries for failed requests

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchWithRetry = async (url: string, retries = MAX_RETRIES): Promise<Response> => {
  const headers: Record<string, string> = GITHUB_TOKEN
    ? { Authorization: `Bearer ${GITHUB_TOKEN}` }
    : {};

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, { headers });
      if (response.ok) return response;

      const errorText = await response.text();
      console.error(`Attempt ${attempt} failed: ${response.statusText}`, errorText);

      if (response.status === 403) {
        const retryAfter = parseInt(response.headers.get("Retry-After") || "60", 10) * 1000;
        console.warn(`Rate limited. Retrying after ${retryAfter / 1000} seconds...`);
        await sleep(retryAfter);
      } else {
        await sleep(attempt * RATE_LIMIT_DELAY);
      }
    } catch (error) {
      console.error(`Fetch error on attempt ${attempt}:`, error);
      await sleep(attempt * RATE_LIMIT_DELAY);
    }
  }

  throw new Error(`Failed to fetch ${url} after ${MAX_RETRIES} attempts.`);
};

// Thunk action to fetch contributors for a specific repository and update Redux store
export const fetchRepoContributors =
  (repo: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const existingContributors = state.leaderboard.contributors;

    // Check if contributors for this repository are already in Redux
    if (existingContributors && existingContributors.length > 0) {
      console.log(`Contributors for ${repo} already available in store. Returning cached data.`);
      return existingContributors;
    }

    try {
      const response = await fetchWithRetry(
        `${GITHUB_API_URL}/repos/${GITHUB_ORG}/${repo}/contributors`
      );

      const contributors: Contributor[] = await response.json();
      dispatch(setContributors(contributors));
      return contributors; // Return the fetched data
    } catch (error) {
      console.error("Error fetching contributors:", error);
      return [];
    }
  };

// Thunk action to fetch all public repositories in the organization and update Redux store
export const fetchOrgRepos = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  const state = getState();
  const existingRepos = state.leaderboard.repos;

  // Check if repositories are already in Redux
  if (existingRepos && existingRepos.length > 0) {
    console.log("Repositories already available in store. Returning cached data.");
    return existingRepos;
  }

  try {
    const response = await fetchWithRetry(`${GITHUB_API_URL}/orgs/${GITHUB_ORG}/repos`);

    const repos: Repository[] = await response.json();
    dispatch(setRepos(repos));
    return repos; // Return the fetched data
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};

// Thunk action to combine contributions across all repositories and update Redux store
export const fetchAllContributors =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const existingContributors = state.leaderboard.contributors;

    // Check if contributors are already in Redux
    if (existingContributors && existingContributors.length > 0) {
      console.log("Contributors already available in store. Returning cached data.");
      return existingContributors;
    }

    try {
      const response = await fetchWithRetry(`${GITHUB_API_URL}/orgs/${GITHUB_ORG}/repos`);
      const repos: Repository[] = await response.json();

      const allContributors: Record<string, Contributor> = {};

      for (const repo of repos) {
        await sleep(RATE_LIMIT_DELAY); // Throttle API requests to avoid hitting rate limits
        try {
          const contributorsResponse = await fetchWithRetry(
            `${GITHUB_API_URL}/repos/${GITHUB_ORG}/${repo.name}/contributors`
          );

          const contributors: Contributor[] = await contributorsResponse.json();

          contributors.forEach(({ login, avatar_url, contributions }) => {
            if (!allContributors[login]) {
              allContributors[login] = {
                login,
                avatar_url,
                contributions: 0,
              };
            }
            allContributors[login].contributions += contributions;
          });
        } catch (error) {
          console.error(`Error fetching contributors for ${repo.name}:`, error);
        }
      }

      const sortedContributors = Object.values(allContributors).sort(
        (a, b) => b.contributions - a.contributions
      );
      dispatch(setContributors(sortedContributors));
      return sortedContributors; // Return the fetched data
    } catch (error) {
      console.error("Error fetching all contributors:", error);
      return [];
    }
  };
