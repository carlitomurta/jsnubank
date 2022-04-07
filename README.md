# jsnubank

Acesse seus extratos do Nubank por Javascript ([Baseado na versão python](https://github.com/andreroggeri/pynubank))

## Instalação

Disponível via npm

`npm install jsnubank`

## Autenticação

Primeiro de tudo, precisamos nos autenticar.

Para isso, além do seu CPF e senha usuais, precisamos de um fator extra de autenticação.

Temos 3 opções disponíveis, com seus respectivos exemplos:

- [QR Code](https://github.com/andreroggeri/pynubank/blob/master/examples/login-qrcode.md) (assim como é feito no app web. Obs: permite somente acesso aos dados do cartão de crédito)
- [Certificado](https://github.com/andreroggeri/pynubank/blob/master/examples/login-certificate.md) (assim como é feito no app mobile)
- [Certificado e Refresh Token](https://github.com/andreroggeri/pynubank/blob/master/examples/login-refresh-token.md)

Tendo seguido com sucesso uma das opções, você pode tentar um dos exemplos a seguir!

## Exemplos

> :warning: **Atenção**: O Nubank pode bloquear a sua conta por 72 horas caso detecte algum comportamento anormal !
> Por conta disso, **evite enviar muitas requisições**. Você também pode utilizar o MockHttpClient descrito abaixo.

## Contribuindo

Envie sua PR para melhorar esse projeto ! 😋
