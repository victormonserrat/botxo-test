import { User, UsersSortCriteria } from "../models";

export type UsersAction =
  | FetchUsers
  | FetchUsersSuccess
  | FetchUsersFailure
  | SortUsers
  | IncrementUsersLimit
  | AddUser
  | RemoveUser;

export type FetchUsers = {
  type: "FETCH_USERS";
};

export type FetchUsersSuccess = {
  type: "FETCH_USERS_SUCCESS";
  users: User[];
};

export type FetchUsersFailure = {
  type: "FETCH_USERS_FAILURE";
  error: number;
};

export type SortUsers = {
  type: "SORT_USERS";
  criteria: UsersSortCriteria;
};

export type IncrementUsersLimit = {
  type: "INCREMENT_USERS_LIMIT";
};

export type AddUser = {
  type: "ADD_USER";
  user: User;
};

export type RemoveUser = {
  type: "REMOVE_USER";
  index: number;
};

export default UsersAction;
