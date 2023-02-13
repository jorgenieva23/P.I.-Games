const  axios = require('axios');
const {videogame, Genres} = require('../db.js');
require("dotenv").config();
const { API_KEY } = process.env;
const {Router} = require ('express');
// const router = Router();

const cleanArray = (arr) => arr.map((e)=>{
    return{
        id:e.id,
            // name:e.name,
            // image:e.background_image,
            // // description:e.description,
            // release_date:e.release_date,
            // genres: e.genres.map((el) => el.name),
            // create:false
        }
    })

const cleanArray2 = (arr) =>{
    arr.map((e)=>{
        return{
            id:e.id,
            name:e.name,
            image:e.background_image,
            // description:e.description,
            release_date:e.release_date,
            genres: el.dataValues.genres.map((e) => ( e.dataValues.name )),
            create:false
        }
    })
}

    
const getAllGames = async () => {
    
    const apiGamesRaw = (await axios.get(`https://api.rawg.io/api/games?key=2a9362cde1e9425f9100cb457aad7d42`));
    
    const apiGames = apiGamesRaw.data.results
    // console.log("hola", apiGames);
    
    const apiGamesClean = cleanArray(apiGames)
    console.log(apiGamesClean);
    
    // const bddGames = cleanArray2(databaseGames)
    // const databaseGames = await videogame.findAll({
    //     include: {
    //         model: Genres,
    //         attributes: ['name'],
    //         through: {
    //             attributes: []
    //         }
    //     }
    // });
    
    return [...apiGamesClean]
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
        }],
    attributes: ["id", "name",],
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });

    const bddGames = cleanArray2(databaseGames)
    
    const apiGamesRaw = (await axios.get("https://api.thedogapi.com/v1/breeds")).data;

    const filteredApi = apiGames.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));
    
    const apiGames = cleanArray(apiGamesRaw);

    return [...filteredApi, ...bddGames];
};

// const b = undefined
// const v = ["a"]
// console.log([...b, ...v]);

let a = (a) =>{
    console.log("hola");
};

const b = () => a 
b()

module.exports = {searchGameByName, getAllGames}

































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