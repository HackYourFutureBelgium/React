import React from 'react';
import postImg from '../_assets/post.jpg';


const ContentShowPost = ({ newPosts }) => {
  let post = newPosts[0];

  if (post === undefined) return null;

  return (
    < >
      <h2>Your New Post was Added: </h2>
      <hr />
      <h3>{post.title}</h3>
      <img src={postImg} alt='new post' style={{ width: '70%', margin: 'auto', padding: '3%' }} />
      <p>{post.content}</p>
    </>
  )
}

export default ContentShowPost;