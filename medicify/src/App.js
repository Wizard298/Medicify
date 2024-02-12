import './App.css';
import Carting from './components/expi/Carting';
import Render from './components/expi/render';
import { Routes, Route } from "react-router-dom";

// import Loading from './components/html_part/Loading';
// import Backend from './components/html_part/Backend';
// import BackendList from './components/html_part/BackendList';


function App() {
  return (
    <>
    <Routes>
      <Route path='/addtocart' element={<Render/>}></Route>
      <Route path='/addtocart/:id' element={<Carting/>}></Route>
    </Routes>
    {/* <BackendList/> */}
    {/* <Backend/> */}
    {/* <Loading/> */}

    


    </>
  );
}

export default App;
