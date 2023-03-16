const axios = require("axios");
const { Videogames, Genres } = require("../db.js");
require("dotenv").config();
const { API_KEY } = process.env;


const cleanArray2 = (arr) =>
  arr.map((e) => {
    return {
      id: e.id,
      name: e.name,
      description: e.description,
      released: e.released,
      rating: e.rating,
      genres: e.genres.map((e) => e.name).join(", "),
      platforms: e.platforms.join(", "),
      image: e.image,
      createdInDB: false,
    };
  });

const createGame = async (
  name,
  genres,
  description,
  released,
  rating,
  image,
  platforms,
  createdInDB
) => {
  return await Videogames.create({
    name,
    genres,
    description,
    released,
    rating,
    image,
    platforms,
    createdInDB,
  });
};

const getAllGames = async () => {
  const databaseGames = await Videogames.findAll({
    include: {
      model: Genres,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const apiGamesClean = [];
  for (let i = 1; i <= 5; i++) {
    let api = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`
    );

    api.data.results.map((e) => {
      apiGamesClean.push({
        id: e.id,
        name: e.name,
        released: e.released,
        rating: e.rating,
        platforms: e.platforms.map((e) => e.platform.name).join(", "),
        genres: e.genres?.map((e) => e.name).join(", "),
        image: e.background_image,
        description: e.description_raw,
        createdInDB: false,
      });
    });
  }
  const bddGames = cleanArray2(databaseGames);
  console.log(bddGames);

  return [...bddGames, ...apiGamesClean];
};

const searchGameByName = async (name) => {
  const databaseGames = await Videogames.findAll({
    where: { name: name },
    include: [
      {
        model: Genres,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  const bddGames = cleanArray2(databaseGames);
    console.log("hola",bddGames);


  const apiGamesClean = [];
  for (let i = 1; i <= 5; i++) {
    let api = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`
    );

    api.data.results.map((e) => {
      apiGamesClean.push({
        id: e.id,
        name: e.name,
        released: e.released,
        rating: e.rating,
        platforms: e.platforms.map((e) => e.platform.name).join(", "),
        genres: e.genres?.map((e) => e.name).join(", "),
        image: e.background_image,
        description: e.description_raw,
        createdInDB: false,
      });
    });
  }

  const filteredApi = apiGamesClean.filter((e) =>
    e.name.toLowerCase().includes(name.toLowerCase())
  );

  return [...filteredApi, ...bddGames];
};

module.exports = { searchGameByName, getAllGames, createGame };
