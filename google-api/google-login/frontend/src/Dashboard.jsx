import { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

function Dashboard() {

  const [user, setUser] = useState(null)

  async function getUserData(){
    try {
      const res = await axios.get("http://localhost:8000/auth/user", {withCredentials: true})
      setUser(res.data);
    } catch (err) {
      console.error({msg: "Error fetching user", err})
    }
  }

  useEffect(() => {
      getUserData();
  }, [])

  return (
    <>
    { user ? 
    <div className="container">
        <img src={user.image} />
        <p>Welcome, {user.firstName}! Here is your goal and tasks to focus on</p>
        <a href="http://localhost:8000/auth/logout" className='auth-btn'><i className="fa-solid fa-right-from-bracket"></i> Logout</a>
    </div> : <p>Loading...</p> }
    </>
  )
}

export default Dashboard;
