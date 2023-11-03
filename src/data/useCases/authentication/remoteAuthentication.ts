import { HttpPostClient, HttpStatusCode } from "@/data/protocols/http";
import {
  UnexpectedError,
  InvalidCredentialsError,
  NotFoundError,
  ServerError,
} from "@/domain/errors";
import { Authentication, AuthenticationParams } from "@/domain/useCases";
import { AccountModel } from "@/domain/models";

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.notFound:
        throw new NotFoundError();
      case HttpStatusCode.serverError:
        throw new ServerError();
      default:
        throw new UnexpectedError();
    }
  }
}
