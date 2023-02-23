import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import("./pages/Home/Home"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./pages/Cast123/Cast123"));
const Reviews = lazy(() => import("./pages/Reviews/Reviews"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...loading</p>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<MovieDetails />}>
                    <Route path="/movies/:id/credits" element={<Cast />} />
                    <Route path="/movies/:id/reviews" element={<Reviews />}  />     
                </Route>
                <Route path="*" element={<Home />} />
            </Routes>
        </Suspense>
    )
}
        
export default UserRoutes;