import React from 'react'

const MediumHeading = ({ text, style }) => {
    return (
        <p style={style}
            className='font-25 capitalize ls-1 text-color bold-600 text-align-center'>{text}</p>
    )
}

export default MediumHeading;
