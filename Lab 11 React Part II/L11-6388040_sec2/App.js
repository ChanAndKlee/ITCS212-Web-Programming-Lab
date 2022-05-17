import './App.css';
// Prepare a structure
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Menu from "./components/menu";
import MyNav from "./components/navbar";
import ErrPage from "./components/error";

function App() {
    return (
    <BrowserRouter>
        <MyNav/>
        <Routes>
            <Route path = "/" element = { <Home/> } />
            <Route path = "/menu" element = { <Menu/> } />
            <Route path = "*" element = { <ErrPage/> } />
        </Routes>
    </BrowserRouter>
    );
}

export default App;