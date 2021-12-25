import './app.css';
import Header from './components/Header';
import Heroes from './components/Heroes';
import NewHero from './components/NewHero';
import EditHero from './components/EditHero';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    
      <div className='main-content'>
      <Header/>
        <Routes>
          <Route path="/" element={<Heroes/>}/>
          <Route path="/newhero" element={<NewHero/>}/>
          <Route path="/edithero/:id" element={<EditHero/>}/>
          <Route path="/newhero/" element={<NewHero/>}/>
        </Routes>
      </div>
        
    
    </Router>
  );
}

export default App;
