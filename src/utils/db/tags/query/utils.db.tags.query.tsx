import axios, { AxiosResponse } from "axios";
import { TagsGetType } from "../types/utils.db.tags.types";
import { tagsGetState } from "../state/utils.db.tags.state";
import { MessageErrorGet } from "utils/lib/messages/utils.messages.errors";

export const tagsGetQuery = async (): Promise<TagsGetType> => {
  let data: TagsGetType = tagsGetState;

  try {
    const res: AxiosResponse<TagsGetType> = await axios.get("https://uxu-portfolio.herokuapp.com/tags");
    data = res.data;
  } catch (err) {
    data = MessageErrorGet({ name: "Error API", message: "Error server with api" });
  }

  return data;
};
