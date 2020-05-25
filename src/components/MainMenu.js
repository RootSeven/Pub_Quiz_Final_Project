import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => (

  <>
  <h1>Pub Quiz</h1>
  <form>
    <input type="text" placeholder="Enter your name" />
    <br></br>
    <Link to="/quizzes/generate">
      <button>Play</button>
    </Link>
  </form>
  </>

)

export default MainMenu;