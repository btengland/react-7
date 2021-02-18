import React, {useState} from 'react'

const Counter = (props) => {
    const [count, setCount] = useState(0)
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default Counter