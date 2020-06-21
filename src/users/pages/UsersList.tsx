import faker from "faker";
import React from "react";
import { Button, Menu, Modal } from "semantic-ui-react";
import styled from "styled-components";
import UserCardsList from "../components/UserCardsList";
import UserForm from "../components/UserForm";
import UsersSortInput from "../components/UsersSortInput";
import useUsers from "../state/useUsers";

export const UsersList: React.FunctionComponent = () => {
  const {
    users,
    limit,
    sortCriteria,
    fetch,
    sortBy,
    incrementLimit,
    add,
    update,
    remove,
  } = useUsers();
  const [modalOpened, setModalOpened] = React.useState(false);
  const [editingIndex, setEditingIndex] = React.useState<number | undefined>();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [avatar, setAvatar] = React.useState(faker.internet.avatar());
  const [age, setAge] = React.useState(0);
  const [connections, setConnections] = React.useState(0);
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    fetch();
  }, []);

  React.useEffect(() => {
    if (editingIndex !== undefined) {
      setFirstName(users![editingIndex].firstName);
      setLastName(users![editingIndex].lastName);
      setAvatar(users![editingIndex].avatar || faker.internet.avatar());
      setAge(users![editingIndex].age || 0);
      setConnections(users![editingIndex].connections);
      setDescription(users![editingIndex].description);
    }
  }, [editingIndex]);

  const onClose = () => {
    setModalOpened(false);
    setEditingIndex(undefined);
    setFirstName("");
    setLastName("");
    setAvatar(faker.internet.avatar());
    setAge(0);
    setConnections(0);
    setDescription("");
  };

  return (
    <Wrapper>
      <Header>
        <Menu secondary>
          <Menu.Item>
            <h4>USERS</h4>
          </Menu.Item>
          <Menu.Menu position="right">
            <UsersSortInput criteria={sortCriteria} onChange={sortBy} />
            <Menu.Item>
              <Button
                onClick={() => {
                  setModalOpened(true);
                }}
              >
                Add User
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Header>
      <Cards>
        {users && (
          <UserCardsList
            users={users.slice(0, limit)}
            onClick={(index) => {
              setEditingIndex(index);
              setModalOpened(true);
            }}
          />
        )}
        <More>
          <Button fluid onClick={incrementLimit}>
            More...
          </Button>
        </More>
      </Cards>
      <Modal
        size="small"
        dimmer="blurring"
        open={modalOpened}
        onClose={onClose}
      >
        <Modal.Content>
          <UserForm
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            age={age}
            setAge={setAge}
            connections={connections}
            setConnections={setConnections}
            description={description}
            setDescription={setDescription}
          />
        </Modal.Content>
        <Modal.Actions>
          {editingIndex === undefined && (
            <>
              <Button basic onClick={onClose}>
                Cancel
              </Button>
              <Button
                basic
                positive
                onClick={() => {
                  add({
                    firstName,
                    lastName,
                    avatar,
                    age,
                    description,
                    connections,
                  });
                  onClose();
                }}
              >
                Save
              </Button>
            </>
          )}
          {editingIndex !== undefined && (
            <>
              <Button
                basic
                negative
                onClick={() => {
                  remove(editingIndex);
                  onClose();
                }}
              >
                Remove
              </Button>
              <Button
                basic
                positive
                onClick={() => {
                  update(editingIndex, {
                    firstName,
                    lastName,
                    avatar,
                    age,
                    description,
                    connections,
                  });
                  onClose();
                }}
              >
                Save
              </Button>
            </>
          )}
        </Modal.Actions>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  padding-bottom: 5em;
  background-color: #fafafa;
`;

const Header = styled.div`
  padding: 2em;
`;

const Cards = styled.div`
  padding: 1em 5vw;

  @media (min-width: 1600px) {
    padding: 1em 20vw;
  }
`;

const More = styled.div`
  margin-top: 2em;
`;

export default UsersList;
