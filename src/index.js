import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import "./assets/style.css";
import services from './services';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

class QuizGDSC extends Component{
  state = {
    questionData: [],
    score: 0,
    responses: 0
  };

  getQuestions = () => {
    services().then(question => {
      this.setState({
        questionData: question
      });
    });
  };

  computeAnswer = (answer, correctAnswer) => {
    if(answer === correctAnswer){
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    });
  };

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0
    });
  };

  componentDidMount(){
    this.getQuestions();
  }

  render(){
    return(
      <div className="container">
        <div className="title">Quiz GDSC - UEM</div>
        {this.state.questionData.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionData.map(
            ({question, answers, correct, questionId}) => 
            <QuestionBox 
              question={question} 
              options={answers} 
              keys={questionId} 
              selected={answer => this.computeAnswer(answer, correct)}
            />
          )
        }
        
        {this.state.responses === 5 ? 
          (<Result score={this.state.score} playAgain={this.playAgain}/>)
         : null
        }
      </div>
    );
  }
}

ReactDOM.render(<QuizGDSC />, document.getElementById("root"));