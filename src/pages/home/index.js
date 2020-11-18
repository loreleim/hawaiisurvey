import React from "react";
import style from "./index.module.scss";
//import store from "../../database/database.js";

export default class Home extends React.Component {

  render() {

    return (
      <div className={style.homeContainer}>
        <div className={style.homeText}>
          <h1>Hawai'i Industry Survey</h1>
          <h2>locals on Hawai'i industries</h2>
          <p>Isolated pacific islands such as Hawai’i currently face economic toll due to the pandemic’s effect on industries such as tourism. When existing in an economy without it’s main stimulant, how are perceptions of “successful” industries changing amongst local communities?</p>
        </div>
        <button onClick={this.props.function} className={style.nextButton}>start</button>
      </div>
    );
  }
}
