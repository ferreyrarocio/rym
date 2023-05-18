import { useSelector, } from "react-redux"; 
import Card from "./Card/Card";

export const Favorites = (props) => {
  const myFavorites = useSelector((state)=>state.myFavorites)
  return (
    <>
      {
      myFavorites?.map(({id, name, status, species, gender, origin, image, onClose}) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            status={status}
            origin={origin}
            onClose={onClose}
          />
        );
      })}
    </>
  );
};

export default Favorites;
