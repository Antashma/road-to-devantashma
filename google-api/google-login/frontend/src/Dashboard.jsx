import { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

function Dashboard() {

  const [user, setUser] = useState(null)

  async function getUserData(){
    try {
      const res = await axios.get("http://localhost:8000/auth/user")
      console.log(res);
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
      getUserData();
  }, [])

  return (
    <>
        <img src={user?.imageUrl} />
        <p>Welcome, {user?.name}! Here is your goal and tasks to focus on</p>
        <a href="http://localhost:8000/auth/logout" className='auth-btn'><i class="fa-solid fa-right-from-bracket"></i> Logout</a>
    </>
  )
}

export default Dashboard;
