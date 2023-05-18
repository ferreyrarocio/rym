import "./App.css";
import About from "./components/About/About";
import Detail from "./components/Detail.jsx";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar";
import Form from "./components/Form/Form.jsx";
import MiPersona from "./components/About/About.jsx";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.module.css";
import Favorites from "./components/Favorites";


var username = "rocioferreyra@live.com";
var password = "rocio1";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState([false]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      }
    );
  };
  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  return (


    <div className="App">
      {location.pathname !== "/" && <NavBar onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About MiPersona={MiPersona} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;