import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    handleGet(req, res);
  } else if (req.method === 'POST') {
    handlePost(req, res);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.query;
  try {
    const response = await axios.get(
      `${process.env.API_LINK}/user/get/${email}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.post(
      `${process.env.API_LINK}/user/register` as string,
      {
        name: req.body.name,
        email: req.body.email,
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
