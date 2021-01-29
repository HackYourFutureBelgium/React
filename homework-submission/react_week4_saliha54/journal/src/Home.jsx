import React from 'react';
import { Card } from 'antd';

import 'antd/dist/antd.css';
import './App.css';

const gridStyle = {
  width: '100%',
  textAlign: 'center',
};

function Home({ data }) {
  return (
    <div className="Home">
      <Card title="Notes" extra={<a href="/create">+</a>} style={{ width: 600 }}>
        {data.map((note, key) => (
          <a href={`${data.indexOf(note)}`} key={key}>
            <Card.Grid key={key} style={gridStyle}>
              {note.title}
            </Card.Grid>
          </a>
        ))}
      </Card>
      <a href="/error">Error Page</a>
      <a href="/login">Login Page</a>
      <a href="/register">Register Page</a>
    </div>
  );
}

export default Home;
