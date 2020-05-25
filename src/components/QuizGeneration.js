import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuizGeneration extends Component {

  constructor(props){
    super(props)
    this.state = {
      numberOfQuestions: 1
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({numberOfQuestions: event.target.value})
  }

  render(){
    return (
      <>
      <h1>Auto-Quiz</h1>
      <form>
        <label>How many questions?</label>
        <input onChange={this.handleChange} type="range" defaultValue="1" min="1" max= "5"></input>
        <p>{this.state.numberOfQuestions} question(s)</p>
        <br></br>
        <Link to="/game">
          <button>Generate Quiz</button>
        </Link>
      </form>
      </>
    )
  }

}

export default QuizGeneration;