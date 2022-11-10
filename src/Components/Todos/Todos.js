import React from 'react';
import Todo from '../Todo/Todo';
import style from './Todos.css';

const Todos = ({todos}) => {
    console.log(todos);
    return (
        <section>
            {
                todos.map((todo) => <Todo
                    key={todo.id}
                    todo={todo}
                    ></Todo>)
            }
        </section>
    );
};

export default Todos;