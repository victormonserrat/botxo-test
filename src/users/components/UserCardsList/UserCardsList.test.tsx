import { mount, shallow } from "enzyme";
import React from "react";
import UserCardsList from "./UserCardsList";
import UserCard from "../UserCard/UserCard";

describe("UserCardsList", () => {
  const onClickMock = jest.fn();
  const wrapper = mount(
    <UserCardsList
      users={[
        {
          firstName: "",
          lastName: "",
          avatar: "",
          age: 0,
          description: "",
          connections: 0,
        },
      ]}
      onClick={onClickMock}
    />
  );

  it("should be rendered correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("can be clicked on items", () => {
    wrapper.find(UserCard).first().simulate("click");

    expect(onClickMock).toHaveBeenCalledWith(0);
  });
});
