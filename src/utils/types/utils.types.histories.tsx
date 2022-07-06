import { ImageType } from "./utils.types.images";

export interface HistoryType {
  localizations: {
    _id: string;
    id?: string;
    locale?: string | null;
    published_at: Date;
  }[];
  _id: string;
  HistoryTitle?: string | null;
  HistoryDescription?: string | null;
  locale?: string | null;
  published_at: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  HistoryLogo?: ImageType;
  id?: string | null;
}

export type HistoriesType = HistoryType[];
