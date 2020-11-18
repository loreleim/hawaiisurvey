import React from "react";
import style from "./index.module.scss";
import store from "../../database/database.js";

export default class Demographic extends React.Component {

  render() {

    return (
      <div className={style.demographicContainer}>
        <div className={style.demographicQuestions}>
          <h1>{store.demographicQuestions[this.props.currentStep - 1].questionText}</h1>
          <p>{store.demographicQuestions[this.props.currentStep - 1].description}</p>
          {store.demographicQuestions[this.props.currentStep - 1].answerOptions.map((answerOptions) => (
            <button
              onClick={() => this.props.demoStep(answerOptions.answerText)}
            >
              {answerOptions.answerText}
            </button>
          ))}
        </div>
        <div className={style.buttonContainer}><button onClick={this.props.backFunction}>🡐</button></div>
      </div>
    );
  }
}
