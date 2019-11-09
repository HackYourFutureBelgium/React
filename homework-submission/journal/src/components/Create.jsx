import React, { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';

const Create = () => {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`http://142.93.51.96/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title: newTitle,
        content: newContent,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card style={{ width: '100%' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            <Input
              type="text"
              value={newTitle}
              placeholder="Title"
              onChange={e => {
                e.preventDefault();
                setNewTitle(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Input.TextArea
              type="textarea"
              value={newContent}
              placeholder="write a new post"
              onChange={e => {
                e.preventDefault();
                setNewContent(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Create;
