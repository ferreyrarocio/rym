const axios = require('axios');

const getCharbyId = (res, id) => {
    axios(`https://rickandmortyapi.com/api/characters/${id}`)
    .then(response => response.data)
    .then(({name, gender, species, origin, image, status}) => {
        const character = {
            id,
            name,
            gender,
            species,
            origin: origin.name,
            image,
            status
        }
         res
             .writeHead(200, {'Content-Type': 'application/json'})
             .end(JSON.stringify(character))
    })
    .catch(error => {
         res
             .writeHead(404, {'Content-Type': 'text/plain'})
             .end(error.message)
    })
};

module.exports = {getCharbyId};