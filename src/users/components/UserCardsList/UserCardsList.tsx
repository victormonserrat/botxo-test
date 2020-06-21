import React from "react";
import { Card } from "semantic-ui-react";
import { User } from "../../models";
import UserCard from "../UserCard/UserCard";

export interface Props {
  users: User[];
  onClick: (index: number) => void;
}

export const UserCardsList: React.FunctionComponent<Props> = ({
  users,
  onClick,
}) => {
  return (
    <Card.Group itemsPerRow={3} doubling stackable>
      {users.map(
        (
          { firstName, lastName, avatar, age, description, connections },
          index
        ) => (
          <UserCard
            key={index}
            firstName={firstName}
            lastName={lastName}
            avatar={avatar}
            age={age}
            description={description}
            connections={connections}
            onClick={() => {
              onClick(index);
            }}
          />
        )
      )}
    </Card.Group>
  );
};

export default UserCardsList;
