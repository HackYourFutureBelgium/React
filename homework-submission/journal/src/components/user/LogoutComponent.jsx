import { Redirect } from 'react-router'
import React, { useEffect } from 'react'

const LogoutComponent = () => {
  useEffect(() => {
    localStorage.clear()
    return () => { }
  })
  return <Redirect to='/login' />
}

export default LogoutComponent
