import Card from '../UI/Card';
import MediumHeading from '../UI/MediumHeading';
import ProgressBar from '../UI/ProgressBar/index';
import SmallHeading from '../UI/SmallHeading';

export const Specializing = (props) => {
    return (
        <div className='container'>
            <Card style={{ padding: '40px' }}>
                <SmallHeading text='what i do' />
                <MediumHeading text='specializing in' />
                <ProgressBar
                    textColor='red'
                    pathColor='blue'
                    trailColor='black'
                    value='40' />
            </Card>
        </div>
    )
}

export default Specializing;