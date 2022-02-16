import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import FavList from "./components/FavList";
import Navsbar from "./components/Navsbar";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [favListData, setFavListData] = useState();
  async function getDataFromDB() {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/addFavmovie`);
    const data = await response.json();
    setFavListData(data);
  }
  useEffect(() => {
    getDataFromDB();
  }, []);
  return (
    <>
      <Navsbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/favList"
          element={<FavList favListData={favListData} />}
        />
      </Routes>
    </>
  );
}

export default App;
