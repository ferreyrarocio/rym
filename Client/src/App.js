import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import style from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites";




function App() {

  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);


//   function login(userData) {
//     const { email, password } = userData;
//     const URL = 'http://localhost:3001/rickandmorty/login/';
//     axios(`${URL}?email=${email}&password=${password}`)
//     .then(({ data }) => {
//        const { access } = data;
//        setAccess(access);
//        access && navigate('/home');
//     });
//  }

async function login(userData) {
  try {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    const { data } = await axios(URL + `?email=${email}&password=${password}`);
    const { access } = data;
    setAccess(access);
    access && navigate("/home");
  } catch (error) {
    console.log(error.message);
  }
} 
useEffect(() => {
  !access && navigate('/');
}, [access]);

const onSearch = async (id) => {
  try {
    const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
    if (data.name) {
      setCharacters((oldChars) => [...oldChars, data]);
    }
  } catch (error) {
    alert("¡No hay personajes con este ID!");
  }
};
  // function onSearch(id) {
  //   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
  //     ({ data }) => {
  //       if (data.name) {
  //         setCharacters((oldChars) => [...oldChars, data]);
  //       } else {
  //         window.alert("¡No hay personajes con este ID!");
  //       }
  //     }
  //   );
  // }

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  return (

    <div className={style.App}>
      {pathname !== "/" ? <NavBar onSearch={onSearch} /> :null}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About/>} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;