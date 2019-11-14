import React from 'react';

import './Car.css'
// может быть так а может быть и без скобочек
// const Car =(props)=>(
class Car extends React.Component{


    render(){
        console.log('render')

        const inputClasses=['input']

        if (this.props.name !== ''){
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        if(this.props.name.length > 4){
            inputClasses.push('bold')
        }



        return (
            <div className="Car">
                <h3>Car name:{this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input type="text" onChange={this.props.onChangeName} value={this.props.name} className={inputClasses.join(' ')}/>
                <button onClick={this.props.onDelete}>Delete</button>

            </div>
        )

    }
}


export default Car