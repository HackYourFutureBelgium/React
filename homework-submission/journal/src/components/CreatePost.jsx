import React, { useState } from 'react'
import {
  Form,
  Input,
  Button,
  Card
} from 'antd';

const CreatePost =({ title, content })=> {
  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')
  const submit = (prop1, prop2) => {
    fetch('http://142.93.51.96/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: prop1,
        content: prop2,
      }),
      
    });
  };
  
return (
<div style={{ background: '#ECECEC', paddingTop: '30px', paddingBottom: '30px' }}>
<Card title="Create Post" bordered={false} 
style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '75px'}}>
  <Form onSubmit={event => {
      event.preventDefault();
      setNewTitle(title);
      setNewContent(content);
      submit(newTitle,newContent);
    }} >
    <Form.Item  >
      <Input
        type="text"
        placeholder="Post Title"
        value={newTitle} onChange={(event) => {
          event.preventDefault();
          setNewTitle(event.target.value);
        }}
      />
    </Form.Item>
    <Form.Item  >
      <Input.TextArea
        type="textarea"
        placeholder="Write your post"
        value={newContent} onChange={(event) => {
          event.preventDefault();
          setNewContent(event.target.value);
        }}
      />
    </Form.Item>
    <Form.Item>
      <Button type="submit" htmlType="submit" >Submit</Button>
    </Form.Item >
  </Form>
</Card>
</div >)
}

export default CreatePost