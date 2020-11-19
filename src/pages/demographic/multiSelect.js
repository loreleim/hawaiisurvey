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
        console.log("checked")
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
              </div>
          ))}
          </div>
          <button onClick={() => this.props.nextFunction(this.state.ethnicityArray)}>Looks Good</button>
        </div>
      </div>
    );
  }
}
