import { action } from "@storybook/addon-actions";
import faker from "faker";
import React from "react";
import UserCard from "../UserCard";

export default {
  title: "User Card",
  component: UserCard,
};

export const Default = () => (
  <UserCard
    firstName={faker.name.firstName()}
    lastName={faker.name.lastName()}
    description={faker.lorem.sentences()}
    connections={faker.random.number(999)}
    onClick={action("clicked")}
  />
);

export const WithAvatar = () => (
  <UserCard
    firstName={faker.name.firstName()}
    lastName={faker.name.lastName()}
    avatar={faker.image.avatar()}
    description={faker.lorem.sentences()}
    connections={faker.random.number(999)}
    onClick={action("clicked")}
  />
);

export const WithAge = () => (
  <UserCard
    firstName={faker.name.firstName()}
    lastName={faker.name.lastName()}
    age={faker.random.number(99)}
    description={faker.lorem.sentences()}
    connections={faker.random.number(999)}
    onClick={action("clicked")}
  />
);

export const Completed = () => (
  <UserCard
    firstName={faker.name.firstName()}
    lastName={faker.name.lastName()}
    avatar={faker.image.avatar()}
    age={faker.random.number(99)}
    description={faker.lorem.sentences()}
    connections={faker.random.number(999)}
    onClick={action("clicked")}
  />
);
