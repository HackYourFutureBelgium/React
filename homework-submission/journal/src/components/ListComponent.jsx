import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DetailComponent from './DetailComponent';
import DeleteComponent from './DeleteComponent';

const ListComponent = () => {
  const [posts, setPosts] = useState(null);
  const [query, setQuery] = useState('posts');

  useEffect(() => {
    if (query) {
      fetch(`http://142.93.51.96/${query}`)
        .then(res => res.json())
        .then(result => {
          setPosts(result);
        })
        .catch(function() {
          console.error('there is an error');
        });
    }
  }, [query]);
  if (posts == null) {
    return 'hello';
  } else {
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
  }
};
export default ListComponent;
