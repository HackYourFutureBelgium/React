import React from 'react';
import Result from './componenets/Result';
import FetchList from './componenets/FetchList';
import Contactdetails from './componenets/Contactdetails';

import Search from './componenets/Search';
import Header from './componenets/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>

      <div className="main">
        <div className="clist">
          <Search fetchUser={FetchList.fetchUser} />
        </div>
        <div className="details"></div>
      </div>
      {/* <div>
        <FetchList />
      </div> */}
    </div>
  );
}

export default App;
