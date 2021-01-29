import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import executeGetRequest from './helpers/auth';

const DetailComponent = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    executeGetRequest(`posts/${id}`, data => {
      setPosts(data);
    });
    return () => {};
  });

  return (
    <div>
      {posts.map(function(item) {
        if (item.id == id) {
          const postTitle = item.title;
          const postContent = item.content;
          const createdDate = item.created_at;
          const updatedDate = item.updated_at;

          return (
            <div>
              <h1>Title: {postTitle}</h1>
              <p>Content: {postContent}</p>
              <p>Created at: {createdDate}</p>
              <p>Updated at: {updatedDate}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default DetailComponent;
