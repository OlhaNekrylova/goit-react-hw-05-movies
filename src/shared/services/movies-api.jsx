import axios from 'axios';

const instance = axios.create({
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: "682f4219ed4d8b2eaabdbacd40ee2053",
    params: {
        search: 'search',
        id: 'id',
    }
})

export const getAllPopularMovies = async(API_KEY)=> {
    const {data} = await instance.get(`/trending/all/day?api_key=<${API_KEY}`);
    return data;
}

export const searchMovies = async(API_KEY, search)=> {
    const {data} = await instance.get(`/${search}/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
    );
    return data;
}

export const getMovieById = async(API_KEY, id)=> {
    const {data} = await instance.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    return data;
}

export const getCastByMovieId  = async(API_KEY,id)=> {
    const {data} = await instance.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    return data;
}

export const getReviewsByMovieId  = async(API_KEY,id)=> {
    const {data} = await instance.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return data;
}