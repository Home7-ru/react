import React from 'react';

//если записать {1+1} то js видит это как js скрит если просто 1+1 то будет как строка
const Car =()=>(
    <div>
        <p> This is car component</p>
        <p><strong>{1+1}</strong></p>
        <p><strong>{Math.random()}</strong></p>

    </div>

)

export default Car