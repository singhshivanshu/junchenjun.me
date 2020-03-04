import React from 'react'

const ToolTip = props => {
    return (
        <span className="tooltip-toggle" aria-label={props.lable}>
            {props.children}
        </span>
    )
}

export default ToolTip
