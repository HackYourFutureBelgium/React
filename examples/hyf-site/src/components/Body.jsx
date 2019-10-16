import React from 'react'
import Content from './Content';
import Data from '../data/Data'
import {
  Switch,
  Route,
} from 'react-router-dom';
const contentInfo = Data.contentData;
const navigationInfo = Data.navigationData;

const Body = () => (
  <Switch>
    {
      navigationInfo.map((pageRouteInfo, index) => (
        < Route exact path={pageRouteInfo.url} key={index}>
          <Content info={contentInfo[index]} title={pageRouteInfo.title} />
        </Route>
      ))
    }
  </Switch>
)

export default Body;