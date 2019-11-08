import React from 'react';
import './Car.css'
// может быть так а может быть и без скобочек
// const Car =(props)=>(
const Car = props =>{

    const inputClasses=['input']

    if (props.name !== ''){
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    return (
    <div className="Car">
        <h3>Car name:{props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name} className={inputClasses.join(' ')}/>
        <button onClick={props.onDelete}>Delete</button>

    </div>
)

}
export default Car