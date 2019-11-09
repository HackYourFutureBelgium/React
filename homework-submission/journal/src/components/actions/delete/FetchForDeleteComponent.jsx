import DeleteComponent from './DeleteComponent'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { executeGetRequest } from '../../helpers/auth'

const FetchForDeleteComponent = () => {
  const { id } = useParams()
  const [apiResults, setApiResults] = useState(null)

  useEffect(() => {
    executeGetRequest(`/posts/${id}`, res => {
      setApiResults(res)
    })
  }, [id])

  return (apiResults !== null ? <DeleteComponent data={apiResults} /> : null)
}

export default FetchForDeleteComponent
