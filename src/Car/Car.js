import React from 'react';

// может быть так а может быть и без скобочек
// const Car =(props)=>(
const Car =props=>(
    <div>
        <h3>Car name:{props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        {props.children}
    </div>

)
export default Car