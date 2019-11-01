import React from "react";
import TodoListItem from './todo-list-item';
const TodoList=({todos})=>{

const firstEl=(
    <li>
        <TodoListItem label={todos[0].label}
                      important={todos[0].important}/>

    </li>
);

    return(
        <ul>
            {firstEl}
            <li>
                <TodoListItem label={todos[1].label}
                              important={todos[1].important}/>

            </li>
        </ul>
    );
};

export default TodoList;