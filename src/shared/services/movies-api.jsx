import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '682f4219ed4d8b2eaabdbacd40ee2053',
        language: 'en-US',
    },
});

export const getPopularMovies = async()=> {
    const url = '/trending/movie/day';
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

export const getMovieById = async(movie_id)=> {
    const url = `/movie/${movie_id}`;
    const {data} = await instance.get(url);
    return data;
}

export const getCastByMovieId  = async(movie_id)=> {
    const url = `/movie/${movie_id}/credits`;
    const {data} = await instance.get(url);
    return data;
}

export const getReviewsByMovieId  = async(movie_id)=> {
    const url = `/movie/${movie_id}/reviews`;
    const {data} = await instance.get(url);
    return data;
}