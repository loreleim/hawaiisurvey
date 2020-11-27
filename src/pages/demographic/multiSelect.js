import React from "react";
import style from "../demographic/index.module.scss";
import store from "../../database/database.js";

export default class MultiSelect extends React.Component {

  state = {
    ethnicityArray:[]
  }

  render() {

    const ethnicityCheck = (e) => {
      let checkedEthnicity = e.target.value;

      if(e.target.checked) {
        this.setState({ethnicityArray: [...this.state.ethnicityArray, checkedEthnicity]})
      } 
      else {
        let removedEthnicity = this.state.ethnicityArray.filter(checkedEthnicity => checkedEthnicity !== e.target.value)
        this.setState({ethnicityArray: removedEthnicity});
      }
    }

    return (
      <div className={style.demographicContainer}>
        <div className={style.demographicQuestions}>
          <h2>{store.multiSelect[0].questionText}</h2>
          <div className={style.leftCenter}>
          {store.multiSelect[0].answerOptions.map((answerOptions, i) => (
              <div key={i} className={style.checkboxContainer}>
                <input type="checkbox" value={answerOptions.answerText} onChange={ethnicityCheck.bind(this)}></input>
                <span>{answerOptions.answerText}</span>
              </div>
          ))}
          </div>
          <button onClick={() => this.props.nextFunction(this.state.ethnicityArray)}>Looks Good</button>
        </div>
      </div>
    );
  }
}
