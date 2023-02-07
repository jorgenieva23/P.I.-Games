const  axios = require('axios');
const {videogame, Genres} = require('../../db.js');
const {API_KEY} = process.env;
const {Router} = require ('express');
const router = Router();


const API = 'https://api.rawg.io/api/games?key=4e705ae188434fb3a6527ad4f3748c71';



function getApiData(){       //------------> Intenten modularizarlo.
 const apidata = axios(API);
 console.log('linea 14', apidata)

}

router.get('/', async(req,res)=>{





});

router.get('/', async(req,res)=>{


});


module.exports = router;