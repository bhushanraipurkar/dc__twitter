import axios from "axios";
import "../typings/user.d";
import { getAllUserByEmail } from "./AllQueries/queries";

export async function getUserByEmail(email: string|null|undefined): Promise<ResponseData> {
  const response = await axios.get(`${getAllUserByEmail}/`);
  const user = response.data as User;
  return {
    data: user,
    message: 'Logged In',
  };
}