import React, { createContext } from "react";

export const UseDataContext = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
  });
  return (
    <div>
      <UseDataContext.Provider value={user}>{children}</UseDataContext.Provider>
    </div>
  );
};

export default UserContext;
