import React from 'react'
import MediumHeading from '../UI/MediumHeading'
import SmallHeading from '../UI/SmallHeading'
import me from '../../assets/images/me2.png'
import { Button } from '../UI/Button'

import './style.css'

const Education = () => {
    return (
        <div className='container' style={{ padding: '50px 0' }}>
            <SmallHeading text='Education' />
            <MediumHeading text='qualifications' />
            <div>
                <div className='me-left-container'>
                    <img src={me} alt='' />
                    <div
                        className='flex-row'
                        style={{
                            background: '#fff',
                            padding: '10px',
                            width: '250px',
                            borderRadius: '35px',
                            justifyContent: 'space-between'
                        }}>
                        <Button label='Hire me' />
                        <Button label='Download CV' inverse='true' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
