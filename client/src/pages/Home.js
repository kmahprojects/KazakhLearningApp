import React,  {useEffect, useState } from 'react';
import axios from "axios";

function Home() {

  const [users, setUsers] = useState([]);
  const [countries, setCountries] = useState([]);
  useEffect( ()=>{
      fetch('http://localhost:3500/api/countries')
      .then(res => res.json())
      .then(data => setCountries(data));

    },[])

  useEffect(() => {
    axios
    .get('http://localhost:3500/users')
    .then((response) => setUsers(response.data))
    .catch((error) => console.error(error));
    }, []);
    
    function addUser(name, country, latinCountry, kzCountry) {
      console.log(name, country, latinCountry, kzCountry);
      axios
      .post('http://localhost:3500/users', { name, country, latinCountry, kzCountry})
      .then((response) => setUsers([...users, response.data]) )
      .catch((error) => console.error(error));
    }

  function submitUser(e){
    e.preventDefault();
    let name = document.getElementById("userName");
    
    if (name === undefined || name.length === 0){
      return;
    }
    let country = document.getElementById("country");
    
    let result = countries.find((item) => item.name === country.value);
    addUser(name.value, country.value, result.latinName, result.kzName);
    
  }

  async function setCurrent(e){
    
    let userID = e.target.value;
    axios
    .put(`http://localhost:3500/users/${userID}`)
    .catch((error) => console.error(error));
    axios
    .patch(`http://localhost:3500/users/${userID}`)
    .catch((error) => console.error(error));
    axios
    .get('http://localhost:3500/users')
    .then((response) => setUsers(response.data))
    .catch((error) => console.error(error));
  }

  
  return (
      <>
      <form id="userForm">
        <label>Name: </label>
        <input type="text" id="userName"/><br></br>
        <label>Choose a country:</label>
      <select id="country">
        {countries.map(item=>(
          <option id={item.id} value={item.name}>{item.name} - {item.kzName}</option>
        ))}
      </select><br></br>
        <input type="submit" value="Submit" onClick={submitUser}></input>
      </form>
      <form>
      <div id = "userInfo">
        <h2>Select Current User:</h2>
      {users.map(item =>(
          <div className = "singleUser" key = {item._id}>
          <input defaultChecked={item.selected ? 'checked' : ''} type="radio" id={item._id} name="userList" value={item._id} onChange={setCurrent}/>
          <label htmlFor={item._id}>{item.name} - {item.country}</label>
          </div>
      ))}
      </div>
      </form>
      </>
    
    
  );

}
export default Home;
