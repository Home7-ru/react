import React from "react";
import TodoListItem from './todo-list-item';
const TodoList=({todos})=>{

    //перебираем массив todos

const elements = todos.map((item)=>{
   // делаем диструткуризацию убирая из item   id
    const { id, ...itemProps }=item;

    return (
        <li key={id}>

            <TodoListItem {...itemProps }/>
        </li>

    )
});

    return(
        <ul>
            {elements}
        </ul>
    );
};

export default TodoList;