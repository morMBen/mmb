import React from 'react'
import './style.css'

// Stoped at 1:31:32
const SocialNetwork = () => {
    return (
        <div className='social-connect'>
            <span className=' white-color font-18 ls-1 bold-500'>Fallow me on:</span>
            <a href='3' className='social-link'>
                <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a href='3' className='social-link'>
                <i class="fab fa-github-square fa-2x"></i>
            </a>
            <a href='3' className='social-link'>
                <i class="fab fa-facebook-square fa-2x"></i>
            </a>
        </div>
    )
}

export default SocialNetwork
