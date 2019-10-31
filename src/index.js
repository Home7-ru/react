import React from 'react';
import ReactDOM from 'react-dom';


const TodoList=()=>{

    const items =['Первая строка1','Вторая строка'];

    return(
        <ul>
            <li> { items[0] }</li>
            <li> { items[1] }</li>
        </ul>
    );
};

const AppHeader=()=>{
    return(
        <h1>My Todo list</h1>
    );
};

const SearchPanel=()=>{

    const searchText='Type here to search';
    const searchStyle ={
        fontStyle:'25px'
    }
    return(
        <input
            style={ searchStyle }
            placeholder={searchText} />
    );
};

const App=()=>{
    //выдаст на экране текст тоесть передать команды так нельзя
    const value ='<script>alert("")</script>';
    return(
        <div>
            {value}
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};


ReactDOM.render(<App/>, document.getElementById('root'));