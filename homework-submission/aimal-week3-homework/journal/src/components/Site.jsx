import React from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,

} from "react-router-dom";

import PageHeader from './PageHeader'
import PageContent from './PageContent'
import FooterContent from './FooterContent'

const { Footer } = Layout;


function Site() {
  return (
   <Layout>
       <Router>
         <PageHeader />
         <PageContent />
      <Footer> <FooterContent /></Footer>
      </Router>
   </Layout>
   
  );
}

export default Site;
