import { HttpClient } from "../api/httpClient";

export class NuAuth {
  constructor(private http: HttpClient) {}

  public passwordAuth(cpf: string, password: string) {
    const payload = {
      grant_type: "password",
      login: cpf,
      password: password,
      client_id: "other.conta",
      client_secret: "yQPeLzoHuJzlMMSAjC-LgNUJdUecx8XO",
    };
    return;
  }
}
