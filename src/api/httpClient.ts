import axios, { AxiosResponse } from "axios";
import { NuRequestException } from "../utils/exceptions";

export class HttpClient {
  _cert = null;
  _headers = {
    "Content-Type": "application/json",
    "X-Correlation-Id": "WEB-APP.pewW9",
    "User-Agent": "jsnubank Client - https://github.com/carlitomurta/jsnubank",
  };

  _handle_response(response: AxiosResponse) {
    if (response.status !== 200) return new NuRequestException(response);
    return response.data;
  }

  get(url: string): Promise<any> {
    return axios.get(url, { headers: this._headers });
  }

  post(url: string, body: any) {
    return axios.post(url, body, { headers: this._headers });
  }
}
