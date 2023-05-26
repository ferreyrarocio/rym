const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character"


const getCharById = async (req, res) => {
    try {
      ///////////////////////////////////////////////////////////
      const { id } = req.params;
      const { data } = await axios(`${URL}/${id}`)
      /////////////////////////////////////
      if (!data.name) throw Error(`ID: ${id} Not Found`);
      const character = {
        id: data.id,
        name: data.name,
        species: data.species,
        origin: data.origin,
        image: data.image,
        gender: data.gender,
        status: data.status,
      };
      return res.status(200).json(character);

   } catch (error) {
      return error.message.includes('Not Found')
        ? error.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
  }
};
module.exports = {getCharById};




// const getCharbyId = (req, res) => {
//     const {id} = req.params;

//     axios(`${URL}/${id}`)
//     .then((result) => result.data)
//     .then(({name, gender, species, origin, image, status}) => {
//         if (name){
//             const character = {
//                  id,
//                  name,
//                  gender,
//                  species,
//                  origin: origin.name,
//                  image,
//                  status
//              }
//              return res.status(200).json(character)
//          }
//          return res.status(404).send("Not found");
//     })
//     .catch (error => res.status(500).send(error.message))
// };

// module.exports = {getCharbyId};