import PopularMovies from '../../modules/PopularMovies/PopularMovies';

const HomePage = ()=> {
    return (
        <div className="container">
            <h1>Trending today</h1>
            <PopularMovies />
        </div>
    )
}

export default HomePage;