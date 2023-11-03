import Chance from "chance";
import { AuthenticationParams } from "@/domain/useCases/authentication";
import { AccountModel } from "../models/accountModel";

const chance = new Chance();

export const mockAuthentication = (): AuthenticationParams => ({
  email: chance.email(),
  password: chance.string(),
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: chance.guid(),
});
