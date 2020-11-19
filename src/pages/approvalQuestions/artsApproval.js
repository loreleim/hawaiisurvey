import React from "react";
import style from "./index.module.scss";
import store from "../../database/database.js";

export default class ArtsApproval extends React.Component {

  render() {

    return (
      <div>
        <div className={style.approvalContainer}>
          <h1>Do you</h1>
          <div className={style.approveOrDisapprove}>
            {store.options.map((options, index) => (
              <div key={options} className={style.optionsContainer}>
                <button onClick={() => this.props.nextPage(options)}>{options}</button>
              </div>
            ))}
          </div>
          <h2 className={style.approvalLast}>of {store.approvalQuestions[this.props.approvalStep - 9]}?</h2>
        </div>
      </div>
    );
  }
}
