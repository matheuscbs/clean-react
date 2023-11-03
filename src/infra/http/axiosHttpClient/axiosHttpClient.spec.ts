import axios from "axios";
import Chance from "chance";
import { AxiosHttpClient } from ".";
import { HttpPostParams } from "@/data/protocols/http";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const chance = new Chance();

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

const mockPostRequest = (): HttpPostParams<unknown> => ({
  url: chance.url(),
  body: chance.string(),
});

describe("AxiosHttpClient", () => {
  test("Should call axios with correct URL and verb", async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url);
  });
});
