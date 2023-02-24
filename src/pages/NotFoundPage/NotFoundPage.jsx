import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <p>
                Page not found, you can go back to 
                <Link to="/">
                    Home
                </Link>
            </p>
        </div>
    );
};

export default NotFoundPage;