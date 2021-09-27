import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RadialSeparators from './RadialSeparators';

const ProgressBar = ({ textColor, pathColor, trailColor, value }) => {
    return (
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
                    width: "5px",
                    // This needs to be equal to props.strokeWidth
                    height: `${10}%`
                }}
            />
        </CircularProgressbarWithChildren>
    )
}
export default ProgressBar;