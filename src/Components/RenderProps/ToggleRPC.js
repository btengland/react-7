import React, {useState} from 'react'
import styleHOC from '../HOCS/styleHOC'

const ToggleRPC = (props) => {
    const [on, setOn] = useState(false)
    const {children, style} = props
    return children({on, setOn, style})
}

export default styleHOC(ToggleRPC)