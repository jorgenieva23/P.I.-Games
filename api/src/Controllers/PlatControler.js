const axios = require ("axios")
require("dotenv").config();
const { API_KEY } = process.env;

const cleanArray = (arr) => 
    arr.map((e)=>{
        return{
            platforms: e.platforms.map(e => e.platform.name).join(", ")
        }
    })

const getAllPlat = async () => {

    let apiRawData = await axios.get (`https://api.rawg.io/api/games?key=${API_KEY}`)

    let apiData = apiRawData.data.results
    
    let apiClean = cleanArray(apiData)
    let aux = apiClean.map((e) => Object.values(e)).join(', ').split(', ');
    let aux2 = new Set (aux)
    
    let apiGen = [...aux2]


    return apiGen
}

module.exports = { getAllPlat }
