import React from "react";
import renderer from "react-test-renderer";
import App from "./App";
import { shallow } from "enzyme";

describe("App snapshot", () => {
  test("App snapshot test", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Test rendering of App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
