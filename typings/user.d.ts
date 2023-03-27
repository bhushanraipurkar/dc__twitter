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

interface threeUser {
  oldUsers: User[];
  popularUsers: User[];
  suggestedUsers: User[];
}

interface longResponse {
  data: threeUser;
  message: string;
}

interface UserContextType {
  user: User | null;
}
