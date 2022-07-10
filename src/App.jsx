import { useState } from 'react';
// import viteLogo from '/vite.svg';
// import reactLogo from './assets/react.svg';
// import './App.css';
// import Component from './assets/Component.jsx';
import TodoItem from './assets/TodoItem.jsx';

// function App() {
//   // const [count, setCount] = useState(0)

//   // return (
//   //   <div className="App">
//   //     <div>
//   //       <a href="https://vitejs.dev" target="_blank">
//   //         <img src={viteLogo} className="logo" alt="Vite logo" />
//   //       </a>
//   //       <a href="https://reactjs.org" target="_blank">
//   //         <img src={reactLogo} className="logo react" alt="React logo" />
//   //       </a>
//   //     </div>
//   //     <h1>Vite + React</h1>
//   //     <div className="card">
//   //       <button onClick={() => setCount((count) => count + 1)}>
//   //         count is {count}
//   //       </button>
//   //       <p>
//   //         Edit <code>src/App.jsx</code> and save to test HMR
//   //       </p>
//   //     </div>
//   //     <p className="read-the-docs">
//   //       Click on the Vite and React logos to learn more
//   //     </p>
//   //   </div>
//   // )

//   let dataAfan = {
//     name: 'Afan',
//     age: 30,
//   }
//   let dataAndree = {
//     name: 'Andree',
//     age: 30,
//   }

//   let dataFery = {
//     name: 'dataFery',
//     age: 30,
//   }
//   return (
//     <div>
//       <Component data={dataAfan} />
//       <Component data={dataAndree} />
//       <Component data={dataFery} />
//     </div>
//   )
// }

function App() {
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState('');

  const addTodo = () => {
    if (value == null || value == '') {
      console.log('value is empty');
      return;
    }
    let todo = { value: value, isDone: false };
    setTodoList([...todoList, todo]);
    setValue('');
  };

  const deleteTodo = (index) => {
    let filtered = todoList.filter((todo, i) => i !== index);
    setTodoList(filtered);
  };

  return (
    <>
      <h1>ToDo App</h1>
      <ul>
        {todoList.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            isDone={todo.isDone}
            value={todo.value}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </ul>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTodo}> Add </button>
    </>
  );
}

export default App;
