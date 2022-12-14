import React, { useState } from "react";
import Loading from "./Loading";
import Data from "./Data";

function App() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    const res = await fetch('https://reqres.in/api/users?page=1');
    const resJson = await res.json();
    setLoading(true)
    setTimeout(()=>{
      setUser(resJson.data)
      setLoading(false)
    }, 800)    
  }

  return (
    <>
      <div className="navbar">
        <h2> Employee's Details</h2>
        <button id="getData" onClick={loadUsers}>Get User Data</button>
      </div>
      {loading ? <Loading /> : <Data user = {users}/>}
    </>
  );
}

export default App;