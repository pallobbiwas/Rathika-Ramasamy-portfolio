import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Authentication/Login/Login";
import Ragister from "./components/Authentication/Ragister/Ragister";
import RequerAuth from "./components/Authentication/RequerAuth/RequerAuth";
import About from "./components/Home/About/About";
import Blogs from "./components/Home/Blogs/Blogs";
import CheckOut from "./components/Home/CheckOut/CheckOut";
import Home from "./components/Home/Home/Home";
import Notfound from "./components/Notfound/Notfound";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/ragister" element={<Ragister />}></Route>
        <Route
          path="/checkout"
          element={
            <RequerAuth>
              <CheckOut />
            </RequerAuth>
          }
        ></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
