import axios, { AxiosResponse } from "axios";
import { PortfoliosGetType } from "./../types/utils.db.portfolio.types";
import { portfoliosGetState } from "./../state/utils.db.portfolio.state";
import { MessageErrorGet } from "utils/lib/messages/utils.messages.errors";

export const portfoliosGetQuery = async (): Promise<PortfoliosGetType> => {
  let data: PortfoliosGetType = portfoliosGetState;

  try {
    const res: AxiosResponse<PortfoliosGetType> = await axios.get("https://uxu-portfolio.herokuapp.com/tags");
    data = res.data;
  } catch (err) {
    data = MessageErrorGet({ name: "Error API", message: "Error server with api" });
  }

  return data;
};
