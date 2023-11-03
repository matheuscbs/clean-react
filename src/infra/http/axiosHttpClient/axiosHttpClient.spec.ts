import axios from "axios";
import Chance from "chance";
import { AxiosHttpClient } from ".";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const chance = new Chance();

describe("AxiosHttpClient", () => {
  test("Should call axios with correct URL", async () => {
    const sut = new AxiosHttpClient();
    const url = chance.url();
    await sut.post({ url });
    expect(mockedAxios).toHaveBeenCalledWith(url);
  });
});
