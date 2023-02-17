import axios from 'axios';

const instance = axios.create(
    const BASE_URL = "https://api.themoviedb.org/3";
    const params = {
        API_KEY: "682f4219ed4d8b2eaabdbacd40ee2053",
        search: searchWord,
        id: 'id',
    }
)

export const getAllPopularMovies = async()=> {
    const {data} = await instance.get(BASE_URL, `/trending/all/day?api_key=<${API_KEY}`, 
    { params });
    return data;
}

export const searchMovies = async()=> {
    const {data} = await instance.get(`/${searchWord}/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
    );
    return data;
}

export const getMovieById = async()=> {
    const {data} = await instance.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    return data;
}

export const getCastByMovieId  = async()=> {
    const {data} = await instance.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    return data;
}

export const getReviewsByMovieId  = async()=> {
    const {data} = await instance.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return data;
}