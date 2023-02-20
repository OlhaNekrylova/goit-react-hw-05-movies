import axios from 'axios';

const instance = axios.create({
    BASE_URL: 'https://api.themoviedb.org/3',
    params: {
        API_KEY: '682f4219ed4d8b2eaabdbacd40ee2053',
        language: 'en-US',
    },
});

export const getPopularMovies = async()=> {
    const url = '/trending/all/day';
    const {data} = await instance.get(url);
    return data;
}

export const getSearchMovies = async(query, page )=> {
    const url = '/search/movie';
    const {data} = await instance.get(url, {
        params: {query, page },
    });
    return data;
}

export const getMovieById = async(movieId)=> {
    const url = `/movie/${movieId}`;
    const {data} = await instance.get(url);
    return data;
}

export const getCastByMovieId  = async(movieId)=> {
    const url = `/movie/${movieId}/credits`;
    const {data} = await instance.get(url);
    return data;
}

export const getReviewsByMovieId  = async(movieId)=> {
    const url = `/movie/${movieId}/reviews`;
    const {data} = await instance.get(url);
    return data;
}