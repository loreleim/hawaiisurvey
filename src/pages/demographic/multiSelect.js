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
              </div>
          ))}
          </div>
          <button onClick={() => this.props.nextFunction(this.state.ethnicityArray)}>Looks Good</button>
        </div>
      </div>
    );
  }
}
