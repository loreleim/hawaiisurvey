import React from 'react';
import style from "./index.module.scss";
import store from "../../database/database.js";

class ApprovalSecond extends React.Component {
    render() {
        return (
            <div>
                <div className={style.approval2Container}>
                <h2 className={style.approvalLast}>{store.approvalQuestions[this.props.approvalStep-6]}?</h2>
                <div className={style.template2}>
                    {store.options.map((options, index) => (
                    <div key={options} className={style.optionsContainer}>
                        <button onClick={() => this.props.nextPage(options)}>{options}</button>
                        {index === 0 ? <h3>or</h3> : null}
                    </div>
                    ))}
                </div>
                </div>
            </div>
        );
    }
}

export default ApprovalSecond;