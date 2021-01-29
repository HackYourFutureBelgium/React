import React, { useState } from 'react';
import { useParams } from 'react-router';
import 'antd/dist/antd.css';

import { Card } from 'antd';

const DetailComponenet = ({ data }) => {
  // const dataforDetail = data.map(info => {

  // })
  const { id } = useParams();

  // console.log(dataforDetail.title);
  return (
    <div>
      {/* Detail:{dataforDetail.title}
      <Card
        title="Default size card"
        extra={<a href={dataforDetail.id}>More</a>}
        style={{ width: 300 }}
      >
        <p>content {dataforDetail.content}</p>
      </Card> */}
    </div>
  );
};

export default DetailComponenet;
