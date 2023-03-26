import {
    GET_ALL_GAMES,
    GET_GAMES_NAME,
    GET_PLATFORMS,
    GET_ALL_GENRES,
    GET_GAME_DETAIL,
    FILTER_BY_ORIGIN,
    FILTER_BY_GENRES,
    ORDER_BY_NAME,
    ORDER_BY_RATING,
    CREATE_GAME,
    DELETE_VIDEOGAME,
} from "./actions"

const initialState = {
    games: [],
    genres: [],
    allGames: [],
    platforms: [],
    details: [],
    users:[]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                games: action.payload,
                allGames: action.payload,
                filters: action.payload,
            };
        case GET_GAMES_NAME:
            return {
                ...state,
                games: action.payload
            }
        case GET_ALL_GENRES:
            return {
                ...state,
                genres: action.payload
            }

        case FILTER_BY_GENRES:
            const gamess = state.allGames;
            const genresFiltered =
                action.payload === "temp"
                    ? gamess
                    : gamess.filter((el) => el.genres.toLowerCase().includes(action.payload.toLowerCase())
                    );
            console.log(genresFiltered);
            return {
                ...state,
                games: genresFiltered,
            }


        case FILTER_BY_ORIGIN:
            const allGames2 = state.allGames;
            const filterCreated = action.payload === 'created' ? allGames2.filter(d => d.createdInDB) : allGames2.filter(d => !d.createdInDB)
            return {
                ...state,
                games: action.payload === 'all' ? state.allGames : filterCreated
            };

        case ORDER_BY_NAME:
            let sortedArr =
                action.payload === "asc"
                    ? state.games.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (b.name > a.name) {
                            return -1;
                        }
                        return 0;
                    })
                    : state.games.sort(function (a, b) {
                        if (a.name > b.name) {
                            return -1;
                        }
                        if (b.name > a.name) {
                            return 1;
                        }
                        return 0;
                    });
            return {
                ...state,
                games: sortedArr,
            };
        case ORDER_BY_RATING:
            let sortRat = state.filters
            action.payload === "Top" ? sortRat.sort(function (a, b) {
                if (parseInt(a.rating) > parseInt(b.rating)) return -1
                if (parseInt(a.rating) < parseInt(b.rating)) return 1
                return 0
            })
                : sortRat.sort(function (a, b) {
                    if (parseInt(a.rating) > parseInt(b.rating)) return 1
                    if (parseInt(a.rating) < parseInt(b.rating)) return -1
                    return 0
                })

            return {
                ...state,
                filters: sortRat
            }
        case GET_PLATFORMS:
            return {
                ...state,
                platforms: action.payload,

            };
        case GET_GAME_DETAIL:
            return {
                ...state,
                details: action.payload
            }

        case CREATE_GAME:
            return {
                ...state,
            }

        case DELETE_VIDEOGAME:
            return {
                ...state,
                videogames: action.payload
            };
        case "POST_USER":
            return {
                ...state,
                users: action.payload
            };

        case "GET_USER":
            return {
                ...state,
                users: action.payload
            };

        default:
            return { ...state }
    }
}
export default rootReducer;