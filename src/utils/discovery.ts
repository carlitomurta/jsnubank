import { HttpClient } from "../api/httpClient";
import { DISCOVERY_APP_URL, DISCOVERY_URL } from "./constants";
import { NuException } from "./exceptions";

export class Discovery {
  proxy_list_url = {};
  proxy_list_app_url = {};
  constructor(private http: HttpClient) {}

  _get_url(name: string, target: any) {
    let url = target[name];
    if (!url) return new NuException(`Não existe uma URL para ${name}`);
    return url;
  }

  get_url(name: string): string {
    return this._get_url(name, this.proxy_list_url);
  }

  get_app_url(name: string): string {
    return this._get_url(name, this.proxy_list_app_url);
  }

  _update_proxy_urls(): void {
    this.proxy_list_url = this.http.get(DISCOVERY_URL);
    this.proxy_list_app_url = this.http.get(DISCOVERY_APP_URL);
  }
}
