import React, { Component } from 'react';

class Game extends Component {

  constructor(props){
    super(props);
    this.state = {
      questions: [],
      numberOfQuestions: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    fetch('https://opentdb.com/api.php?amount=10')
    .then(res => res.json())
    .then(data => {
      this.setState({questions: data.results, numberOfQuestions: data.results.length})
    })
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.numberOfQuestions)
  }

  render(){
    if (this.state.questions.length === 0){
      return "Loading"
    }
    return (
      <>
      <h2>Question </h2>
      <h3>{this.state.questions[0].question}</h3>
      <form>
        <input type="radio" name="answer" value="1" />
        <label>{this.state.questions[0].correct_answer}</label>
        <br></br>
    
        <input type="radio" name="answer" value="2" />
        <label>{this.state.questions[0].incorrect_answers[0]}</label>
        <br></br>
    
        <input type="radio" name="answer" value="3" />
        <label>{this.state.questions[0].incorrect_answers[1]}</label>
        <br></br>
    
        <input type="radio" name="answer" value="4" />
        <label>{this.state.questions[0].incorrect_answers[2]}</label>
    
        <br></br>
        <button type="submit" onClick={this.handleSubmit}>Submit Answer</button>
      </form>
      </> 
    
    )
  }
}

export default Game;