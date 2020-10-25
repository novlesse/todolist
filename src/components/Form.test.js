import React from "react";
import Form from "./Form";
import ReactDOM from "react-dom";

describe("Testing form component", () => {
  it("Test form h2-label and button name attribute", () => {
    const root = document.createElement("div");
    ReactDOM.render(<Form />, root);

    expect(root.querySelector("label").textContent).toBe(
      "What needs to be done?"
    );

    expect(root.querySelector("button").textContent).toBe("Add");
  });
});
