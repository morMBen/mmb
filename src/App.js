import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import About from './component/about/About';
import Projects from './component/projects/Projects'
import Skills from './component/skills/Skills'
import Contact from './component/contact/Contact';

function App() {
  return (
    <div
      data-test='app-component'
      className='text-gray-400 bg-gray-900 body-font'
      style={{ height: '100vh', width: '100%' }}
    >
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
