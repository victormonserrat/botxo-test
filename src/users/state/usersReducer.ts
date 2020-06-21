import UsersAction from "./UsersAction";
import UsersState from "./UsersState";

export const initialState = {
  error: undefined,
  users: undefined,
  limit: 15,
  fetching: false,
  sortCriteria: undefined,
};

export const usersReducer = (
  state: UsersState = initialState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case "FETCH_USERS": {
      return {
        ...initialState,
        fetching: true,
      };
    }
    case "FETCH_USERS_SUCCESS": {
      return {
        ...state,
        fetching: false,
        users: action.users,
      };
    }
    case "FETCH_USERS_FAILURE": {
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    }
    case "SORT_USERS": {
      return {
        ...state,
        sortCriteria: action.criteria,
        users: state.users?.sort((a, b) => {
          if (a[action.criteria]! < b[action.criteria]!) {
            return 1;
          }
          if (a[action.criteria]! > b[action.criteria]!) {
            return -1;
          }

          return 0;
        }),
      };
    }
    case "INCREMENT_USERS_LIMIT": {
      return {
        ...state,
        limit: state.limit + 15,
      };
    }
    case "ADD_USER": {
      return {
        ...state,
        users: [action.user, ...state.users!],
      };
    }
    case "REMOVE_USER": {
      const users = state.users!;
      users.splice(action.index, 1);

      return {
        ...state,
        users,
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
