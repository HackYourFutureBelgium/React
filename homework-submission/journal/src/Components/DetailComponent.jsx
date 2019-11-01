// import React from 'react';
// import { useParams } from 'react-router';

// const DetailComponent = () => {
//   const { id } = useParams();
//   // ıt needs params to pass the id of data

//   return <div>Details {id}</div>;
// };

// export default DetailComponent;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Card } from 'antd';
import axios from 'axios';

const DetailComponent = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(0);

  useEffect(() => {
    axios
      .get(`http://142.93.51.96/posts/${id}`)
      .then(res => res.json())
      .then(res => setDetail())
      .catch(err => err);
  }, []);
  // const getDetails = async () => {
  //   try {
  //     const response = await fetch(`http://142.93.51.96/posts/${id}`);
  //     const posts = await response.json();
  //     setDetail(posts[0]);
  //   } catch (e) {
  //     setDetail({ error: true });
  //   }
  // };
  // getDetails();

  return (
    <div>
      <Card title={detail.title}>
        <p>{detail.title}</p>
      </Card>
    </div>
  );
};
export default DetailComponent;
