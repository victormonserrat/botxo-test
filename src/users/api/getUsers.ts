import faker from "faker";
import { User } from "../models";
import users from "./users.json";

export const getUsers = async (): Promise<User[]> => {
  return users.map(({ name, surname, image, description, connectedUsers }) => ({
    firstName: name,
    lastName: surname,
    avatar: image || faker.internet.avatar(),
    age: faker.random.number(99),
    description,
    connections: connectedUsers,
  }));
};

export default getUsers;
