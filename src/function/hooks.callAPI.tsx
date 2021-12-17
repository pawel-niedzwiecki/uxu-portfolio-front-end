import { callToApiType, callType } from "./function.callAPI.type";

export class callToApi {
  private _error: any;
  private _setError: any;

  constructor({ error, setError }: callToApiType) {
    this._error = error;
    this._setError = setError;
    this.setErrAPI = this.setErrAPI.bind(this);
  }

  setErrAPI = (type: string) => {
    switch (type) {
      case "history":
        return this._setError({ ...this._error, histories: true });
      case "portfolio":
        return this._setError({ ...this._error, portfolio: true });
      case "tags":
        return this._setError({ ...this._error, tags: true });
    }
  };

  async call({ url, type, setData }: callType) {
    await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => this.setErrAPI(type));
  }
}
