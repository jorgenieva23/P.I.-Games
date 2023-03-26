import axios from "axios";

export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const GET_GAMES_NAME = "GET_GAMES_NAME"//por nombre
export const GET_ALL_GENRES = "GET_ALL_GENRES"//todos los generos
export const GET_PLATFORMS = "GET_PLATFORMS";
export const GET_GAME_DETAIL = "GET_GAME_DETAIL"; //por id o detalles del juego
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN';
export const FILTER_BY_GENRES = "FILTER_BY_GENRES"//filtrar perros por genero
export const FILTER_CREATE_GAME = "FILTER_CREATE_GAME" //filtrar por bdd o api
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const ORDER_BY_NAME = "ORDER_BY_NAME"//filtrar por nombres
export const CREATE_GAME = "CREATE_GAME"//crear un juego
export const DELETE_VIDEOGAME = "DELETE_VIDEOGAME"

export const getGames = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get("/videogames")
      const games = apiData.data;
      dispatch({ type: GET_ALL_GAMES, payload: games });    
    } catch (error) {
      
    }
  };
};

export const getGamesName = (name) => {
  return async function (dipatch) {
    try {
      const apiData = await axios.get(`/videogames?name=${name}`);
      const IdGame = apiData.data
      dipatch({ type: GET_GAMES_NAME, payload: IdGame })
    } catch (error) {
      console.log('The Game could not be found');
    }
  }
}

export const getGame = (id) => {
  return async function (dispatch) {
    try {
      const apiData = await axios(`/videogames/${id}`)
      const game = apiData.data;
      dispatch({ type: GET_GAME_DETAIL, payload: game })
    } catch (error) {
      console.log(error);
    }
  }
}

export function getGenres() {
  return async function (dispatch) {
    const apiData = await axios.get('/genres')
    const game = apiData.data;
    dispatch({
      type: GET_ALL_GENRES, payload: game
    })
  }
}

export function getPlatforms() {
  return async function (dispatch) {
    try {
      const apiData = await axios.get('/platforms')
      const plat = apiData.data
      dispatch({ 
        type: GET_PLATFORMS, payload: plat
       })
    } catch (error) {
      console.log(error);
    }
  }
}

export function createGame (data) {
  return async function (){
    try {
      const apiData = await axios.post("/videogames",data)
      console.log(data);
      return apiData  
    } catch (error) {
      console.log(error);
    }
  }
}


export function filterByGenres(payload) {
  return {
    type: FILTER_BY_GENRES, payload
  }
}


export function deleteVideogame(id) {
  return async function () {
    try {
      let dlt = await axios.delete(`/videogames/${id}`)
      return dlt;
    } catch (error) {
      console.log(error);
    }
  };
};

export function filterByBddOrApi(payload) {
  return {
    type: FILTER_BY_ORIGIN, payload
  }

}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME, payload
  }
}

export function orderByRating(payload) {
  return {
    type: ORDER_BY_RATING, payload
  }
}

export function PostUser (payload){
  return async function (dispatch) {
    try {
      let user = await axios.post("/user", payload)
      return user
    } catch (error) {
      console.log(error);
    }
  }
}

export function GetUser (){
  return async function (dispatch) {
    try {
      let user = await axios.post("/user")
      return dispatch({ type: "GET_USER", payload: user.data });
    } catch (error) {
      console.log(error);
    }
  }
}