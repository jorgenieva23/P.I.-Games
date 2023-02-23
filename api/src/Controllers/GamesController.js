const  axios = require('axios');
const {Videogames, Genres} = require('../db.js');
require("dotenv").config();
const { API_KEY } = process.env;
const {Router} = require ('express');
const { Op } = require("sequelize");
// const router = Router();

const cleanArray = (arr) => 
arr.map(e => {
    return{
        id: e.id,
        name: e.name,
        descripction: e.descripction_raw,
        released: e.released,
        rating: e.rating,
        genres: e.genres?.map(e => e.name).join(", "),
        platforms: e.platforms.map(e => e.platform.name).join(", "),
        image:e.background_image,
        createdInDB:false
        }
    })

const cleanArray2 = (arr) =>
    arr.map((e)=>{
        return{
            id: e.id,
            name: e.name,
            descripction: e.descripction_raw,
            released: e.released,
            rating: e.rating,
            genres: e.genres.map(e => e.name).join(", "),
            platforms: e.platforms,
            image:e.background_image,
            createdInDB:false
        }
    })


const createGame = async (name, genres, descripction, released, rating, platforms, createdInDB) => {
    return await Videogames.create({name, genres,descripction, released, rating, platforms, createdInDB})
}


    
const getAllGames = async () => {
    const databaseGames = await Videogames.findAll({
        include: {
            model: Genres,
            attributes: ['name'],
            through: {
                attributes: []
            }
        },
    });
    
    const apiGamesRaw = (await axios.get(`https://api.rawg.io/api/games?key=2a9362cde1e9425f9100cb457aad7d42`));
    
    const apiGames = apiGamesRaw.data.results
    
    const apiGamesClean = cleanArray(apiGames)


    const bddGames = cleanArray2(databaseGames)
    
    
    return [...bddGames, ...apiGamesClean]
}

const searchGameByName = async (name) => {
    const databaseGames = await Videogames.findAll({
        where: { name: name },        
        include: [{
        model: Genres,
        attributes: ['name'],
        through: {
            attributes: []
            }
        }],
      });

    const bddGames = cleanArray2(databaseGames)
    
    const apiGamesRaw = (await axios.get(`https://api.rawg.io/api/games?key=2a9362cde1e9425f9100cb457aad7d42`))

    const apiGames = apiGamesRaw.data.results
    
    const apiGamesClean = cleanArray(apiGames)

    const filteredApi = apiGamesClean.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));
    
    return [...filteredApi, ...bddGames];
};

module.exports = {searchGameByName, getAllGames, createGame}

































// const API = 'https://api.rawg.io/api/games?key=4e705ae188434fb3a6527ad4f3748c71';



// function getApiData(){       //------------> Intenten modularizarlo.
//  const apidata = axios(API);
//  console.log('linea 14', apidata)

// }

// router.get('/', async(req,res)=>{





// });

// router.get('/', async(req,res)=>{


// });


// module.exports = router;