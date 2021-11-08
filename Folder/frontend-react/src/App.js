import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";
import './components/style.css'
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" element={<ShowMagic />}/>
        <Route path="/posts" element={<Posts />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;