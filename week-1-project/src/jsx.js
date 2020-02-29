import React from 'react';

function App() {
const title = 'My App';
return(
<div>
  <h1 className={""}>{title}</h1>
  <p data-testid="injection">{''}</p>

  <form>
  <label data-testid="label" htmlFor="">Demo:</label>
  <input data-testid="input" type="text" id="input-demo"/>
 </form>

</div>
    
);

}
export  { App } 