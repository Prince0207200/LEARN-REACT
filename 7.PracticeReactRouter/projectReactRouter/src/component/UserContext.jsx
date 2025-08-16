// UserContext.jsx
import React from 'react';
import { MyContext } from './MyContext';

function UserContext({ children }) {
  const data=78;

  return (
    <MyContext.Provider value={{ data }}>
      {children}
    </MyContext.Provider>
  );
}

export default UserContext;
