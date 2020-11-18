import React from 'react';

class Template2 extends React.Component {
    render() {
        return (
            <div className={style.approvalContainer}>
                <h2 className={style.approvalLast}>of {store.approvalQuestions[this.props.approvalStep - store.demographicQuestions.length - store.context.length - 1]}?</h2>
                {store.options.map((options, index) => (
                <div key={options} className={style.optionsContainer}>
                    <button onClick={() => this.props.nextPage(options)}>{options}</button>
                    <h3>{index === 1 ? "" : "or"}</h3>
                </div>
                ))}
          </div>
        );
    }
}

export default Template2;