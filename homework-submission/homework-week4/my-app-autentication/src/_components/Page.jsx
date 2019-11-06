import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import PageFooter from './PageFooter';

let Page = () => {
  return (
    <div>
      <Layout className="layout">
        <Router>
          <PageHeader />
          <PageContent />
          <PageFooter />
        </Router>
      </Layout>
    </div>
  );
}

export default Page;
