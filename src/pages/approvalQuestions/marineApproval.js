import React from "react";
import style from "./index.module.scss";
import store from "../../database/database.js";

export default class MarineApproval extends React.Component {

  render() {

    return (
      <div>
        <div className={style.approvalContainer}>
          <h1>Do you</h1>
          <div className={style.approveOrDisapprove}>
            {store.options.map((options, index) => (
              <div key={options} className={style.optionsContainer}>
                <button onClick={() => this.props.nextPage(options)}>{options}</button>
                {index === 0 ? <h3>or</h3> : null}
              </div>
            ))}
          </div>
          <h2 className={style.approvalLast}>of {store.approvalQuestions[this.props.approvalStep - 7]}?</h2>
        </div>
      </div>
    );
  }
}
