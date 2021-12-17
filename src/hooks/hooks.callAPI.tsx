import { callToApiType, requestOptionsProps } from "./hooks.callAPI.type";

const useCallToApi = ({ err, setError }: any) => {
  const callToApi = async ({ url, type, setData }: callToApiType) => {
    const requestOptions: requestOptionsProps = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const setErrAPI = () => {
      switch (type) {
        case "history":
          return setError({ ...err, histories: true });
        case "portfolio":
          return setError({ ...err, portfolio: true });
        case "tags":
          return setError({ ...err, tags: true });
      }
    };
    await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => setErrAPI());
  };

  return {
    callToApi,
  };
};

export default useCallToApi;
