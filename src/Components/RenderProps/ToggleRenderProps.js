import React, {useState} from 'react'
import styleHOC from '../HOCS/styleHOC'

const ToggleRenderProps = (props) => {
    const [on, setOn] = useState(false)
    return(
        <div>{props.render({on, setOn, style: props.style})}</div>
    )
}

export default styleHOC(ToggleRenderProps)