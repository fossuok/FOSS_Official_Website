import { AppDispatch } from "@/store/store";
import {
  setContributors,
  setRepos,
} from "@/store/features/leaderboard/leaderboard.slice";
import { Contributor, Repository } from "@/interfaces/GitHub";

const GITHUB_API_URL = "https://api.github.com";
const GITHUB_ORG = "fossuok";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

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
        // Rate-limiting logic
        const retryAfter = parseInt(response.headers.get("Retry-After") || "60", 10) * 1000;
        console.warn(`Rate limited. Retrying after ${retryAfter / 1000} seconds...`);
        await sleep(retryAfter);
      } else {
        await sleep(attempt * RATE_LIMIT_DELAY); // Delay for other errors
      }
    } catch (error) {
      console.error(`Fetch error on attempt ${attempt}:`, error);
      await sleep(attempt * RATE_LIMIT_DELAY);
    }
  }

  throw new Error(`Failed to fetch ${url} after ${MAX_RETRIES} attempts.`);
};


const RATE_LIMIT_DELAY = 1000; // 1 second delay between requests to avoid rate limits
const MAX_RETRIES = 3; // Maximum number of retries for failed requests

// Helper function: Sleep to throttle requests
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper function: Retry logic for API calls
// const fetchWithRetry = async (url: string, retries = MAX_RETRIES): Promise<Response> => {
//   for (let attempt = 1; attempt <= retries; attempt++) {
//     try {
//       const response = await fetch(url);
//       if (response.ok) return response; // Return if successful
//       const errorText = await response.text();
//       console.error(`Attempt ${attempt} failed:`, errorText);

//       if (response.status === 403) {
//         // Rate limit error: Apply exponential backoff
//         const retryAfter = parseInt(response.headers.get("Retry-After") || "60", 10) * 1000;
//         console.warn(`Rate limited. Retrying after ${retryAfter / 1000} seconds...`);
//         await sleep(retryAfter);
//       } else {
//         await sleep(attempt * RATE_LIMIT_DELAY); // Retry with incremental delay
//       }
//     } catch (error) {
//       console.error(`Fetch error on attempt ${attempt}:`, error);
//       await sleep(attempt * RATE_LIMIT_DELAY);
//     }
//   }
//   throw new Error(`Failed to fetch ${url} after ${MAX_RETRIES} attempts.`);
// };

// Thunk action to fetch contributors for a specific repository and update Redux store
export const fetchRepoContributors = (repo: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetchWithRetry(
      `${GITHUB_API_URL}/repos/${GITHUB_ORG}/${repo}/contributors`
    );

    const contributors: Contributor[] = await response.json();
    dispatch(setContributors(contributors));
  } catch (error) {
    console.error("Error fetching contributors:", error);
  }
};

// Thunk action to fetch all public repositories in the organization and update Redux store
export const fetchOrgRepos = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetchWithRetry(`${GITHUB_API_URL}/orgs/${GITHUB_ORG}/repos`);

    const repos: Repository[] = await response.json();
    dispatch(setRepos(repos));
  } catch (error) {
    console.error("Error fetching repositories:", error);
  }
};

// Thunk action to combine contributions across all repositories and update Redux store
export const fetchAllContributors = () => async (dispatch: AppDispatch) => {
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
  } catch (error) {
    console.error("Error fetching all contributors:", error);
  }
};
