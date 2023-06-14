
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom' 

import Navbar from '../src/components/Navbar/navbar'
import Body from '../src/components/Body/body'


function App() {
  return (
    <Router>
      <Navbar/>
      <Body/>
    </Router>
  );
}

export default App;
