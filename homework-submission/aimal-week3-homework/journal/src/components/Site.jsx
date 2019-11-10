import React from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,

} from "react-router-dom";

import PageHeader from './PageHeader'
import PageContent from './PageContent'

const { Footer } = Layout;


function Site() {
  return (
   <Layout>
       <Router>
         <PageHeader />


       <PageContent />
      <Footer>Footer</Footer>
      </Router>
   </Layout>
   
  );
}

export default Site;
