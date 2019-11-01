import React from 'react';

//передали масив, через диструктуризацию смотреть урок по диструктуризации
// в данном примере {label, important = false} по сути является props
// important = false означает что если нет данных то по умалчанию false
const TodoListItem =({label, important = false})=>{

    const style ={
        color: important ? 'tomato' : 'black'
    };

    return <span style={style}> {label}</span>;
};

export default TodoListItem;