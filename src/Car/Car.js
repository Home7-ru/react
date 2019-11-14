import React from 'react';
import Radium from 'radium'
import './Car.css'
// может быть так а может быть и без скобочек
// const Car =(props)=>(
class Car extends React.Component{


//позволяет получить неизмененное dom дерева для обновления

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('getSnapshotBeforeUpdate')
    // }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
console.log('componentWillReceiveProps')
}

   shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate')
       return nextProps.name.trim() !== this.props.name.trim()
}

    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('componentWillUpdate')
}

// static getDerivedStateFromProps(nextProps, prevState){
//     console.log('componentWillUpdate',nextProps,prevState)
//
//     return{
//
//     }
// }




    UNSAFE_componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
    return true
}
//данный метод срабатывает когда идет разрушения компанента,и он удаляется из dom дерева
componentWillUnmount() {
    console.log('componentWillUnmount')
}

    render(){
        console.log('render')

        // if(Math.random()>0.7){
        //    throw new Error('Car random failed')
        // }

        const inputClasses=['input']

        if (this.props.name !== ''){
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        if(this.props.name.length > 4){
            inputClasses.push('bold')
        }

        const style={
            border: '1px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0,0,0, .14)',
            ':hover':{
                border:'1px solid #aaa',
                boxShadow:' 0 4px 15px 0 rgba(0,0,0, .25)'
            }
        }

        return (
            <div className="Car" style={style}>
                <h3>Car name:{this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input type="text" onChange={this.props.onChangeName} value={this.props.name} className={inputClasses.join(' ')}/>
                <button onClick={this.props.onDelete}>Delete</button>

            </div>
        )

    }
}


export default Car