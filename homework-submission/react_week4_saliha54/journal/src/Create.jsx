import React from 'react';
import { Card } from 'antd';

import 'antd/dist/antd.css';
import './App.css';

function Create() {
  return (
    <div className="Create">
      <Card title="" extra={<a href="/">Back</a>} style={{ width: 600 }}>
        <form>
          <input
            type="text"
            name="title"
            id="create_title"
            placeholder="Title"
            style={{ width: 400, height: 50 }}
          />
          <br />
          <input
            type="text"
            name="content"
            id="create_content"
            placeholder="Text"
            style={{ width: 400, height: 400 }}
          />
          <br />
          <input type="submit" value="Submit" id="create_submit" />
        </form>
      </Card>
    </div>
  );
}
export default Create;
