import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { List, Avatar, Button, Skeleton, Card } from 'antd';
import DetailComponenet from './DetailComponenet';

// import reqwest from 'reqwest';

const ListComponenet = ({ setError }) => {
  const [data, setfetchResult] = useState('');

  useEffect(() => {
    // const result =
    axios
      .get(`http://142.93.51.96/posts/`, {
        headers: {
          Authorization: `Bearer:${localStorage.getItem('token')}`,
        },
      })
      .then(result => {
        setfetchResult(result.data);
      })
      .catch(error => setError(error));

    return () => {};
  });

  return (
    <div className="menuList">
      {/* {console.log(data)} */}
      <h3 style={{ marginBottom: 16 }}>Your Journal List</h3>
      <List
        // footer={
        //   <div className="creatJournalButton">
        //     <button onClick={<Link to="/create">Creat New</Link>}>Create Journal</button>
        //   </div>
        // }
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta title={<a href={item.id}>{item.title} </a>} content={item.content} />
          </List.Item>
        )}
      />
      <DetailComponenet data={data} />{' '}
    </div>
    // <div>
    //   {data.map((index, key) => {
    //     return (
    //       <link to={`/${index.id}`} key={key} className="float-left m-2">
    //         <Card title={index.title} style={{ width: '180px' }}>
    //           {index.content}
    //         </Card>
    //       </link>
    //     );
    //   })}
    // </div>
  );
};
// };

export default ListComponenet;
