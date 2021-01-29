import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteComponent from './DeleteComponent';
import ErrorComponent from './ErrorComponent';
import executeGetRequest from './helpers/auth';
import axios from 'axios';
const ListComponent = () => {
  const [posts, setPosts] = useState([]);

  const [error, setError] = useState({});
  useEffect(() => {
    executeGetRequest('posts', data => {
      setPosts(data);
    });
    return () => {};
  });

  return (
    <div>
      {posts.map(function(item) {
        const postLink = `${item.id}`;
        const postTitle = item.title;
        const postContent = item.content;

        return (
          <div>
            <Link to={postLink}>
              <h1>{postTitle}</h1>
            </Link>

            <p>{postContent}</p>
            <form
              onSubmit={event => {
                event.preventDefault();
                DeleteComponent(`${item.id}`);
              }}
            >
              <input type="submit" value="delete" />
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default ListComponent;
