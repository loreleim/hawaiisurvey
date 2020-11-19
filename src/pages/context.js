import React from "react";
import store from "../database/database";
import style from "../pages/index.module.scss";

export default class Context extends React.Component {

  render() {

    return (
      <div className={style.contextContainer}>
          <h1>{store.context[0]}</h1>
          <p>You will be able to review &amp; edit your responses at the end of this form.</p>
          <button onClick={this.props.contextNext}>Geff um, we go →</button>
      </div>
    );
  }
}
