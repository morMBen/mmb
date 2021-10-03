import React from 'react'

const Tile = ({ title, mediumTitle, desc }) => {
    return (
        <div
            className='mtb-10'
            style={{ background: '#fff', padding: '20px', width: '300px' }}
        >
            <p
                className='primary-color font-14 bold-500 mtb-10 uppercase'
            >{title}</p>
            <p
                className='text-color font-14 bold-500 mtb-10 uppercase'
            >{mediumTitle}</p>
            <p
                className='gret font-12 mtb-10'
            >{desc}</p>
        </div>
    )
}

export default Tile
