import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainMenu from '../components/MainMenu';
import QuizGeneration from '../components/QuizGeneration'
import Game from '../components/Game';

class Main extends Component {

  render(){
    return(
      <>
      <Router>
        <Route exact path="/" component={MainMenu} />
        <Route path="/quizzes/generate" component={QuizGeneration} />
        <Route path="/game" component={Game} />
      </Router>
      </>
    )
  }
}

export default Main;