import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemAddForm from './components/item-add-form';
import ItemStatusFilter from './components/item-status-filter';

import './index.css';

export default class App extends Component {

    state= {
        todoData : [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
    };

    deleteItem =(id)=>{
        this.setState(({todoData})=>{

            const idx = todoData.findIndex((el) => el.id === id);

            //конструируем новый масив из всех элементов до нужного и после нужного
            const newArray=[...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

            //возврашаем новое состояние

            return{
                todoData: newArray
            }
        });
    };

    render() {
    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>

            <TodoList todos={this.state.todoData}
                      onDeleted={this.deleteItem}
            />
            <ItemAddForm/>
        </div>
        );
    }
};

ReactDOM.render(<App/>,
    document.getElementById('root'));