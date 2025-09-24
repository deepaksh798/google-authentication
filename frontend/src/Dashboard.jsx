import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    if(!userInfo){
      navigate('/');
    } else {
      setUserData(userInfo);
    }
  }, [])

  console.log("User Data: ", userData);
  const handleLogout = () => {
    localStorage.removeItem("user-info");
    navigate('/');
  }

  return (
    <div>
      <h1>Welcome</h1>
      {userData && (
        <div >
          <h2>{userData.name}</h2>
          <h3>{userData.email}</h3>
          <img src={userData?.picture} alt="Profile" />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  )
}

export default Dashboard