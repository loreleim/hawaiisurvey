import React from "react";
import style from "./index.module.scss";

export default class ThankYou extends React.Component {

  render() {

    return (
      <div className={style.thankContainer}>
          <h1>Mahalo</h1>
          <h3>Your responses have been submitted successfully!</h3>
      </div>
    );
  }
}
