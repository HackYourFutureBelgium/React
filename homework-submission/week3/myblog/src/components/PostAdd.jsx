import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Button,
  Card
} from 'antd';

const PostAdd = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postForm, setPostForm] = useState(false);

  useEffect((postTitle, postContent) => {
    let url = 'http://142.93.51.96/posts';
    if (postForm === true) {
      fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ title: postTitle, content: postContent })
      })
        .then(res => res.json())
        .then(response => {
          console.log(response);
        })
    }
  }, [postForm]);

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="Add Post" bordered={false} style={{ width: '70%', margin: 'auto' }}>
        <Form onSubmit={(event) => {
          event.preventDefault();
          setPostForm(true);
        }}>
          <Form.Item  >
            <Input
              type="text"
              placeholder="Post Title"
              value={postTitle} onChange={(event) => {
                event.preventDefault();
                setPostTitle(event.target.value);
              }}
            />
          </Form.Item>
          <Form.Item  >
            <Input.TextArea
              type="textarea"
              placeholder="Write your post"
              value={postContent} onChange={(event) => {
                event.preventDefault();
                setPostContent(event.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" >    Add Post</Button>
          </Form.Item >
        </Form>
      </Card>
    </div >
  )
};

export default PostAdd;
