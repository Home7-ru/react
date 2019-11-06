import React from 'react';

// может быть так а может быть и без скобочек
// const Car =(props)=>(
const Car = props =>(
    <div>
        <h3>Car name:{props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <button onClick={props.onChangeTitle}>Click</button>

    </div>

)
export default Car