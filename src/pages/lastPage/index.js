import React from "react";
import style from "./index.module.scss";
import store from "../../database/database.js";

export default class Last extends React.Component {

  render() {

    console.log(store.userResponses)
    const submitForm = (e) => {
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
          {store.userResponses.map((userResponses, i) => (
            <tr>
              <td>{i}</td>
              <td>{userResponses}</td>
            </tr>
          ))}
        </table>
        <div className={style.backContainer}><button onClick={this.props.backFunction}>🡐</button></div>
        <form onSubmit={submitForm}>
        </form>
      </div>
    );
  }
}
