import React from "react";
import style from "./index.module.scss";
import Confetti from 'react-confetti';
export default class ThankYou extends React.Component {

  render() {

    return (
      <div>
        <div className={style.confettiContainer}>
          <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={100}/>
        </div>
        <div className={style.thankContainer}>
          <h1>Mahalo</h1>
          <h3>Your responses have been submitted successfully!</h3>
        </div>
      </div>
    );
  }
}
