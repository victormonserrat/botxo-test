import { action } from "@storybook/addon-actions";
import faker from "faker";
import React from "react";
import UserForm from "./UserForm";

export default {
  title: "User Form",
  component: UserForm,
};

export const Default = () => (
  <UserForm
    firstName={""}
    setFirstName={action("changed first name")}
    lastName={""}
    setLastName={action("changed last name")}
    age={0}
    setAge={action("changed age")}
    connections={0}
    setConnections={action("changed connections")}
    description={""}
    setDescription={action("changed description")}
  />
);

export const Completed = () => (
  <UserForm
    firstName={faker.name.firstName()}
    setFirstName={action("changed first name")}
    lastName={faker.name.lastName()}
    setLastName={action("changed last name")}
    age={faker.random.number(99)}
    setAge={action("changed age")}
    connections={faker.random.number(999)}
    setConnections={action("changed connections")}
    description={faker.lorem.sentences()}
    setDescription={action("changed description")}
  />
);
