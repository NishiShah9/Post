import React from "react";
import PostCard from "./PostCard";

function PostsList(items: any) {
  const { posts } = items;
  return (
    <div className="posts-cards" data-testid="posts-cards" >
      {posts?.length === 0 && (
        <span className="no-post">No Post Available</span>
      )}
      {posts?.map((item: any) => {
        return <PostCard key={item.id} post={item} />;
      })}
    </div>
  );
}

export default PostsList;
