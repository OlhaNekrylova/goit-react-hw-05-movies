import axios from 'axios';

const instance = axios.create({
    BASE_URL: 'https://api.themoviedb.org/3',
    params: {
        API_KEY: "682f4219ed4d8b2eaabdbacd40ee2053",
        language: 'en-US',
    },
});

export const getAllPopularMovies = async()=> {
    const query = `/trending/movie/week?page=1`;
    const {data} = await instance.get(query);
    return data;
}

export const getSearchMovies = async(search,page )=> {
    const query = `/${search}/movie?page=${page}&include_adult=false`;
    const {data} = await instance.get(query);
    return data;
}

export const getMovieById = async(movieId)=> {
    const query = `/movie/${movieId}`;
    const {data} = await instance.get(query);
    return data;
}

export const getCastByMovieId  = async(movieId)=> {
    const query = `/movie/${movieId}/credits`;
    const {data} = await instance.get(query);
    return data;
}

export const getReviewsByMovieId  = async(movieId)=> {
    const query = `/movie/${movieId}/reviews?page=1`;
    const {data} = await instance.get(query);
    return data;
}