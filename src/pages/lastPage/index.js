import React from "react";
import style from "./index.module.scss";
import store from "../../database/database.js";

export default class Last extends React.Component {

  render() {

    const submitForm = (e) => {
      e.preventDefault();
      const {email, emailConfirm} = e.target;
      
      if (email.value !== emailConfirm.value) {
        return alert("Emails do not match!")
      }
      if (email.value === emailConfirm.value) {
        store.userResponses.push(email.value);
        this.props.renderThank();
      }
    }

    return (
      <div className={style.lastContainer}>
        <h2>Review your responses</h2>
        <table>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
          {store.userResponses.map((userResponses, index) => (
            <tr>
              <td>{store.reviewQuestions[index]}</td>
              <td>{userResponses}</td>
            </tr>
          ))}
        </table>
        <form onSubmit={submitForm}>
        <h2 className={style.giveawayContainer}>If you would like to be entered in a giveaway for (1) one of the following $30 gift cards to local businesses such as MORI by Art+FLEA, Manuheali’i, Zippy’s, or Hawaiian Farmers Market. Enter your email below! If not, hit the Submit Form Button below</h2>
        <div className={style.emailContainer}>
          <input name="email" type="email" autoComplete="off" className={style.emailInputs}></input>
          <label>Email Address</label>
        </div>
        <div className={style.emailContainer}>
          <input name="emailConfirm" type="email" autoComplete="off" className={style.emailInputs}></input>
          <label>Confirm Email</label>
        </div>
        <button className={style.submitButton} onClick={this.props.contextNext}>Submit Form</button>
        </form>
      </div>
    );
  }
}
