import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Radio } from 'antd';

const Creatcomponent = () => {
  const [formState, setFormState] = useState({ formLayout: 'horizontal' });

  const handleFormLayoutChange = e => {
    setFormState({ formLayout: e.target.value });
  };

  const { formLayout } = formState;
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;
  return (
    <div>
      <Form layout={formLayout}>
        <Form.Item label="Title" {...formItemLayout}>
          <Input placeholder="Title" />
        </Form.Item>

        <Form.Item label="Content" {...formItemLayout}>
          <Input placeholder="Content" />
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Creatcomponent;
