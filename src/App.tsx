/**
 * The main component of the application.
 * Renders the navigation bar and sets up the routing for different pages.
 *
 * @returns The rendered App component.
 */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import User from './pages/User';
import Homepage from './pages/Homepage';
import RepositoryPage from './pages/RepositoryPage';


function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:username" element={<User />} />
          <Route path="/:username/repository" element={<RepositoryPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
