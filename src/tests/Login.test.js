import React from "react";
import { render, screen, logRoles, fireEvent } from "@testing-library/react";
import AddPost from "../Components/AddPost";
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../Components/Login";

test("Initial Login", async () => {
  render(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>
  );
  const titleInput = screen.getByRole("textbox", { name: "Email" });
  expect(titleInput).toBeInTheDocument();
  const submitButton = screen.getByRole("button");
  expect(submitButton).toBeDisabled();
});

test("Submit Login", () => {
  render(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>
  );
  const titleInput = screen.getByRole("textbox", { name: "Email" });
  const submitButton = screen.getByRole("button");
  fireEvent.change(titleInput, { target: { value: "nishi@gmail.com" } });
  expect(submitButton).toBeEnabled();
});
