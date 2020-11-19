import React from "react";
import store from "../../database/database";
import style from "../../pages/index.module.scss";

export default class AgricultureContext extends React.Component {

  render() {

    return (
      <div className={style.contextContainer}>
          <h1>{store.context[2]}</h1>
          <button onClick={this.props.contextNext}>Goings →</button>
      </div>
    );
  }
}
