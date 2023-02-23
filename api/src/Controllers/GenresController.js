const {Videogames, Genres} = require('../db')
const axios = require ("axios")


const cleanArray = (arr) => 
    arr.map((e)=>{
        return{
            name: e.name
        }
    })

const getAllGen = async () => {

    let apiRawData = await axios.get (`https://api.rawg.io/api/genres?key=2a9362cde1e9425f9100cb457aad7d42`)

    let apiData = apiRawData.data.results
    
    let apiClean = cleanArray(apiData)
    
    let aux = apiClean.map((e) => Object.values(e)).join(', ').split(', ');
    let aux2 = new Set (aux)

    let apiGen = [...aux2]
    console.log(apiGen);
    apiGen.map(e => Genres.findOrCreate({
        where: {name: e}
    }))  
    return apiGen
}

module.exports = {getAllGen};















// router.get('/', async (req, res)=>{

//     try{

//     const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`, {headers: {'Accept-Encoding':
//     'gzip, deflate, compress'}});

//     const nameGenres = genresApi.data.results;
    
//     nameGenres.forEach(async (g) => {
//         await Genre.findOrCreate({
//             where: {
//                 name: g.name,
//             }
//         })
//     });

//     const allGenres = await Genre.findAll();
//     res.status(200).json(allGenres)
//         } catch {
            
//         }

// });