import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContributorInterface, RepositoryInterface } from "@/data/GitHub";

interface ContributionsDict {
  [repoName: string]: ContributorInterface[];
}

interface LeaderBoardState {
  contributors: ContributorInterface[];
  repos: RepositoryInterface[];
  selectedRepo: string;
  loadingContributors: boolean;
  loadingRepos: boolean;
  contributionsDict: ContributionsDict;
}


const initialState: LeaderBoardState = {
  contributors: [],
  repos: [],
  selectedRepo: "overall",
  loadingContributors: false,
  loadingRepos: false,
  contributionsDict: {
    overall: [],
  },
};

const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    setContributors(state, action: PayloadAction<ContributorInterface[]>) {
      state.contributors = action.payload;
      state.loadingContributors = false;
    },
    setRepos(state, action: PayloadAction<RepositoryInterface[]>) {
      state.repos = action.payload;
      state.loadingRepos = false;
    },
    setSelectedRepo(state, action: PayloadAction<string>) {
      state.selectedRepo = action.payload;
    },
    setLoadingContributors(state, action: PayloadAction<boolean>) {
      state.loadingContributors = action.payload;
    },
    setLoadingRepos(state, action: PayloadAction<boolean>) {
      state.loadingRepos = action.payload;
    },
    setContributionsDict(
      state,
      action: PayloadAction<ContributionsDict>
    ) {
      state.contributionsDict = action.payload;
    },
  },
});

export const {
  setContributors,
  setRepos,
  setSelectedRepo,
  setLoadingContributors,
  setLoadingRepos,
  setContributionsDict,
} = leaderboardSlice.actions;

export default leaderboardSlice.reducer;