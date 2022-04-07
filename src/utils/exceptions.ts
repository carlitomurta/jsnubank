import { AxiosResponse } from "axios";

export class NuException extends String {
  constructor(message: string) {
    super(message);
  }
}

export class NuInvalidAuthenticationMethod extends NuException {
  constructor(message: string) {
    super(message);
  }
}

export class NuMissingCreditCard extends NuException {
  constructor() {
    super(
      "Não foi possível buscar o extrato pois não foi encontrado um cartão de crédito."
    );
  }
}

export class NuRequestException extends NuException {
  constructor(response: AxiosResponse) {
    super(`A request falhou com o código de erro ${response.status}`);
  }
}
