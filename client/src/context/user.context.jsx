import {
  useMemo, createContext, useEffect, useState,
} from 'react';

import userService from '../api/user-service';

export const UserContext = createContext({
  currentUser: {},
  setCurrentUser: () => {},
});

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const createUser = async (username) => {
    const { token, user } = await userService.createUser(username);

    const newUser = {
      id: user._id,
      username: user.username,
      image: user.image.png,
      token,
    };

    setCurrentUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const checkUser = async (userToCheck) => {
    const { id } = userToCheck;
    const { user } = await userService.getUser(id);

    if (user)
      setCurrentUser(JSON.parse(localStorage.getItem('user')));
    else
      localStorage.removeItem('user');
  };

  useEffect(() => {
    if (localStorage.getItem('user'))
      checkUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  const value = useMemo(() => ({ currentUser, setCurrentUser, createUser }), [currentUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
