import { action } from "@storybook/addon-actions";
import faker from "faker";
import React from "react";
import UserCardsList from "./UserCardsList";

export default {
  title: "User Cards list",
  component: UserCardsList,
};

export const Default = () => (
  <UserCardsList
    users={Array.from({ length: 9 }, () => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      avatar: faker.internet.avatar(),
      age: faker.random.number(99),
      description: faker.lorem.sentences(),
      connections: faker.random.number(999),
    }))}
    onClick={action("clicked")}
  />
);
