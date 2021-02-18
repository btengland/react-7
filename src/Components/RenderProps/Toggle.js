import React, {useState} from 'react'
import styleHOC from '../HOCS/styleHOC'

const Toggle = (props) => {
    const [on, Seton] = useState(false)
    return(
        <div style={props.style}>
            {on && props.children}
            <button style={props.style} onClick={() => Seton(!on)}>{on ? "Hide" : "Show"}</button>
        </div>
    )
}

export default styleHOC(Toggle)