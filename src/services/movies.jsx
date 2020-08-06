import axios from 'axios';

const URL_API = 'https://api.themoviedb.org/3/';
export const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';
// const URL_BACKGROUND = 'https://image.tmdb.org/t/p/original';
const API_KEY = '?api_key=a95dde4e97e6a7820156b4cbdab88801';





export async function NowPlayingMovies(typeMovies,numberPage) {
    let response = await axios.get(`${URL_API}movie/${typeMovies}${API_KEY}&language=en-US&page=${numberPage}`)
    return response;
}

export async function movieDetails(idMovie) {
    let response = await axios.get(`${URL_API}movie/${idMovie}${API_KEY}&language=en-US`)
    return response;
}

export async function searchMovies(keyword) {
    let response = await axios.get(`${URL_API}search/movie${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`)
    return response;
}

// export async function TvShow(typeMovies,numberPage) {
//     let response = await axios.get(`${URL_API}tv/${typeMovies}${API_KEY}&language=en-US&page=${numberPage}`)
//     return response;
// }




