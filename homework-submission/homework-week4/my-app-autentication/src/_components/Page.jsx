import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import PageFooter from './PageFooter';
import UserLogin from './UserLogin';

let Page = () => {
  let [user, setUser] = useState(false);
  return (
    <div>
      <Layout className="layout">
        <Router>
          <PageHeader />
          {
            user ? <PageContent /> : <UserLogin setUser={setUser} />
          }
          <PageFooter />
        </Router>
      </Layout>
    </div>
  )

}

export default Page;
