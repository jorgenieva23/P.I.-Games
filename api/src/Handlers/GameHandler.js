const { Videogames, Genres } = require('../db')
const { searchGameByName, getAllGames, createGame } = require("../Controllers/GamesController")



const getGamesHandler = async (req, res) => {
  try {
    const { name } = req.query

    const results = name
      ? await searchGameByName(name)
      : await getAllGames();

    res.status(200).json(results);
  } catch (error) {
    res.status(404).send(error)
  }
};



const getGameHandler = async (req, res) => {
  try {
    console.log("hola");
    const { id } = req.params;
    const allGames = await getAllGames();
    if (!id) {
      res.status(404).json("Couldn't find the name on DBase")
    } else {
      const game = allGames.find(vg => vg.id.toString() === id);
      res.status(200).json(game)
    }
  } catch (error) {
    res.status(404).send(error)
  }
}


// const createGameHandler = async (req, res) => {
//   let { id, name, genres, descripction, released, rating, platforms, createdInDB } = req.body
//   try {
//     if (!name || !platforms || !genres) {
//       return res.status(400).send("Mandatory data missing");
//     }
//     let noRepeat = await Videogames.findOne({
//       where: {
//         name: name,
//         released: released,
//       },
//     });

//     if (noRepeat) {
//       return res
//         .status(400)
//         .send(`There is already a ${name} videogame released in ${released}`);
//     }
//     let newGame = await createGame(id, name, genres, descripction, released, rating, platforms, createdInDB)
    
//     const genr = await Genres.findAll({
//       where: { name: genres }
//     })
//     newGame.add.Genres(genr)
//     res.status(201).json("Creado exitosamente")
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// }

const createGameHandler = async (req, res)=> {
    let {name, genres, descripction, released, rating, platforms, createdInDB} = req.body      
        try {
          if (!name || !platforms || !genres) {
            return res.status(400).send("Mandatory data missing");
          }

          let noRepeat = await Videogames.findOne({
            where: {
              name: name,
              released: released,
            },
          });
      
          if (noRepeat) {
            return res
              .status(400)
              .send(`There is already a ${name} videogame released in ${released}`);
          }

            let newGame = await createGame (
                name, genres, descripction, released, rating, platforms, createdInDB)

                const gen = await Genres.findAll({
                    where:{name:genres}
            })
            newGame.addGenres(gen)
            res.status(201).json("Creado exitosamente")       
        }
            catch (error) {         
            res.status(400).json({ error: error.message });
        }
    }


module.exports = { getGamesHandler, getGameHandler, createGameHandler }