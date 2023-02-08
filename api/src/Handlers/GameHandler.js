const {searchGameByName, getAllGames} = require("../Controllers/ControllerGames")



const getGamesHandler= async(req, res)=>{
    try{
        const { name } = req.query
        const result = name 
        ? await searchGameByName(name) 
        : await getAllGames().sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          })
        res.status(200).json(result);
    }catch(error){
        res.status(404).send(error)
    }
}

module.exports = {getGamesHandler}