import React from 'react';

// может быть так а может быть и без скобочек
// const Car =(props)=>(
const Car = props =>(
    <div style={{
        border:'1px solid #ccc',
        marginBottom: '10px',
        display: 'block',
        padding: '10px',
        boxShadow: '10px 1px 1px red',
        borderRadius: '5px'
    }}>
        <h3>Car name:{props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>

    </div>


)
export default Car