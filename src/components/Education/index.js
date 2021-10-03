import React from 'react'
import MediumHeading from '../UI/MediumHeading'
import SmallHeading from '../UI/SmallHeading'
import me from '../../assets/images/me2.png'
import { Button } from '../UI/Button'
import Tile from '../UI/Tile/index'
import './style.css'

const Education = () => {
    return (
        <div className='container' style={{ padding: '50px 0' }}>
            <SmallHeading text='Education' />
            <MediumHeading text='qualifications' />
            <div className='flex-row align-center justify-sb'>
                <div className='me-left-container'>
                    <img src={me} alt='' />
                    <div
                        className='flex-row'
                        style={{
                            background: '#fff',
                            padding: '5px 10px',
                            boxSizing: 'border-box',
                            width: '250px',
                            borderRadius: '20px',
                            justifyContent: 'space-between'
                        }}>
                        <Button label='Hire me' />
                        <Button label='Download CV' inverse='true' />
                    </div>
                </div>
                <div>
                    <Tile
                        title='AppelSeeds Academy'
                        mediumTitle='Full-Stack Web Bootcamp'
                        desc='lorem lorem'
                    />
                    <Tile
                        title='AppelSeeds Academy'
                        mediumTitle='Full-Stack Web Bootcamp'
                        desc='lorem lorem'
                    />
                    <Tile
                        title='AppelSeeds Academy'
                        mediumTitle='Full-Stack Web Bootcamp'
                        desc='lorem lorem'
                    />
                </div>
            </div>
        </div>
    )
}

export default Education
