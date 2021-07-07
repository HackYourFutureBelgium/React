import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ListComponent from './ListComponent';
const DetailComponent = () => {
  const [posts, setPosts] = useState(null);
  const [query, setQuery] = useState('posts');
  const { id } = useParams();

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
          if (item.id == id) {
            const postTitle = item.title;
            const postContent = item.content;
            const createdDate = item.created_at;
            const updatedDate = item.updated_at;

            console.log(item);

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
  }
};

export default DetailComponent;
