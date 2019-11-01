import React, { useState } from 'react'
import FetchForCreateComponent from './FetchForCreateComponent'

const CreateComponent = () => {
  const [postTitle, setPostTitle] = useState('')
  const [postContent, setPostContent] = useState('')
  const [postForm, setPostForm] = useState(false);

  const handleInputTitle = (e) => {
    e.preventDefault()
    setPostTitle(e.target.value)
  }

  const handleInputContent = (e) => {
    e.preventDefault()
    setPostContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPostForm(true)
  }

  return (
    <div>
      <h1>Create post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <br />
          <input type="text" name="title" onChange={handleInputTitle} value={postTitle} />
        </div>
        <br />
        <div>
          <label>Body</label>
          <br />
          <textarea name="content" onChange={handleInputContent} value={postContent} />
        </div>
        <br />
        <button type="submit" value="submit">Submit</button>
      </form>
      {postForm && (
        <FetchForCreateComponent title={postTitle} content={postContent} />
      )}
    </div>
  )
}

export default CreateComponent
