import React from 'react';
import style from "./index.module.scss";
import store from "../../database/database.js";

class ApprovalThird extends React.Component {
    render() {
        return (
            <div>
                <div className={style.tourismContainer}>
                <h2 className={style.tourismQuestion}>Which tourist groups' spending, visiting, or environmental-care habits do you approve of most?</h2>
                <p className={style.linkData}>This data is pulled from the top 5 vistor groups reported from the <a href="https://files.hawaii.gov/dbedt/visitor/visitor-research/2019-annual-visitor.pdf" rel="noreferrer" target="_blank">Hawai'i Transit Authority's 2019 Tourism Report.</a></p>
                    <div className={style.optionsContainer} id={style.tourismGroups}>
                        <button onClick={() => this.props.nextPage(store.tourismGroups[0])}>{store.tourismGroups[0]}</button>
                        <button onClick={() => this.props.nextPage(store.tourismGroups[1])}>{store.tourismGroups[1]}</button>
                        <button onClick={() => this.props.nextPage(store.tourismGroups[2])}>{store.tourismGroups[2]}</button>
                        <button onClick={() => this.props.nextPage(store.tourismGroups[3])}>{store.tourismGroups[3]}</button>
                        <button onClick={() => this.props.nextPage(store.tourismGroups[4])}>{store.tourismGroups[4]}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApprovalThird;