import { action } from "@storybook/addon-actions";
import React from "react";
import UsersSortInput from "./UsersSortInput";

export default {
  title: "Users Sort input",
  component: UsersSortInput,
};

export const Default = () => <UsersSortInput onChange={action("clicked")} />;

export const Selected = () => (
  <UsersSortInput criteria={"firstName"} onChange={action("clicked")} />
);
