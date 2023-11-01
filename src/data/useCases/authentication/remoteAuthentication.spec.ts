import { RemoteAuthentication } from "./remoteAuthentication";
import { HttpPostClientSpy } from "../../test/mockHttpClient";
import Chance from "chance";

const chance = new Chance();

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = chance.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy,
  };
};

describe("RemoteAuthentication", () => {
  test("Should call HttpClient with correct URL", async () => {
    const url = chance.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
