import React, { useState, useEffect } from 'react';
import { Alert } from 'antd';

import 'antd/dist/antd.css';
import './App.css';

function ErrorPage({ obj }) {
  let [error, setError] = useState({});

  let customError = { title: 'THERE WAS AN ERROR', description: 'SORRY FOR THE INCONVENIENCE' };

  useEffect(() => {
    if (obj) {
      setError(obj);
    } else setError(customError);
  }, [obj]);

  return (
    <div className="ErrorPage">
      <Alert
        message={error.title}
        description={error.description}
        type="error"
        showIcon
        style={{ width: 600 }}
      />
    </div>
  );
}

export default ErrorPage;
