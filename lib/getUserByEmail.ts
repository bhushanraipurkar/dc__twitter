import axios from 'axios';
import { API_Link } from '../config/config';
import '../typings/user.d';
import { getAllUserByEmail } from './AllQueries/queries';

// export async function getUserByEmail(
//   email: string | null | undefined
// ): Promise<ResponseData | []> {
//   const url = `https://1d00-103-115-183-162.in.ngrok.io/user/get/${email}`;
//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error:', error);
//     return [];
//   }
// }
export async function getUserByEmail(
  email: string | null | undefined
): Promise<ResponseData> {
  const response = await axios.get<ResponseData>(
    `${API_Link}/user/get/${email}`
  );
  return response.data;
}
