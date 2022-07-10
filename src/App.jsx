import { useState } from 'react';
// import viteLogo from '/vite.svg';
// import reactLogo from './assets/react.svg';
import './App.css';
import Component from './assets/Component.jsx';

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </div>
  // )

  let dataAfan = {
    name: 'Afan',
    age: 30,
  }
  let dataAndree = {
    name: 'Andree',
    age: 30,
  }

  let dataFery = {
    name: 'dataFery',
    age: 30,
  }
  return (
    <div>
      <Component data={dataAfan} />
      <Component data={dataAndree} />
      <Component data={dataFery} />
    </div>
  )
}

export default App;
