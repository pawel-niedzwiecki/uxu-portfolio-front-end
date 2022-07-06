export interface ImageType {
  _id: string;
  name?: string | null;
  alternativeText?: string | null;
  caption?: string | null;
  hash?: string | null;
  ext?: string | null;
  mime?: string | null;
  size: number;
  url?: string | null;
  provider?: string | null;
  width?: number;
  height?: number;
  related?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
  id?: string;
}
