import { HttpPostClient } from "@/data/protocols/http/httpPostClient";
import { HttpStatusCode } from "@/data/protocols/http/httpResponse";
import { UnexpectedError } from "@/domain/errors/unexpectedError";
import { InvalidCredentialsError } from "@/domain/errors/invalidCredentialsError";
import { AuthenticationParams } from "@/domain/useCases/authentication";
import { NotFoundError } from "@/domain/errors/notFound";
import { ServerError } from "@/domain/errors/serverError";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return Promise.resolve();
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
