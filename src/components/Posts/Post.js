import React from "react";
import Comments from "../Comments/Comments";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

const Post = (props) => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost, id } = props;

  return (
    <div className="post-border">
      <PostHeader
        key={id}
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={post.imageUrl} />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection key={id} likePost={likePost} post={post} />
      {/* Comments also wants its props! */}
      <Comments key={id} comments={post.comments} />
    </div>
  );
};

export default Post;
