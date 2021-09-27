import React from 'react'
import { colors } from '../../style'

export const Button = (props) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
            href='#'
            style={{
                boxSizing: 'border-box',
                padding: '10px 20px',
                background: props.inverse ? 'transparent' : colors.primaryColor,
                color: props.inverse ? colors.primaryColor : '#fff',
                display: 'inline-block',
                borderRadius: '20px',
                boxShadow: props.inverse ? 'none' : 'grey 0px 0px 10px 0px',
                border: '1px solid',
                borderColor: props.inverse ? colors.primaryColor : 'transparent',
                fontSize: 12,
                letterSpacing: '1px'
            }}>
            {props.label}
        </a>
    )
}
