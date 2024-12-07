"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setRepos, setContributionsDict } from "@/store/features/leaderboard/leaderboard.slice";
import { ContributorInterface } from "@/interfaces/GitHub";

const GITHUB_API_URL = "https://api.github.com";
const GITHUB_ORG = "fossuok";
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const excludedRepos = process.env.NEXT_PUBLIC_EXCLUDED_REPOS?.split(",").map((repo) => repo.trim()) || [];
const ITEMS_PER_PAGE = 10;

const fetchWithRetry = async (
  url: string,
  setRateLimitWarning: (state: boolean) => void,
  retries = 3,
  delay = 1000
): Promise<Response | null> => {
  const headers: Record<string, string> = GITHUB_TOKEN
    ? { Authorization: `Bearer ${GITHUB_TOKEN}` }
    : {};

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, { headers });

      if (response.ok) return response;

      if (response.status === 403) {
        const remaining = response.headers.get("X-RateLimit-Remaining");
        const retryAfter = response.headers.get("Retry-After");

        if (remaining === "0") {
          setRateLimitWarning(true);
          console.warn("API rate limit exceeded.");
          return null; // Exit gracefully without throwing an error
        }

        console.warn(
          `Rate limited. Retrying after ${retryAfter ? retryAfter : "1"} seconds.`
        );
        await new Promise((resolve) =>
          setTimeout(resolve, (parseInt(retryAfter || "1", 10) * 1000))
        );
      } else {
        console.warn(`Attempt ${attempt} failed. Retrying...`);
        await new Promise((resolve) => setTimeout(resolve, delay * attempt));
      }
    } catch (error) {
      console.error(`Error on attempt ${attempt}:`, error);
      await new Promise((resolve) => setTimeout(resolve, delay * attempt));
    }
  }

  return null; // Return null if all retries fail
};


const LeaderBoard: React.FC = () => {
  const [selectedRepo, setSelectedRepo] = useState<string>("overall");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rateLimitWarning, setRateLimitWarning] = useState<boolean>(false); // Track rate limit state

  const dispatch = useAppDispatch();
  const { repos, contributionsDict, loadingRepos } = useAppSelector(
    (state) => state.leaderboard
  );

  const totalPages = Math.ceil(
    (contributionsDict[selectedRepo]?.length || 0) / ITEMS_PER_PAGE
  );

  const paginatedContributors = [...(contributionsDict[selectedRepo] || [])]
    .sort((a, b) => b.contributions - a.contributions)
    .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchRepos = async () => {
    
      try {
        const response = await fetchWithRetry(
          `${GITHUB_API_URL}/orgs/${GITHUB_ORG}/repos`,
          setRateLimitWarning
        );
    
        if (!response) {
          console.warn("Rate limit exceeded while fetching repositories.");
          return; // Exit if rate limit is exceeded
        }
    
        const data = await response.json();
        dispatch(setRepos(data));
    
        const contributionsDict: Record<string, ContributorInterface[]> = {};
        contributionsDict["overall"] = [];
    
        for (const repo of data) {
          if (excludedRepos.includes(repo.name)) {
            console.log(`Skipping excluded repository: ${repo.name}`);
            continue;
          }
    
          const contributorsResponse = await fetchWithRetry(
            `${GITHUB_API_URL}/repos/${GITHUB_ORG}/${repo.name}/contributors`,
            setRateLimitWarning
          );
    
          if (!contributorsResponse) {
            console.warn(`Rate limit exceeded while fetching contributors for ${repo.name}.`);
            continue; // Skip if rate limit is exceeded
          }
    
          const repoContributors = await contributorsResponse.json();
    
          contributionsDict[repo.name] = repoContributors;
    
          repoContributors.forEach((contributor: any) => {
            const existingContributor = contributionsDict["overall"].find(
              (overallContributor) => overallContributor.login === contributor.login
            );
    
            if (existingContributor) {
              existingContributor.contributions += contributor.contributions;
            } else {
              contributionsDict["overall"].push({ ...contributor });
            }
          });
        }
    
        dispatch(setContributionsDict(contributionsDict));
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };
    
    fetchRepos();
  }, [dispatch]);

  const handleRepoChange = (repo: string) => {
    setSelectedRepo(repo);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 mt-3">Leaderboard</h1>

        {/* Rate Limit Warning */}
        {rateLimitWarning && (
          <div className="bg-red-500 text-white p-4 mb-4 rounded">
            API rate limit exceeded. Please wait for a while before trying again.
          </div>
        )}

        {/* Repository Selector */}
        <div className="flex justify-between items-center mb-6">
          <select
            className="bg-gray-800 text-gray-100 p-3 rounded w-full md:w-auto"
            value={selectedRepo}
            onChange={(e) => handleRepoChange(e.target.value)}
            disabled={loadingRepos}
          >
            <option value="overall">Overall Contributions</option>
            {repos.filter((repo) => !excludedRepos.includes(repo.name)).map((repo) => (
              <option key={repo.id} value={repo.name}>
                {repo.name}
              </option>
            ))}
          </select>
        </div>

        {/* Contributor List */}
        {loadingRepos ? (
          <div className="text-center">Loading...</div>
        ) : (
          <>
            <ul className="space-y-4">
              {paginatedContributors.map((contributor) => (
                <li
                  key={contributor.login}
                  className="flex items-center space-x-4 bg-gray-800 p-4 rounded"
                >
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{contributor.login}</h3>
                    <p className="text-sm text-gray-400">
                      Contributions: {contributor.contributions}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6 space-x-4">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded ${
                    currentPage === 1
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-500"
                  }`}
                >
                  Previous
                </button>
                <span className="px-4 py-2 bg-gray-800 rounded">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded ${
                    currentPage === totalPages
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-500"
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LeaderBoard;
