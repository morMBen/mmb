import React from 'react'
import Card from '../UI/Card'
import MediumHeading from '../UI/MediumHeading'
import SmallHeading from '../UI/SmallHeading'
import beatMor from '../../assets/projects/beat-mor-playmode.png'

import './style.css'
import { Button } from '../UI/Button'

const MyProjects = () => {
    return (
        <div className='container' style={{ marginTop: '50px', marginBottom: '50px' }}>
            <Card className='flex-row align-center justify-sb'>
                <div style={{
                    display: 'flex',
                    flex: '1',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <SmallHeading text='my portfolio' />
                    <MediumHeading text='lastest Projects' style={{ textTransform: 'uppercase' }} />
                    <div className='mtb-10 flex-row' style={{ justifyContent: 'center' }}>
                        <Button label='portfolios' />
                    </div>
                </div>
                <div className='project-img-container'>
                    <img src={beatMor} alt='' />
                </div>
            </Card>
        </div>
    )
}

export default MyProjects
