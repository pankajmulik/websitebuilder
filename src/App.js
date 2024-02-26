import './App.scss'
import Home from './home/Home';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      


      <Routes>
        <Route exact path='/' element={<Home />} />
       
        {/* <Route path='/hosting-for-all' element={<HostingFAll />} />
        <Route path='/hosting' element={ <Hosting/>} />
        <Route path='/hosting-6' element={ <HostingSix/>} />
        <Route path='/hosting-5' element={ <HostingFive/>} /> */}
        <Route path='*' element={<Home/>} />
     </Routes>


    </div>
  );
}

export default App;
