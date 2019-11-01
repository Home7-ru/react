import React from "react";
import TodoListItem from './todo-list-item';
const TodoList=()=>{

    //const items =['Первая строка1','Вторая строка'];

    return(
        <ul>
            <li><TodoListItem label="Drink Coffe"/></li>
            <li><TodoListItem
                label="Build black"
                important /></li>
        </ul>
    );
};

export default TodoList;