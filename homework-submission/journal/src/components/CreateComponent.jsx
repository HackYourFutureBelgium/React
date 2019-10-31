import React, {useState} from 'react';
import { Card } from 'react-bootstrap';

const CreateComponent = () => {
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
    const dairy = {
      title: title,
      content: content
    };

    if (dairy.title) {
      fetch('http://142.93.51.96/posts', {
        method: 'post',
        body: JSON.stringify(dairy)
      });
    }
  };

  return ( 
    <Card bg='primary' style={{ width: '28rem'}}>
      <form
        className='form_container'
        onSubmit={handleSubmit}
      >
        <label htmlFor="title">Title</label>
        <input
          id='title'
          type='text'
          placeholder='type your title'
          value={title}
          onChange={handleInputTitle}
        />
        <label htmlFor="content">Content</label>
        <textarea
          id='content'
          type='text'
          value={content}
          placeholder='type your content'
          cols='10' rows='10'
          onChange={handleInputContent}
        />
        <input type='submit' value='Submit'/>
    </form>
  </Card>
  );
}

export default CreateComponent;