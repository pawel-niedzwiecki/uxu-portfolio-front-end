import { HistoriesType } from "utils/types/utils.types.histories";
import { ErrorType } from "utils/types/utils.types.error";

export interface HistoriesGetType {
  data?: null | HistoriesType;
  error?: ErrorType;
}
