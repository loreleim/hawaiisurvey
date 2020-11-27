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

  saveEthnicity = (e) => {
    const newArray = [...store.userResponses];
    newArray[4] = e;
    this.setState({localArray: newArray})
    const {popupShown} = this.state;
    this.setState({popupShown: !popupShown})
  }

  renderPopup = () => {
    return <Popup closePopupFunction={this.closePopup} saveEthnicityFunction={this.saveEthnicity}/>
  }

  render() {

    const submitForm = async (e) => {
      e.preventDefault();
      const {email, emailConfirm, zipcode} = e.target;
      
      if (email.value !== emailConfirm.value) {
        return alert("Emails do not match!")
      }
      if (email.value === emailConfirm.value) {
        this.state.localArray.push(email.value);
        this.state.localArray.push(zipcode.value);
        try {
          const response = await fetch('https://v1.nocodeapi.com/loreleim/google_sheets/zNgfBJyCfHevmxSX?tabId=Sheet1', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify([this.state.localArray])
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
        if (e === "19 and under") {
          const newArray = [...store.userResponses];
          newArray[index] = "20 to 29";
          this.setState({localArray: newArray})
        }
        if (e === "20 to 29") {
          const newArray = [...store.userResponses];
          newArray[index] = "30 to 39";
          this.setState({localArray: newArray})
        }
        if (e === "30 to 39") {
          const newArray = [...store.userResponses];
          newArray[index] = "40 to 49";
          this.setState({localArray: newArray})
        }
        if (e === "40 to 49") {
          const newArray = [...store.userResponses];
          newArray[index] = "50 and over";
          this.setState({localArray: newArray})
        }
        if (e === "50 and over") {
          const newArray = [...store.userResponses];
          newArray[index] = "19 and under";
          this.setState({localArray: newArray})
        }
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

      /*Yes Toggle*/
      if (e === "Yes") {
        const newArray = [...store.userResponses];
        newArray[index] = "No";
        this.setState({localArray: newArray})
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

      /*Disapprove Toggle*/
      if (e === "disapprove") {
        const newArray = [...store.userResponses];
        newArray[index] = "approve";
        this.setState({localArray: newArray})
      }

      /*Tourist Toggle*/
      if (index === 9) {
        if (e === "American West Coast Tourists") {
          const newArray = [...store.userResponses];
          newArray[index] = "American East Coast Tourists";
          this.setState({localArray: newArray})
        }
        if (e === "American East Coast Tourists") {
          const newArray = [...store.userResponses];
          newArray[index] = "Japanese Tourists";
          this.setState({localArray: newArray})
        }
        if (e === "Japanese Tourists") {
          const newArray = [...store.userResponses];
          newArray[index] = "Canadian Tourists";
          this.setState({localArray: newArray})
        }
        if (e === "Canadian Tourists") {
          const newArray = [...store.userResponses];
          newArray[index] = "European Tourists";
          this.setState({localArray: newArray})
        }
        if (e === "European Tourists") {
          const newArray = [...store.userResponses];
          newArray[index] = "American West Coast Tourists";
          this.setState({localArray: newArray})
        }
      }

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
