import React, { useState } from 'react';
import axios from 'axios';

import {
  Form,
  Input,
  Button,
  Card
} from 'antd';



const PostAdd = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');


  let handleSubmit = () => {
    
      
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFpbWFsQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkFpbWFsIiwibGFzdE5hbWUiOiJNYWFyaWoiLCJ1dWlkIjoiOGFiMDhmMjEtZDMyZC00ZjU5LWE0ZmItM2QwMjI3NDY0ZWIxIn0.XvlKLvJcTmZ6iYpsHrqBxUGAtQLemw_q37kAVn39qss";
      const options = {
        headers: { 'Authorization': token }
      };

      let body = {"title": postTitle, "content": postContent}
       axios.post(`http://142.93.51.96/posts`, body , options)
         .then(res => {
          console.log(res.data);

          
          

         })
         .catch(err => console.log(err))
    
  };

 

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="Add Post" bordered={false} style={{ width: '70%', margin: 'auto' }}>
        <Form onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
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
            <Button type="primary" htmlType="submit" > Add Post</Button>
          </Form.Item >
        </Form>
      </Card>
    </div >
  )
};

export default PostAdd;