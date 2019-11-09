import React from 'react'

const Sidebar = (result) => {

  if (!result.results) return null

  function listItem(icon, key, fname, lname) {
    return <li className='clist__contact' key={key}>
      <div className='clist__icon'><img src={icon} alt="icon" /></div>
      <div className='clist__name'><span className='clist__firstName'>{fname}</span><span className='clist_lastName'>{lname}</span></div>
    </li>
  }

  return (
    <div className='clist'>
      <ul className='clist__contacts'>
        {result.results.map(x => listItem(x.profileImage, x.id, x.firstName, x.lastName))}
      </ul>
    </div>
  )
}

export default Sidebar
