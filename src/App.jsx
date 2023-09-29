import Home from './Home.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Menu from './Menu.jsx';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';
import Blockul from './Blockul.jsx';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [showul, setshowul] = useState(false);

  const display = () => {
    setshowul(!showul);
  }
  return (
    <Router>
    <div>
    <Nav display={display} showul={showul}/>

    {showul && (<Blockul display={display} showul={showul}/>)}
    
    <Home/>
    <About/>
    <Services/>
    <Menu />
    <Footer />
    </div>
    </Router>
  )
}

export default App;
