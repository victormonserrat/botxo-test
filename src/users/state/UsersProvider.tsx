import React from "react";
import UsersContext from "./UsersContext";
import usersReducer, { initialState } from "./usersReducer";

export interface Props {
  children: React.ReactNode;
}

export const UsersProvider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(usersReducer, initialState);

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
