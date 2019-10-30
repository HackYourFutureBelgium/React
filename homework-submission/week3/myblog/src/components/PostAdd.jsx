import React from 'react';
import {
  Form,
  Input,
  Button,
  Card
} from 'antd';


const PostAdd = () => (
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="Add Post" bordered={false} style={{ width: '70%', margin: 'auto' }}>
      <Form.Item   >
        <Input
          type="text"
          placeholder="Post Title"
        />
        <Input.TextArea
          type="textarea"
          placeholder="Write your post"
        />
        <Button type="primary" htmlType="submit" >    Add Post</Button>
      </Form.Item >
    </Card>
  </div>
);

export default PostAdd;