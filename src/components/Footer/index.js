import React from 'react'
import SocialNetwork from '../UI/SocialNetworks'
import './style.css'

const Footer = () => {
    return (
        <div className='container ' >
            <div className='flex-row justify-sb' style={{ margin: '50px 0' }}>
                <div>
                    <SocialNetwork />
                </div>

                <div className='footer-menu'>
                    <nav >
                        <a href='31' >Home</a>
                        <a href='31' >About</a>
                        <a href='31' >Blog</a>
                        <a href='31' >Contact</a>
                    </nav>
                </div>
                <div className='converation-container'>
                    <i class="far fa-comments fa-2x"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer
