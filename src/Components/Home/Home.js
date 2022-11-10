import React from 'react';
import Todos from '../Todos/Todos';
import style from './Home.css';

const Home = () => {
    const todos = [
        {
          id: 1,
          title: "todo title 1",
          desc: "todo1 description is here...",
        },
        {
          id: 2,
          title: "todo title 2",
          desc: "todo1 description is here...",
        }
      ]
    return (
        <div className='container'>
          <h1>Todo App</h1>
            <Todos todos={todos}></Todos>
        </div>
    );
};

export default Home;