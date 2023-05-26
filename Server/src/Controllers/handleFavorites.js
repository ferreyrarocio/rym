let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;
//conviene declarar la constante
    myFavorites.push(character);

     res.status(200).json(myFavorites);
}

const deleteFav= (req, res) => {
    const {id} = req.params;

    myFavorites = myFavorites.filter((favorite) => 
    favorite.id !== +id); //Number(id)

     res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
}