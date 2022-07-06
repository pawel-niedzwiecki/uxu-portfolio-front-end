import { ErrorType } from "utils/types/utils.types.error";

export const MessageErrorGet = ({ status = 400, name, message }: { status?: number; name: string; message: string }): { data: null; error: ErrorType } => {
  return {
    data: null,
    error: {
      status,
      name,
      message,
      details: {},
    },
  };
};
