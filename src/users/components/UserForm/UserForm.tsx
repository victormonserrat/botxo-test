import React from "react";
import { Form } from "semantic-ui-react";

export interface Props {
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  age: number;
  setAge: (age: number) => void;
  connections: number;
  setConnections: (connections: number) => void;
  description: string;
  setDescription: (description: string) => void;
}

export const UserForm: React.FunctionComponent<Props> = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  age,
  setAge,
  connections,
  setConnections,
  description,
  setDescription,
}) => {
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="First name"
          placeholder="First name"
          value={firstName}
          onChange={(event, { value }) => {
            setFirstName(value);
          }}
        />
        <Form.Input
          fluid
          label="Last name"
          placeholder="Last name"
          value={lastName}
          onChange={(event, { value }) => {
            setLastName(value);
          }}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Age"
          type="number"
          min={0}
          placeholder="Age"
          value={age}
          onChange={(event, { value }) => {
            setAge(+value);
          }}
        />
        <Form.Input
          fluid
          label="Connections"
          type="number"
          min={0}
          placeholder="Connections"
          value={connections}
          onChange={(event, { value }) => {
            setConnections(+value);
          }}
        />
      </Form.Group>
      <Form.TextArea
        label="Description"
        placeholder="Description"
        value={description}
        onChange={(event, { value }) => {
          setDescription(value ? value.toString() : "");
        }}
      />
    </Form>
  );
};

export default UserForm;
