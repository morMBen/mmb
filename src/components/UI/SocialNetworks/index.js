import React from 'react'
import './style.css'

// Stoped at 1:31:32
const SocialNetwork = () => {
    return (
        <div className='social-connect'>
            <span className=' white-color font-18 ls-1 bold-500'>Fallow me on:</span>
            <a href='https://www.linkedin.com/in/mormben/' className='social-link'>
                <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a href='https://github.com/morMBen' className='social-link'>
                <i class="fab fa-github-square fa-2x"></i>
            </a>
            {/* <a href='3' className='social-link'>
                <i class="fab fa-facebook-square fa-2x"></i>
            </a> */}
            {/* <a href='https://medium.com/@mor6686' className='social-link'>
                <i class="fab fa-medium fa-2x"   ></i>
            </a>
            <a
                href='https://stackoverflow.com/users/16252271/mor-m-ben'
                className='social-link'
                style={{ padding: '2px' }}
            >
                <div
                    style={{
                        background: '#fff',
                        height: '29px',
                        width: '29px',
                        padding: 0,
                        borderRadius: '3px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <i class="fab fa-stack-overflow fa-lg" style={{ color: '#2176ae' }}></i>
                </div>
            </a> */}
        </div>
    )
}

export default SocialNetwork
