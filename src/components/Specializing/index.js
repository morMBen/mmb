import Card from '../UI/Card';
import MediumHeading from '../UI/MediumHeading';
import ProgressBar from '../UI/ProgressBar/index';
import SmallHeading from '../UI/SmallHeading';
import { colors } from '../../style';

export const Specializing = (props) => {

    const skills = [{
        skillName: 'HTML/CSS',
        description: 'Hands on experience in Html/Css',
        value: 80,
        textColor: colors.textColor,
        pathColor: '#E96228'
    }, {
        skillName: 'Java Script',
        description: 'Hands on experience in Java Script',
        value: 90,
        textColor: colors.textColor,
        pathColor: '#EFD81D'
    }, {
        skillName: 'ReactJS/Redux',
        description: 'Hands on experience in React/Redux',
        value: 85,
        textColor: colors.textColor,
        pathColor: '#5ED3F3'
    }, {
        skillName: 'NodeJS/Express',
        description: 'Hands on experience in NodeJS/Express',
        value: 70,
        textColor: colors.textColor,
        pathColor: '#43853D'
    }, {
        skillName: 'MongoDB/Mongoose',
        description: 'Hands on experience in MongoDB/Mongoose',
        value: 65,
        textColor: colors.textColor,
        pathColor: '#13AA52'
    }, {
        skillName: 'Flutter/Dart',
        description: 'Hands on experience in Flutter/Dart',
        value: 55,
        textColor: colors.textColor,
        pathColor: '#0276E8'
    }, {
        skillName: 'Jest/Enzyme',
        description: 'Hands on experience in Jest/Enzyme',
        value: 50,
        textColor: colors.textColor,
        pathColor: '#C03B13'
    },]

    return (
        <div className='container'>
            <Card style={{ padding: '0px' }}>
                <SmallHeading text='what i do' />
                <MediumHeading text='specializing in' />
                <div className='flex-row wrap justify-sb' style={{ padding: '30px' }}>
                    {skills.map((skill, i) => {
                        return <ProgressBar
                            key={i}
                            skillName={skill.skillName}
                            description={skill.description}
                            textColor={skill.textColor}
                            pathColor={skill.pathColor}
                            trailColor='#D0D2D4'
                            value={skill.value} />
                    })}

                </div>
            </Card>
        </div>
    )
}

export default Specializing;