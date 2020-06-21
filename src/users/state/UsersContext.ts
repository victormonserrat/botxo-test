import React from "react";
import UsersAction from "./UsersAction";
import { initialState } from "./usersReducer";
import UsersState from "./UsersState";

export const UsersContext = React.createContext<{
  state: UsersState;
  dispatch: (action: UsersAction) => void;
}>({
  state: initialState,
  dispatch: () => {},
});

export default UsersContext;
