import axios from 'axios';

const URL_API = 'https://api.themoviedb.org/3/';
const API_KEY =`${process.env.REACT_APP_API_KEY}`
export const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';



export async function NowPlayingMovies(typeMovies,numberPage) {
    let response = await axios.get(`${URL_API}movie/${typeMovies}?api_key=${API_KEY}&language=en-US&page=${numberPage}`)
    return response;
}

export async function movieDetails(idMovie) {
    let response = await axios.get(`${URL_API}movie/${idMovie}?api_key=${API_KEY}&language=en-US`)
    return response;
}

export async function searchMovies(keyword) {
    let response = await axios.get(`${URL_API}search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`)
    return response;
}

export async function videoMovieId(Id) {
    let response = await axios.get(`${URL_API}movie/${Id}/videos?api_key=${API_KEY}&language=en-US`)
    return response;
}




