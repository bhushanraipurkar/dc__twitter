import { createContext, useContext, useState } from 'react';

// export const TodoContext = React.createContext<UserContextType | null>(null);

// const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
//   const [todos, setTodos] = React.useState<User | null>(null);

//   const saveTodo = (todo: User) => {
//     const newTodo: User = {
//       __v: todo.__v,
//       _id: todo._id,
//       email: todo.email,
//       followers: todo.followers,
//       following: todo.following,
//       name: todo.name,
//       imageUrl: todo.imageUrl,
//       createdAt: todo.createdAt,
//       updatedAt: todo.updatedAt,
//     };
//     setTodos([...todos, newTodo]);
//   };
// };

// eslint-disable-next-line react-hooks/rules-of-hooks

// export const ThemeContext = createContext<UserContextType>({
//   user: null,
//   saveUser: (user:User) => {
//     const newUser: User = {
//       __v: user.__v,
//       _id: user._id,
//       email: user.email,
//       followers: user.followers,
//       following: user.following,
//       name: user.name,
//       imageUrl: user.imageUrl,
//       createdAt: user.createdAt,
//       updatedAt: user.updatedAt,
//     };
//     setUser(newUser);
//     }
// });
// export const useTheme = () => useContext(ThemeContext);

export const ThemeContext = createContext<UserContextType>({
  user: null,
});
export const useTheme = () => useContext(ThemeContext);
