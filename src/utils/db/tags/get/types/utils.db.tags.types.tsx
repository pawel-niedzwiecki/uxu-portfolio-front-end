import { TagsType } from "utils/types/utils.types.tags";
import { ErrorType } from "utils/types/utils.types.error";

export interface TagsGetType {
  data?: null | TagsType;
  error?: ErrorType;
}
