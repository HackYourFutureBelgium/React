
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Card } from 'antd';

const CreatePost = () => {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [submitForm, setSubmitForm] = useState(false);

  useEffect((newTitle, newContent) => {
    let url = 'http://142.93.51.96/posts';
    if (submitForm === true) {
      fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ title: newTitle, content: newContent })
      })
        .then(res => res.json())
        .then(response => {
          console.log(response);
        })
    }
  }, [submitForm]);

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card style={{ width: '50%',marginTop:'7%', marginLeft: 'auto', marginRight:'auto' }}>
      <div><h1><b><center>Create Post</center></b></h1></div>
        <Form onSubmit={(event) => {
          event.preventDefault();
          setSubmitForm(true);
        }}>
          <Form.Item  >
            <Input
              type="text"
              placeholder="Post Title Here"
              value={newTitle} onChange={(event) => {
                event.preventDefault();
                setNewTitle(event.target.value);
              }}
            />
          </Form.Item>
          <Form.Item  >
            <Input.TextArea
              type="textarea"
              placeholder="Post Text Here"
              value={newContent} onChange={(event) => {
                event.preventDefault();
                setNewContent(event.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" > Submit </Button>
          </Form.Item >
        </Form>
      </Card>
    </div >
  )
};

export default CreatePost;