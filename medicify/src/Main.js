import './App.css';
import Navbar from './components/html_part/Navbar';
import Cart from './components/html_part/Cart';
import Login from './components/html_part/Login';
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path="/*" element={<h1>No route found here.</h1>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    
    
    </>
  );
}

export default App;
