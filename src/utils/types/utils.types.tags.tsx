export interface TagType {
  _id?: string;
  localizations?: string[];
  Name?: string | null;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
}

export type TagsType = TagType[];
