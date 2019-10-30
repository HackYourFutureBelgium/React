import React from 'react';
import {
  useParams
} from "react-router-dom";
import { Card } from 'antd';
import postImg from '../assets/post.jpg';

let changeDate = (date) => (
  date.slice(8, 10) + '-' + date.slice(5, 7) + '-' + date.slice(0, 4)
);

const PostDetail = ({ data }) => {
  const { id } = useParams();
  let post = data.find(x => x.id === parseInt(id));

  if (post === undefined) return null;

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title={post.title} bordered={false} style={{ width: '70%', margin: 'auto' }} cover={
        <img
          alt="example"
          src={postImg}
          style={{ width: '70%', margin: 'auto', padding: '3%' }}
        />
      } >
        <p>{post.content}</p>
        <p style={{ textAlign: 'right' }}>Post writed at {changeDate(post.created_at)}</p>
      </Card>    </div>
  )
}

export default PostDetail;