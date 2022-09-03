import {
  useMemo, createContext, useEffect, useState,
} from 'react';

export const UserContext = createContext({
  currentUser: {},
  setCurrentUser: () => {},
});

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('user'))
      setCurrentUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  const value = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
