export interface Contributor {
    login: string;
    avatar_url: string;
    contributions: number;
  }
  
export interface Repository {
  id: number;
  name: string;
}

export interface ContributorInterface {
    login: string;
    avatar_url: string;
    contributions: number;
}

export interface RepositoryInterface {
  id: number;
  name: string;
}

export interface AppStateInterface {
  contributors: Contributor[];
  repos: Repository[];
  selectedRepo: string; // "overall" or repo name
}
  