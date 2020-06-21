import { shallow } from "enzyme";
import React from "react";
import UserForm from "./UserForm";

describe("UserForm", () => {
  it("should be rendered correctly", () => {
    const setFirstNameMock = jest.fn();
    const setLastNameMock = jest.fn();
    const setAge = jest.fn();
    const setDescription = jest.fn();
    const setConnections = jest.fn();
    const component = shallow(
      <UserForm
        firstName=""
        setFirstName={setFirstNameMock}
        lastName=""
        setLastName={setLastNameMock}
        age={0}
        setAge={setAge}
        description=""
        setDescription={setDescription}
        connections={0}
        setConnections={setConnections}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
