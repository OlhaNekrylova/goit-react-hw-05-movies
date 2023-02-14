import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import("../../pages/Home/Home"));
const Movies = lazy(() => import("../../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../../pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("../../pages/MovieDetails/MovieDetails"));
const Reviews = lazy(() => import("../../pages/MovieDetails/MovieDetails"));
const PostSearchPage = lazy(() => import("./pages/PostSearchPage/PostSearchPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...loading</p>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:movieId" element={<MovieDetails />}>
                    <Route path="/movies/:movieId/cast" element={<Cast />} />
                    <Route path="/movies/:movieId/reviews" element={<Reviews />}  />     
                </Route>
                <Route path="/posts-search" element={<PostSearchPage />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Suspense>
    )
}
        
export default UserRoutes;