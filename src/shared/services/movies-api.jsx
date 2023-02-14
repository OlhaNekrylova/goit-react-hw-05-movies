import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    params: {
        _limit: 4,
    }
})

export const searchPosts = async(q, _page = 1)=> {
    const {data} = await instance.get("/", {
        params: {
            q,
            _page,
        }
    });
    return data;
}

export const getAllPopularMovies = async()=> {
    const {data} = await instance.get("/");
    return data;
}

export const getMovieById = async(id)=> {
    const {data} = await instance.get(`/movie/${id}`);
    return data;
}

export const getCastByMovieId  = async(id)=> {
    const {data} = await instance.get(`/movie/${id}/cast`);
    return data;
}

export const getReviewsByMovieId  = async(id)=> {
    const {data} = await instance.get(`/movie/${id}/reviews`);
    return data;
}