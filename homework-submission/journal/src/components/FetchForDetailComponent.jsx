import DetailComponent from './DetailComponent'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

const FetchForDetailComponent = () => {
  const { id } = useParams()
  const [apiResults, setApiResults] = useState(null)

  useEffect(() => {
    fetch(`http://142.93.51.96/posts/${id}`)
      .then(res => res.json())
      .then(res => setApiResults(res))
      .catch(err => err)
  })

  if (!apiResults) return null

  return (
    <DetailComponent data={apiResults} />
  )
}

export default FetchForDetailComponent
