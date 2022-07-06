import axios, { AxiosResponse } from "axios";
import { historiesGetState } from "../state/utils.db.histories.state";
import { HistoriesGetType } from "../types/utils.db.histories.types";
import { MessageErrorGet } from "utils/lib/messages/utils.messages.errors";

export const historiesGetQuery = async ({ language }: { language: string }): Promise<HistoriesGetType> => {
  let data: HistoriesGetType = historiesGetState;

  try {
    const res: AxiosResponse<HistoriesGetType> = await axios.get(`https://uxu-portfolio.herokuapp.com/histories?_locale=${language}`);
    data = res.data;
  } catch (err) {
    data = MessageErrorGet({ name: "Error API", message: "Error server with api" });
  }

  return data;
};
