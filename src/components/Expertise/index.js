import React from 'react';
import SmallHeading from '../UI/SmallHeading';
import MediumHeading from '../UI/MediumHeading';
import Card from '../UI/Card/index';
import ProgressBar from '../UI/ProgressBar';
import { colors } from '../../style';
import me2 from '../../assets/images/me2.png'
import './style.css'


const percentage = 70;

const Expertise = (props) => {

    return (
        <div className='container' style={{ marginTop: '50px' }}>
            <div className='right-img-me'>
                <img src={me2} alt='me stanging' />
            </div>
            <div >
                <SmallHeading text='Expertise' />
                <MediumHeading text='Spesial Skills' />
            </div>
            <Card
                // className='m-auto'
                style={{ margin: '100px auto', padding: '30px', width: '320px' }}
            >
                <div className='flex-row align-center'>
                    <ProgressBar
                        value={percentage}
                        trailColor='#D0D2D4'
                        textColor={colors.primaryColor}
                        pathColor={colors.primaryColor}
                        width='80px'
                        height='80px'
                    />
                    <h2
                        className='text-color ls-1 mlr-10'
                    >Development</h2>
                </div>
                <p className='grey mtb-10 font-14'>Java Script is way more then cool</p>
            </Card>
            <div>Social media</div>
        </div>
    )
}

export default Expertise
