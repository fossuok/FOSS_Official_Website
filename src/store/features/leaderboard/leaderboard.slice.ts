import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContributorInterface, RepositoryInterface } from "@/interfaces/GitHub";

interface LeaderBoardState {
  contributors: ContributorInterface[];
  repos: RepositoryInterface[];
  selectedRepo: string;
}

const initialState: LeaderBoardState = {
  contributors: [],
  repos: [],
  selectedRepo: "overall",
};

const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    setContributors(state, action: PayloadAction<ContributorInterface[]>) {
      state.contributors = action.payload;
    },
    setRepos(state, action: PayloadAction<RepositoryInterface[]>) {
      state.repos = action.payload;
    },
    setSelectedRepo(state, action: PayloadAction<string>) {
      state.selectedRepo = action.payload;
    },
  },
});

export const { setContributors, setRepos, setSelectedRepo } = leaderboardSlice.actions;

export default leaderboardSlice.reducer;
