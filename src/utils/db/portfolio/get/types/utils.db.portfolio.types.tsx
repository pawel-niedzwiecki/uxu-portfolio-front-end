import { PortfoliosType } from "utils/types/utils.types.portfolio";
import { ErrorType } from "utils/types/utils.types.error";

export interface PortfoliosGetType {
  data?: null | PortfoliosType;
  error?: ErrorType;
}
