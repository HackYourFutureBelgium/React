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
      <Card title="Notes" extra={<a href="/Create">+</a>} style={{ width: 600 }}>
        {data.map(note => (
          <a href={`${data.indexOf(note)}`}>
            <Card.Grid style={gridStyle}>{note.title}</Card.Grid>
          </a>
        ))}
      </Card>
    </div>
  );
}

export default Home;
