import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './modules/Navbar/Navbar';
import UserRoutes from './UserRoutes';

// import './App.css';

function App() {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies" >
      <Navbar />
      <UserRoutes />
      <ToastContainer theme="colored" position="top-right" autoClose={3000}/>
    </BrowserRouter>
  );
}

export default App;