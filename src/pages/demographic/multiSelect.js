import React from "react";
import style from "../demographic/index.module.scss";
import store from "../../database/database.js";

export default class MultiSelect extends React.Component {

  state = {
    ethnicityArray:[]
  }

  render() {

    return (
      <div className={style.demographicContainer}>
        <div className={style.demographicQuestions}>
        <h2>{store.multiSelect[0].questionText}</h2>
        <form onSubmit={this.props.nextFunction()}>
          {store.multiSelect[0].answerOptions.map((answerOptions) => (
              <div className={style.checkboxContainer}>
                <input type="checkbox" onChange={() => console.log(answerOptions.answerText)}></input>
                <span className={style.checked}></span>
                {answerOptions.answerText}
              </div>
          ))}
          <button>Looks Good 🡒</button>
        </form>
        </div>
        <div className={style.buttonContainer}><button onClick={this.props.backFunction}>🡐</button></div>
      </div>
    );
  }
}
