import React, { useState } from 'react';
import App from '../App';

const CreateComponent = ({ title, content }) => {
  const [postTitle, setPostTitle] = useState();
  const [postContent, setPostContent] = useState();
  const postToApi = (prop1, prop2) => {
    fetch('http://142.93.51.96/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: prop1,
        content: prop2,
      }),
    });
  };
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        setPostTitle(title);
        setPostContent(content);
        postToApi(postTitle, postContent);
        console.log(postContent);
      }}
    >
      <p>
        <label htmlFor="title">Enter your post title</label>
        <br />

        <input
          type="title"
          name="title"
          value={title}
          onChange={event => {
            setPostTitle(event.target.value);
          }}
        />
      </p>
      <p>
        <label>Post content</label>
        <br />
        <textarea
          id="myTextArea"
          rows="3"
          cols="80"
          value={content}
          onChange={event => {
            setPostContent(event.target.value);
          }}
        >
          Your content here
        </textarea>
      </p>
      <input type="submit" value="create" />
    </form>
  );
};

export default CreateComponent;
