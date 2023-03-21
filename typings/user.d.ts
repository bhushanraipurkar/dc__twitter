interface User {
  _id: string;
  name: string;
  email: string;
  imageUrl: string;
  followers: string[];
  following: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ResponseData {
  data: User | null;
  message: string;
}
