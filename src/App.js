// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Fragment } from 'react';
import Student from './Student';
import logo from './logo.svg';
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Fragment>
      <h1>Welcome to fullstack development - 1</h1>
      <h2>React JS Programming Week09 Lab exercise</h2>
      <Student></Student>
    </Fragment>
    </div>
  );
}

export default App;
