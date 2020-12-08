// Look at the number of likes on line 26. Right now it's hard coded to '100'.
// Use a piece of data coming in through props to display the correct number of likes.
// You will also add an onClick handler that utilizes `likePost` to increase the count of likes.
// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

const LikeSection = (props) => {
  // 🔥 Make sure the parent of LikeSection is passing the right props!
  const { likePost, post } = props;
  console.log(likePost);
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <FontAwesomeIcon onClick={() => likePost(post.id)} icon={faHeart} />{" "}
          {/* just having onClick={likePost(post.id)} makes for an infinite loop. Internet solution called for an anonymous function to make this work!*/}
        </div>
        <p key={post.id} className="like-number">
          {post.likes}
        </p>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
    </div>
  );
};

export default LikeSection;
