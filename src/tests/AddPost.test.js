import React from "react";
import { render, screen, logRoles, fireEvent } from "@testing-library/react";
import AddPost from "../Components/AddPost";
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter as Router } from "react-router-dom";

test("Initial Post", async () => {
  render(
    <Provider store={store}>
      <Router>
        <AddPost />
      </Router>
    </Provider>
  );
  const titleInput = screen.getByRole("textbox", { name: "Title" });
  expect(titleInput).toBeInTheDocument();
  const bodyInput = screen.getByRole("textbox", { name: "Body" });
  expect(bodyInput).toBeInTheDocument();
  const submitButton = screen.getByRole("button");
  expect(submitButton).toBeDisabled();
});

test("Add Post", () => {
  render(
    <Provider store={store}>
      <Router>
        <AddPost />
      </Router>
    </Provider>
  );
  const titleInput = screen.getByRole("textbox", { name: "Title" });
  expect(titleInput).toBeInTheDocument();
  const bodyInput = screen.getByRole("textbox", { name: "Body" });
  expect(bodyInput).toBeInTheDocument();
  const submitButton = screen.getByRole("button");
  fireEvent.change(titleInput, { target: { value: "Title 1" } });
  fireEvent.change(bodyInput, { target: { value: "Body 1" } });
  expect(submitButton).toBeEnabled();
});
