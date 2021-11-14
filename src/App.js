import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <form class="userform">
          <label for ="Username">First Name: </label>
          <input type ="text" id="fname" name= "fname" ></input>
          <label for ="Username">Last Name: </label>
          <input type ="text" id="lname" name="lname" ></input>
          <label for ="pnumber">Phone number: </label>
          <input type ="text" id="pnumber" name="pnumber"></input>
          <label for ="email">Email:</label>
          <input type ="password" name="user_pass"></input>
          <label for ="password">Password:</label> 
          <input type ="text" name="password"></input>
          <button>Submit</button>
       </form>
    </div>
  );
}

export default App;
