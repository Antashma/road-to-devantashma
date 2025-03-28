import { Routes, Route, Link } from 'react-router';
import './App.css'
import Login from './Login';
import Dashboard from './Dashboard';

function App() {

  return (
    <>
      <h1><i className="fa-solid fa-list-check"></i> FocusTask</h1>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/dashboard">Dashboard</Link> 
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  
    </>
  )
}

export default App;
