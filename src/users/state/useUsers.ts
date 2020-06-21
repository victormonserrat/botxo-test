import React from "react";
import getUsers from "../api/getUsers";
import { User, UsersSortCriteria } from "../models";
import UsersContext from "./UsersContext";

export const useUsers = () => {
  const {
    state: { error, users, limit, fetching, sortCriteria },
    dispatch,
  } = React.useContext(UsersContext);

  const fetch = async () => {
    dispatch({ type: "FETCH_USERS" });
    try {
      const users = await getUsers();

      dispatch({ type: "FETCH_USERS_SUCCESS", users });
    } catch (error) {
      dispatch({ type: "FETCH_USERS_FAILURE", error });
    }
  };

  const sortBy = async (criteria: UsersSortCriteria) => {
    dispatch({ type: "SORT_USERS", criteria });
  };

  const incrementLimit = async () => {
    dispatch({ type: "INCREMENT_USERS_LIMIT" });
  };

  const add = async (user: User) => {
    dispatch({ type: "ADD_USER", user });

    if (sortCriteria) {
      sortBy(sortCriteria);
    }
  };

  const update = async (index: number, user: User) => {
    remove(index);
    add(user);
  };

  const remove = async (index: number) => {
    dispatch({ type: "REMOVE_USER", index });
  };

  return {
    error,
    users,
    limit,
    fetching,
    sortCriteria,
    fetch,
    sortBy,
    incrementLimit,
    add,
    update,
    remove,
  };
};

export default useUsers;
