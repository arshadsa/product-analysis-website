// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";
import Dashboard from "./components/Dashboard/Dashboard";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import FourZeroFour from "./components/FourZeroFour/FourZeroFour";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*"  element={<FourZeroFour></FourZeroFour>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
