import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component{

    state = {
            done: false,
            important: false
        };
    //если новое состояние не зависит ни как от предыдущего можно использовать setstate
    //и передовать внутрь объект, если же зависит как в примере то нужно вызывать функцию чтоб
    //стейт изменился когда будет готов лекция 038 конец

    onLabelClick = () => {

        this.setState(({done}) =>{
            return {
                done: !done
            };
        })
    };

    onMarkImportant = () =>{

        this.setState(({important}) =>{
            return {
                important: !important
            };
        })
    };

    render(){

        const { label, onDeleted } = this.props;
        const { done, important } = this.state;

        let classNames ='todo-list-item';

        if(done){
            classNames += ' done';
        }

       if(important){
           classNames += ' important'
       }



        return (
            <span className={classNames}>
      <span
          className="todo-list-item-label"
          onClick={this.onLabelClick}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={this.onMarkImportant}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDeleted} >
        <i className="fa fa-trash-o" />
      </button>
    </span>
        );

    }

}
