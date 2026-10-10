import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home"
import Cart from "./Components/Cart";


const App = () => {
  return (
    <>
    <NavBar/>

    <Routes> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/cart" element={<Cart/>}/>
        
      </Routes> 
    </>
    
  );
};

export default App;