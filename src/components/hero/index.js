import me from '../../assets/images/me.png'
import { Button } from '../UI/Button';
import './style.css';


// I stoped on 41.49 
const Hero = () => {
    return (
        <div className='container' style={{ marginTop: '70px' }}>
            <div className='flex-row justify-sb align-center'>
                <div>
                    <p className='uppercase bold-500 text-color ls-1 mtb-10'>
                        <span className='primary-color'>Hello</span>, I am Mor Mordechai Ben
                    </p>
                    <h1 className='text-color ls-1 mtb-10'>Full-stack Developer</h1>
                    <p className='font-12 grey mtb-10'>Software Developer</p>
                    <div className='flex-row' style={{ margin: '30px 0' }}>
                        <div>
                            <Button label='Hire Me' />
                        </div>
                        <div className='mlr-10'>
                            <Button label='Download CV' inverse='true' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='meImgContainer'>
                        <img src={me} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
