import React, {useState} from 'react';
import { List, Avatar } from 'antd';
import axios from 'axios';

function Delete(id) {
         
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFpbWFsQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkFpbWFsIiwibGFzdE5hbWUiOiJNYWFyaWoiLCJ1dWlkIjoiOGFiMDhmMjEtZDMyZC00ZjU5LWE0ZmItM2QwMjI3NDY0ZWIxIn0.XvlKLvJcTmZ6iYpsHrqBxUGAtQLemw_q37kAVn39qss";
   const options = { headers: {'Authorization': token}};
   
//  if (window.confirm("Are you sure you want to Delete this post?"))   
//  {
     axios.delete ('http://142.93.51.96/posts/'+id, options)

 
//  }
}


function ContentList() {
    
    const [post, setPost] = useState ({result: []});
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFpbWFsQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkFpbWFsIiwibGFzdE5hbWUiOiJNYWFyaWoiLCJ1dWlkIjoiOGFiMDhmMjEtZDMyZC00ZjU5LWE0ZmItM2QwMjI3NDY0ZWIxIn0.XvlKLvJcTmZ6iYpsHrqBxUGAtQLemw_q37kAVn39qss";
    
    if(post.result.length === 0){
        const options = {
            headers: {'Authorization': token}
        };

        axios.get ('http://142.93.51.96/posts', options)
        .then (response => setPost({result: response.data}))
        .catch (error => console.log (error))

      }

  
      
      
    
    return (
      <div>
       <List
        itemLayout="horizontal"
        dataSource={post.result}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href={item.id} > {item.title}</a>}
              description={item.content} 
            /> 
            <div>
            <form
              onSubmit={event => {
                event.preventDefault();
                Delete(item.id);
              }}
            >
              <input type="submit" value="delete" />
            </form>                 
            </div>

          </List.Item>
        )}
        />
        </div>
         

);
}

export default ContentList;