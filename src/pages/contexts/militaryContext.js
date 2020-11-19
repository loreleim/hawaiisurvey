import React from "react";
import store from "../../database/database";
import style from "../../pages/index.module.scss";

export default class MilitaryContext extends React.Component {

  render() {

    return (
      <div className={style.contextContainer}>
          <h1>{store.context[3]}</h1>
          <button onClick={this.props.contextNext}>Next →</button>
      </div>
    );
  }
}
