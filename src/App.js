import "./App.css";
import Home from "./components/Home";
import FavList from "./components/FavList";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import{useEffect.useState} from 'react'

function App() {
  const [favListData,]
  async function getDataFromDB(){

  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favList" element={<FavList favListData={favListData} />} />
      </Routes>
    </>
  );
}

export default App;
