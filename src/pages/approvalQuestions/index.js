import React from "react";
import style from "./index.module.scss";
import store from "../../database/database.js";

export default class Approval extends React.Component {

  render() {

    return (
      <div>
        <div className={style.approvalContainer}>
          <h1>Do you</h1>
          <div className={style.approveOrDisapprove}>
            {store.options.map((options, index) => (
              <div key={options} className={style.optionsContainer}>
                <button onClick={() => this.props.nextPage(options)}>{options}</button>
                <h3>{index === 1 ? "" : "or"}</h3>
              </div>
            ))}
          </div>
          <h2 className={style.approvalLast}>of {store.approvalQuestions[this.props.approvalStep - 6]}?</h2>
        </div>
      </div>
    );
  }
}
