import React from 'react';
import style from './Todo.css';

const Todo = ({todo}) => {
    const{title, desc, id} = todo;
    return (
        <article className='todo'>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div>
                <button>
                    <i className='fa fa-trash fa-2x'></i>
                </button>
            </div>
        </article>
    );
};

export default Todo;