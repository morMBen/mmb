import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RadialSeparators from './RadialSeparators';
import './style.css'

const ProgressBar = ({ textColor, pathColor, trailColor, value, skillName, description, width, height }) => {


    return (
        <div className='flex-row align-center mtb-10' style={{ width: '50%' }}>
            <div className='skill-container' style={{ width: width, height: height }}>
                <CircularProgressbarWithChildren
                    value={value}
                    text={`${value}%`}
                    strokeWidth={10}
                    styles={buildStyles({
                        textColor: textColor,
                        pathColor: pathColor,
                        strokeLinecap: "butt",
                        trailColor: trailColor

                    })}
                >
                    <RadialSeparators
                        count={12}
                        style={{
                            background: "#fff",
                            width: "1px",
                            // This needs to be equal to props.strokeWidth
                            height: `${10}%`
                        }}
                    />
                </CircularProgressbarWithChildren>
            </div>
            <div className='mlr-10'>
                <p className='font-18 bold-500 text-color mtb-10'>{skillName}</p>
                <p className='font-14 bold-500 grey mtb-10'>{description}</p>
            </div>
        </div>
    )
}
export default ProgressBar;