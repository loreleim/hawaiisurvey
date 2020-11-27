import React from "react";
import style from "./index.module.scss";
import store from "../../database/database.js";
import Popup from "./popup";

export default class Last extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localArray: store.userResponses,
      popupShown: false,
    }
  }

  closePopup = () => {
    const {popupShown} = this.state;
    this.setState({popupShown: !popupShown})
  }
  render() {

    const submitForm = async (e) => {
      e.preventDefault();
      const {email, emailConfirm} = e.target;
      
      if (email.value !== emailConfirm.value) {
        return alert("Emails do not match!")
      }
      if (email.value === emailConfirm.value) {
        store.userResponses.push(email.value);
        try {
          const response = await fetch(process.env.REACT_APP_GOOGLE_KEY, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify([store.userResponses])
          });
          await response.json()
          //set Data here
        } catch (err) {
          console.log(err)
        }
        this.props.renderThank();
      }
    }

    const editResponse = (e, index) => {
      /*Age Toggle */
      if (index === 0) {
        console.log(e)
      }

      /*Pronouns Toggle */
      if (index === 1) {
        if (e === "She/Her/Hers") {
          const newArray = [...store.userResponses];
          newArray[index] = "He/Him/His";
          this.setState({localArray: newArray})
        }
        if (e === "He/Him/His") {
          const newArray = [...store.userResponses];
          newArray[index] = "They/Them/Theirs";
          this.setState({localArray: newArray})
        }
        if (e === "They/Them/Theirs") {
          const newArray = [...store.userResponses];
          newArray[index] = "Other";
          this.setState({localArray: newArray})
        }
        if (e === "Other") {
          const newArray = [...store.userResponses];
          newArray[index] = "She/Her/Hers";
          this.setState({localArray: newArray})
        }
      }

      /*Lived in Hawai'i*/
      if (index === 2 && e === "Yes") {
        console.log(store.userResponses)
      }

      /*No Toggle*/
      if (e === "No") {
        const newArray = [...store.userResponses];
        newArray[index] = "Yes";
        this.setState({localArray: newArray})
      }

      /*Approve Toggle*/
      if (e === "approve") {
        const newArray = [...store.userResponses];
        newArray[index] = "disapprove";
        this.setState({localArray: newArray})
      }
      console.log (index)

      /**/
    }

    return (
      <div className={style.lastContainer}>
        <h2>Review or edit your responses</h2>
        <table>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
          {store.userResponses.map((userResponses, index) => (
            <tr key={index}>
              <td>{store.reviewQuestions[index]}</td>
              <td><button onClick={() => editResponse(userResponses, index)}>{userResponses}</button></td>
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
