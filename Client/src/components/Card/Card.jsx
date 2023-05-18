import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import React from "react";
import { addFav, removeFav } from "../../redux/actions";

const Card = ({id, name, status, species, gender, origin, image, onClose, removeFav, addFav, myFavorites}) => {
  const [isFav, setIsFav] = useState(false); //el useState espera un valor inicial

  // //   Si el estado isFav es true, entonces settea ese estado en false, y despacha la función deleteFavorite que recibiste por props pasándole el ID del personaje como argumento.
  // // Si el estado isFav es false, entonces settea ese estado en true, y despacha la función addFavorite que recibiste por props, pasándole props como argumento.


  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image, onClose});
    setIsFav(!isFav)
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  //exporto el contenedor card con todas sus propiedades
  return (
    <div className="cards">
      <div className={style.b}>
        <button onClick={handleFavorite} className={style.favv}> {isFav ? '💗' : '🤍' } </button>

        <buttonX onClick={() => onClose(id)} className={style.closeButton}> - X - </buttonX>
        </div>
      <div className="face front">
        <img src={image} alt="" />
        <p>{name}</p>
        
      </div>

      <Link to={`/detail/${id}`}>
        <div className="face back">
          <p>Status: "{status}"</p>
          <p>Species: "{species}"</p>
          <p>Gender: "{gender}"</p>
          <p>Origin: "{origin}"</p>
        </div>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
