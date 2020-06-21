import { User, UsersSortCriteria } from "../models";

export interface UsersState {
  readonly error?: number;
  readonly users?: User[];
  readonly limit: number;
  readonly fetching: boolean;
  readonly sortCriteria?: UsersSortCriteria;
}

export default UsersState;
