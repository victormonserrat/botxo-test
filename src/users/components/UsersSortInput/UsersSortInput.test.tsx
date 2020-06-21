import { mount, shallow } from "enzyme";
import React from "react";
import { Dropdown, DropdownItem } from "semantic-ui-react";
import UsersSortInput from "./UsersSortInput";

describe("UserCard", () => {
  const onChangeMock = jest.fn();

  it("should be rendered correctly", () => {
    const component = shallow(<UsersSortInput onChange={onChangeMock} />);

    expect(component).toMatchSnapshot();
  });

  it("should be unselected by default", () => {
    const wrapper = mount(<UsersSortInput onChange={onChangeMock} />);

    expect(wrapper.find(Dropdown).prop("text")).toBe("Order by");
  });

  it("can be changed", () => {
    const wrapper = mount(<UsersSortInput onChange={onChangeMock} />);

    wrapper.find(DropdownItem).first().simulate("click");

    expect(onChangeMock).toHaveBeenCalledWith("firstName");
  });
});
