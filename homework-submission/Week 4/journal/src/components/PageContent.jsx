import React from 'react';
import { Layout } from 'antd';
import {Switch, Route} from "react-router-dom";

import ContentList from './ContentList'
import PostDetail from './PostDetail';
import PostAdd from './PostAdd'
import Login from '../components/Login'
import Registration from '../components/Registration'



const { Content } = Layout;

function PageContent() {
    return (

<Content>
       <Switch>
           <Route exact path = '/'>
            <ContentList /> 
            </Route>

            <Route exact path = '/create'>
            <PostAdd /> 
            </Route>


            <Route exact path="/:id">
             <PostDetail />
             </Route>

             <Route path = '/login'>
                <Login /> 
            </Route>

            <Route path = '/register'>
                <Registration /> 
            </Route>

                        
      </Switch>
      </Content>

);
}

export default PageContent;