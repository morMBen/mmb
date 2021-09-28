import Expertise from './components/Expertise';
import Hero from './components/Hero'
import Specializing from './components/Specializing';

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
    </div>
  )
}

export default App;