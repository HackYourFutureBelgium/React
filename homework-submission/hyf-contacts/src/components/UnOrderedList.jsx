import React from 'react';

function NavigationItem ({ person }) {
  return (
    <div className='clist__contacts'>
        < div className='clist__contact'>
          < div className='clist__icon'>
            <img src={person.profileImage} alt={person.firstName} />
          </div>
          <div className='clist__name'>
            <span className='clist__firstName'>{person.firstName}</span>
            <span className='clist__lastName'>{person.lastName}</span>
          </div>
        </div>
    </div >
  )
};

const UnOrderedList = ({ fetchResult , searchValue}) => {
  console.log(searchValue)
  return ( 
    <ul>
      {
        fetchResult.map((person) => {
          return (
            <NavigationItem person={person}/>
          )
        })
      }
    </ul>
  );
}

export default UnOrderedList;