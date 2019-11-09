import React, { useState } from 'react'
import FetchForCreateComponent from './FetchForCreateComponent'
import ErrorComponent from '../../ErrorComponent'

const CreateComponent = () => {
  const [postTitle, setPostTitle] = useState('')
  const [postContent, setPostContent] = useState('')
  const [postForm, setPostForm] = useState(false)
  const [error, setError] = useState(null)

  const handleInputTitle = (e) => {
    setPostTitle(e.target.value)
    e.preventDefault()
  }

  const handleInputContent = (e) => {
    setPostContent(e.target.value)
    e.preventDefault()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validate(postTitle, postContent, setPostForm)
  }

  function validate(title, content, func) {
    if (title === '' || content === '') {
      setError('Please fill both fields')
    }
    else {
      func(true)
      setError(null)
    }
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
      {postForm ? (
        <FetchForCreateComponent setPostForm={setPostForm} title={postTitle} content={postContent} />
      ) : 
        <ErrorComponent error={error} />
      }
    </div>
  )
}

export default CreateComponent
