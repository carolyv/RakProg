import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";
import './components/style.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ShowMagic />}/>
        <Route path="/posts" element={<Posts />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;