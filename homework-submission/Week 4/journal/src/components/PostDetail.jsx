import React, {useState} from 'react';
import axios from 'axios';
import { Card } from 'antd';
import { useParams } from "react-router-dom";


const PostDetail = () => {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState ({result: []});
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFpbWFsQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkFpbWFsIiwibGFzdE5hbWUiOiJNYWFyaWoiLCJ1dWlkIjoiOGFiMDhmMjEtZDMyZC00ZjU5LWE0ZmItM2QwMjI3NDY0ZWIxIn0.XvlKLvJcTmZ6iYpsHrqBxUGAtQLemw_q37kAVn39qss";
  const posts = postDetail.result

    if(postDetail.result.length === 0){
        const options = {
            headers: {'Authorization': token}
        };

        axios.get ('http://142.93.51.96/posts', options)
        .then (response => setPostDetail({result: response.data}))
        .catch (error => console.log (error))

    }
  
    if (posts === null) {
      return null;
    } else {
      return (
        <div>
          {posts.map(function(item) {
            if (item.id == id) {
              const postTitle = item.title;
              const postContent = item.content;
              const createdDate = item.created_at;
              const updatedDate = item.updated_at;
                
              return (

                <div style={{ background: '#ECECEC', padding: '30px', textAlign: "center" }}>
                <Card title={postTitle} bordered={false} style={{ width: 400 }}>
                  <p>{postContent}</p>
                  <p>Created on: {createdDate}</p>
                  <p>Last Update on:{updatedDate}</p>
                </Card>
              </div>
                
              );
            }
            return null
          })}
        </div>
      );
    }
  };

export default PostDetail;