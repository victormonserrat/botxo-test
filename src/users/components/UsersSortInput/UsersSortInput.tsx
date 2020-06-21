import React from "react";
import { Dropdown } from "semantic-ui-react";
import { UsersSortCriteria } from "../../models";

export interface Props {
  criteria?: UsersSortCriteria;
  onChange: (criteria: UsersSortCriteria) => void;
}

export const UsersSortInput: React.FunctionComponent<Props> = ({
  criteria,
  onChange,
}: Props) => {
  const options = [
    { key: 0, text: "First name", value: "firstName" },
    { key: 1, text: "Last name", value: "lastName" },
    { key: 2, text: "Age", value: "age" },
    { key: 3, text: "Connections", value: "connections" },
  ];

  return (
    <Dropdown
      item
      options={options}
      text={
        (criteria === "firstName" && "First Name") ||
        (criteria === "lastName" && "Last Name") ||
        (criteria === "age" && "Age") ||
        (criteria === "connections" && "Connections") ||
        "Order by"
      }
      onChange={(event, { value }) => {
        onChange(value as UsersSortCriteria);
      }}
    />
  );
};

export default UsersSortInput;
