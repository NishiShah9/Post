import React from "react";
import { render, screen, logRoles, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import PostsList from "../Components/Common/PostsList";

test("Post are not available", async () => {
  render(
    <Provider store={store}>
      <Router>
        <PostsList posts={[]} />
      </Router>
    </Provider>
  );
  const titleInput = screen.getByText("No Post Available", { exact: false });
  expect(titleInput).toBeInTheDocument();
});

test("Post are available", async () => {
  render(
    <Provider store={store}>
      <Router>
        <PostsList
          posts={[
            {
              userId: 1,
              id: 1,
              title:
                "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            },
            {
              userId: 1,
              id: 2,
              title: "qui est esse",
              body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            },
            {
              userId: 1,
              id: 3,
              title:
                "ea molestias quasi exercitationem repellat qui ipsa sit aut",
              body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            },
          ]}
        />
      </Router>
    </Provider>
  );
  // logRoles(screen.getAllByLabelText("posts-card"));
  const titleInput = screen.queryByText("No Post Available", { exact: false });
  expect(titleInput).not.toBeInTheDocument();
  // const allPosts = screen.getByTestId("posts-cards");
  // expect(allPosts?.length).toEqual(2);
});
