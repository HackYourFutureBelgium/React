import React, { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';
import { Redirect } from 'react-router';
import axios from 'axios';

const Create = ({ setError }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [res, setRes] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const d = await axios(`http://142.93.51.96/posts`, {
      newTitle,
      newContent,
    })
      .then(data => {
        return data.data[0];
      })
      .catch(e => {
        setError(e);
      });
    setRes(d.id);
  };

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      {res !== '' ? (
        <Redirect to={`/${res}`} />
      ) : (
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
      )}
    </div>
  );
};
export default Create;
