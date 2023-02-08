const  axios = require('axios');
const {videogame, Genres} = require('../db.js');
const {API_KEY} = process.env;
const {Router} = require ('express');
const router = Router();

const cleanArray = (arr) =>{
    arr.map((e)=>{
        return{
            id:e.id,
            name:e.name,
            image:e.background_image,
            // description:e.description,
            release_date:e.release_date,
            genre:e.genre,
            create:false
        }
    })
}

const cleanArray2 = (arr) =>{
    arr.map((e)=>{
        return{
            id:e.id,
            name:e.name,
            image:e.image,
            // description:e.description,
            release_date:e.release_date,
            genre:e.genre,
            create:false
        }
    })
}

const getAllGames = async () => {
    const databaseGames = await videogame.findAll({
        include: {
            model: Genres,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    });
    const apiGamesRaw = (await axios.get(`https://api.rawg.io/api/games?key=2a9362cde1e9425f9100cb457aad7d42&page=${i}`)).data;

    const apiGames = cleanArray(apiGamesRaw)

    const bddGames = cleanArray2(databaseGames)
    
    return [...apiGames, ...bddGames]
}

const searchGameByName = async (name) => {
    const databaseGames = await Game.findAll({
        where: { name: name },        
        include: [{
        model: Genres,
        attributes: ['name'],
        through: {
            attributes: []
            }
        }] 
    });

    const bddGames = cleanArray2(databaseGames)
    const apiGamesRaw = (await axios.get("https://api.thedogapi.com/v1/breeds")).data;

    const apiGames = cleanArray(apiGamesRaw);

    const filteredApi = apiGames.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));

    return [...filteredApi, ...bddGames];
};



module.exports={searchGameByName, getAllGames}

































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