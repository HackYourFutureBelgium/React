import React from 'react';
import data from '../data'
import Content from './Content'

import {Switch, Route} from 'react-router-dom'; 


function Body() {
  return (
    <Switch>
      {
          data.map( (ob, key)=> (
            <Route exact path={ob.url} key= {key} >
              <Content info = {ob} />
            </Route>
            ))
         } 

</Switch>

   
  );
}

export default Body;
