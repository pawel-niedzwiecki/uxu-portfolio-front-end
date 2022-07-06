import { TagsType } from "./utils.types.tags";

export interface PortfolioType {
  tags?: TagsType;
  _id?: string | null;
  ProjectName?: string | null;
  PortfolioURL?: string | null;
  PortfolioGitHub?: string | null;
  published_at?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
  id?: string | null;
}

export type PortfoliosType = PortfolioType[];
