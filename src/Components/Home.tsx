import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getPost } from "../Redux/Actions/PostAction";
import { ROUTES } from "../Utils/Constant";
import MetaData from "./Common/MetaData";
import PostsList from "./Common/PostsList";

function Home() {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const postsDetails = useSelector((state: any) => state.posts);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  let token = localStorage.getItem("token") || null;

  useEffect(() => {
    if (posts.length === 0) {
      setLoading(true);
      dispatch(getPost());
    }
  }, [dispatch]);
  useEffect(() => {
    if (postsDetails?.posts?.length > 0) {
      setPosts(postsDetails?.posts);
      setLoading(false);
    }
  }, [postsDetails]);
  const handleSearch = (value: string) => {
    if (search) {
      const filterValue: any = [];
      postsDetails?.posts.map((item: any) => {
        if (item.title.includes(value)) {
          filterValue.push(item);
        }
      });
      setPosts(filterValue);
    } else {
      setPosts(postsDetails?.posts);
    }
    setSearch(value);
  };
  return (
    <div className="home-content">
      <MetaData title="Home" />
      <div className="home-list">
        <div>
          <h2>Post Listing</h2>
        </div>
        <div className="pr-5 d-flex">
          <div>
            <TextField
              placeholder="Search Posts"
              value={search}
              className="search-bar"
              autoComplete="off"
              InputLabelProps={{ shrink: false }}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          {token && (
            <div className="add-post-div">
              <Button
                onClick={() => navigate(ROUTES.ADD_POST)}
                className="header-button"
                variant="contained"
              >
                Add Post
              </Button>
            </div>
          )}
        </div>
      </div>
      <PostsList posts={posts} />
    </div>
  );
}

export default Home;
