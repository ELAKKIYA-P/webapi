import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [users,setUsers]=useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))

  },[])
  const mapdata=()=>{
     //map function
   // let mappedArray=users.map((user)=> user.id *2)
  // console.log(mappedArray)
  //filter function
  let filterData=users.filter((user)=>{
    return user.id<=5
  })
    console.log(filterData)

  
  }
  return (
    <div className="App">
      <h1>user</h1>
      <div className="card">
        {users.map((user,index)=>(
        <div className="card-inner" key={index}>
         
<span>{user.name}</span>
<span>{user.username}</span>
        </div>
        )
        )
}
    <button onClick={mapdata}>setmappedarray</button>

      </div>
      
          </div>
  );
}

export default App;
