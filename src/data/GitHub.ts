
export interface ContributorInterface {
    login: string;
    avatar_url: string;
    contributions: number;
}

export interface RepositoryInterface {
  id: number;
  name: string;
  html_url: string;
  description: string;
  
}

export interface AppStateInterface {
  contributors: ContributorInterface[];
  repos: RepositoryInterface[];
  selectedRepo: string; // "overall" or repo name
}
  