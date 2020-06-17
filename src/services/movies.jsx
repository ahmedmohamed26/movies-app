import axios from 'axios';

const URL_API = 'https://api.themoviedb.org/3/';
export const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';
// const URL_BACKGROUND = 'https://image.tmdb.org/t/p/original';
const API_KEY = '?api_key=a95dde4e97e6a7820156b4cbdab88801';






export async function NowPlayingMovies(numberPage) {
    let response = await axios.get(`${URL_API}movie/now_playing${API_KEY}&language=en-US&page=${numberPage}`)
    return response;
}

export async function TopRated(numberPage) {
    let response = await axios.get(`${URL_API}movie/top_rated${API_KEY}&language=en-US&page=${numberPage}`)
    return response;
}


