import React from 'react';
import '../post/Post.css';

const Post = ({ post: { title, body, imgUrl, author }, index }) => {
  return (
    <div className='post-container'>
      <h1 className='heading'>{title}</h1>
      <img src={imgUrl} alt='' className='image' />
      <p>{body}</p>
      <div className='info'>
        <h4>Written by : {author}</h4>
      </div>
    </div>
  );
};

export default Post;
