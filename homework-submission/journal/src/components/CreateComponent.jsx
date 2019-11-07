import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import axios from  'axios'

const CreateComponent = ({setError}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleInputTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value)
  }

  const handleInputContent = (e) => {
    e.preventDefault();
    setContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

      axios.post('http://142.93.51.96/posts', { title, content },
        {
        headers: {
          Authorization: `Bearer:${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        }
        })
        .catch(err =>setError(err));
  };

  return ( 
    <Container style={{ width: '28rem' , height:"28rem", padding:"2rem"}}>
      <form
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            className="form-control"
            id="title"
            placeholder="Enter Title"
            value={title}
            onChange={handleInputTitle}
          />
        </div>
        <div className="form-group" >
          <label htmlFor="content">Content</label>
          <textarea
            type="text"
            className="form-control"
            id="content"
            placeholder="Type your content"
            rows='10' cols='10'
            onChange={handleInputContent}
            value={content}
          />
        </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </Container>
  );
}

export default CreateComponent;