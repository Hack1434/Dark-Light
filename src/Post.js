import React, { useState } from 'react';


function Post({ title, content }) {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="PostContainer">
      <h2 className="PostTitle">{title}</h2>
      <p className="PostContent">{content}</p>
      <button 
        className={`LikeButton ${liked ? 'Liked' : ''}`} 
        onClick={handleLikeClick}
      >
        {liked ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
}

export default Post;
