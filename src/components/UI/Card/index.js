import React from 'react'
import './style.css'

const Card = ({ className = null, children, style, ...res }) => {
    const cardClass = className ? `card ${className}` : 'card';
    return (
        <div className={cardClass} style={style} {...res}>
            {children}
        </div>
    )
}

export default Card
