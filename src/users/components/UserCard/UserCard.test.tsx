import { shallow } from "enzyme";
import React from "react";
import UserCard from "./UserCard";

describe("UserCard", () => {
  const onClickMock = jest.fn();
  const component = shallow(
    <UserCard
      firstName={""}
      lastName={""}
      avatar={""}
      age={0}
      description={""}
      connections={0}
      onClick={onClickMock}
    />
  );

  it("should be rendered correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should be clickable", () => {
    component.simulate("click");

    expect(onClickMock).toHaveBeenCalled();
  });
});
