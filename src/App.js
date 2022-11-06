import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Repo from './Components/Repo';
import Errortest from './Components/Errortest';
import PageNotFound from './Components/PageNotFound';
import ErrorBoundary from './Components/ErrorBoundary';
import Nestedroutes from './Components/Nestedroutes';
import { HelmetProvider } from 'react-helmet-async';


function App() {
  
  return (
  <>
  <div className="App">
    
     
  </div>
 <HelmetProvider>
  <ErrorBoundary>
    <Router>
      <Routes>
        <Route path ='/' element={<Repo />}/>
        <Route path ='repo/:reponame' element={<Nestedroutes />}/>
        <Route path ='/errortest' element={<Errortest />}/>
        <Route path ='*' element={<PageNotFound />}/>

        
      </Routes>
      <Link to='/'><h3>Repos</h3></Link>
      <Link to='/errortest'><h3>Error-test</h3></Link>
    </Router>
   </ErrorBoundary>
 </HelmetProvider>
  </>
  );
}

export default App;
