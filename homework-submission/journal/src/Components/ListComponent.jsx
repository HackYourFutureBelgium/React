import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Avatar } from 'antd';

// function ListComponent() {
//   const [data, setData] = useState();
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios('http://142.93.51.96/posts');
//       setData(result.data);
//     };
//     fetchData();
//   }, []);
//   return (
//     <ul>
//       {data.map(item => (
//         <li key={item.objectID}>{item.content}</li>
//       ))}
//     </ul>
//   );
// }

function ListComponent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://142.93.51.96/posts/')
      .then(res => {
        // console.log(res);
        setPosts(res.data);
      })
      .catch(err => {
        // console.log(err);
      });
  }, []);

  // const postItemss = posts.map(post => (
  //   <ul>
  //     <li key={post.id}>{post.title}</li>
  //     <br></br>
  //     <li>{post.content}</li>
  //   </ul>
  // ));

  const postItems = posts.map(post => post);
  console.log(postItems);

  return (
    <div>
      <List
        // itemLayout="horizontal"
        dataSource={postItems}
        renderItem={post => (
          <List.Item>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <a href={`/${post.id}`}>{post.title}</a>
          </List.Item>
        )}
      />
    </div>
  );
}

//   <div>
//     <List
//       itemLayout="horizontal"
//       dataSource={postItemss}
//       renderItem={item => (
//         <List.Item>
//           <List.Item.Meta
//             avatar={
//               <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
//             }
//             title={<a href="https://ant.design">{post.title}</a>}
//             description="Ant Design, a design language for background applications, is refined by Ant UED Team"
//           />
//         </List.Item>
//       )}
//     />
//     ;
//   </div>;
// }
export default ListComponent;
