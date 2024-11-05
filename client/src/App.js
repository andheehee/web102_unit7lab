import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import ViewCrewmates from './pages/ReadPosts';
import CreateCrewmate from './pages/CreatePost';
import EditCrewmate from './pages/EditPost';
import { Link } from 'react-router-dom';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <ViewCrewmates /> },
    { path: '/edit/:id', element: <EditCrewmate /> },
    { path: '/new', element: <CreateCrewmate /> },
  ]);

  return (
    <div className="App">
      <header>
        <h1>Custom Team Builder</h1>
        <Link to="/"><button>View Crew</button></Link>
        <Link to="/new"><button>Add Crewmate</button></Link>
      </header>
      {routes}
    </div>
  );
};

export default App;
