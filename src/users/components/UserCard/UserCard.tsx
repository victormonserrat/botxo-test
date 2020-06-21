import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { User } from "../../models";

export interface Props extends User {
  onClick?: () => void;
}

export const UserCard: React.FunctionComponent<Props> = ({
  firstName,
  lastName,
  avatar,
  age,
  description,
  connections,
  onClick,
}) => {
  return (
    <Card fluid onClick={onClick}>
      <Card.Content>
        {avatar && <Image floated="right" rounded size="mini" src={avatar} />}
        <Card.Header>
          {firstName} {lastName}
        </Card.Header>
        {age && <Card.Meta>{age} years old</Card.Meta>}
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        {connections} connections
      </Card.Content>
    </Card>
  );
};

export default UserCard;
