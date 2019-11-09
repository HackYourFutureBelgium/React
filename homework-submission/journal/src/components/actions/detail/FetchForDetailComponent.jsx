import DetailComponent from './DetailComponent'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { executeGetRequest } from '../../helpers/auth'

const FetchForDetailComponent = () => {
  const { id } = useParams()
  const [apiResults, setApiResults] = useState(null)

  useEffect(() => {
    executeGetRequest(
      'get',
      `/posts/${id}`,
      res => { setApiResults(res) },
      err => { console.log(err) }
    )
  }, [id])

  return (apiResults !== null ? <DetailComponent data={apiResults} /> : null)
}

export default FetchForDetailComponent
