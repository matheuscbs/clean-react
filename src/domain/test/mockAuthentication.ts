import Chance from "chance";
import { AuthenticationParams } from "@/domain/useCases/authentication";

const chance = new Chance();

export const mockAuthentication = (): AuthenticationParams => ({
  email: chance.email(),
  password: chance.string(),
});
