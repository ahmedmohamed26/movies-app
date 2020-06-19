import axios from 'axios';

const URL_API = 'https://api.themoviedb.org/3/';
export const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';
// const URL_BACKGROUND = 'https://image.tmdb.org/t/p/original';
const API_KEY = '?api_key=a95dde4e97e6a7820156b4cbdab88801';



// now_playing
// top_rated

export async function NowPlayingMovies(typeMovies,numberPage) {
    let response = await axios.get(`${URL_API}movie/${typeMovies}${API_KEY}&language=en-US&page=${numberPage}`)
    return response;
}




