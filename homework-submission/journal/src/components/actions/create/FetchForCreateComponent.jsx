import { useEffect } from 'react'
import { executeGetRequest } from '../../helpers/auth'

const FetchForCreateComponent = ({ title, content, setPostForm }) => {

 const data = { title, content}

  useEffect(() => {
    executeGetRequest(
      'post',
      '/posts',
      res => {
        console.log(res[0].title, res[0].content, res[0].id)
        setPostForm(false)
      },
      err => { console.log(err) },
      data
    )
  }, [title, content, setPostForm])

  return (null)
}

export default FetchForCreateComponent

