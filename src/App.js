
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom' 

import Navbar from '../src/components/Navbar/navbar'
import Body from '../src/components/Body/body'
import Projects from '../src/components/Projects/projects'


function App() {
  return (
    <Router>
      <Navbar/>
      <Body/>
      <Projects/>
    </Router>
  );
}

export default App;
