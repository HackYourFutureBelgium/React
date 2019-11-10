import React from 'react';
import { Layout } from 'antd';
import {Switch, Route} from "react-router-dom";
import ContentList from './ContentList'



const { Content } = Layout;

function PageContent() {
    return (

<Content>
       <Switch>
           <Route exact path = '/'>
               <ContentList /> 
            </Route>

            <Route exact path = '/create'>
            <h1>Content 2</h1> 
            </Route>
      </Switch>
      </Content>

);
}

export default PageContent;