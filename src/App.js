import Education from './components/Education';
import Expertise from './components/Expertise';
import Hero from './components/Hero'
import MyProjects from './components/MyProjects';
import Specializing from './components/Specializing';
import Recommendations from './components/Recommendations'

/**
 * @author {Mor Mordechai Ben}
 * @function App
 */

const App = (props) => {
  return (
    <div>
      <Hero />
      <Specializing />
      <Expertise />
      <MyProjects />
      <Education />
      <Recommendations />
    </div>
  )
}

export default App;