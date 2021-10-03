import React from 'react'
import MediumHeading from '../UI/MediumHeading'
import SmallHeading from '../UI/SmallHeading'
import Reco1 from '../../assets/images/RecommendationsImg.jpeg'
import Reco2 from '../../assets/images/RecommendationsImg2.jfif'
import Card from '../UI/Card'
import './style.css'

const Recommendations = () => {
    return (
        <div className='container'>
            <div>
                <SmallHeading text='Recommendations' />
                <MediumHeading text='What people say' />
            </div>
            <div
                className='flex-row wrap justify-sb align-center'
                style={{ padding: '50px 0' }}
            >
                <div className='reco' >
                    <img src={Reco1} alt='' />
                </div>
                <Card style={{ width: '500px', padding: '30px', height: '300px' }}>
                    <div className='flex-row align-center'>
                        <div className='profile-img-container'>
                            <img src={Reco2} alt='' />
                        </div>
                        <div className='mlr-10'>
                            <p className='primary-color font-16'>First Recommendations</p>
                            <p className='text-color font-14 bold-600'>Software Developer</p>
                        </div>
                    </div>
                    <p className='mtb-10 grey'>Lorem ifasljnf lafnds jnasdfj nafjn asjf ljnf lafnds jnasdfj nafjn asjfljnf lafnds jnasdfj nafjn asjfljnf lafnds jnasdfj nafjn asjfljnf lafnds jnasdfj nafjn asjfljnf lafnds jnasdfj nafjn asjfasjn asjfn ajfn ajsn</p>
                </Card>
                <div className='reco' >
                    <img src={Reco2} alt='' />
                </div>

            </div>

            <Card className='m-auto' style={{ width: '500px', padding: '20px' }}>
                <p className='text-align-center ls-1 font-14  mtb-10'>Have any project in mind?<span className='primary-color'>  Say Hello At</span></p>
                <p className='text-align-center font-25'>mor6686@gmail.com</p>
            </Card>
        </div>
    )
}

export default Recommendations
