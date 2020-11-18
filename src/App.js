import React from "react";
import style from "./style/index.scss";
import store from "./database/database.js";
import ProgressBar from "./components/progressBar";
import Home from "./pages/home";
import Demographic from "./pages/demographic";
import MultiSelect from "./pages/demographic/multiSelect";
import Context from "./pages/context.js";
import Approval from "./pages/approvalQuestions";
import Last from "./pages/lastPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeShown: false,
      demographicShown: false,
      multiShown: false,
      contextShown: false,
      approvalShown: false,
      lastShown: false,
      currentStep: 0,
      nextStep: 0,
    };
  }

  handleNext = () => {
    this.setState({currentStep: this.state.currentStep + 1})
    this.setState({homeShown: false});
    this.setState({demographicShown: true})
  }

  demoNext = (pressedAnswer) => {
    this.setState({currentStep: this.state.currentStep + 1});
    store.userResponses.push(pressedAnswer);
    console.log(store.userResponses);
    if (this.state.currentStep === store.demographicQuestions.length) {
      this.setState({demographicShown: false});
      this.setState({multiShown:true})
    }
  }

  multiSelectNext = () => {
    if (this.state.currentStep === store.demographicQuestions.length + store.multiSelect.length) {
      this.setState({multiShown: false});
      this.setState({contextShown: true});
    }
  }

  contextNext = () => {
    this.setState({currentStep: this.state.currentStep + 1})
    this.setState({contextShown: false});
    this.setState({approvalShown: true});
    if (this.state.currentStep === store.demographicQuestions.length + store.multiSelect.length + store.context.length) {
      this.setState({contextShown: false});
      this.setState({approvalShown: true});
    }
  }

  goBack = () => {
    this.setState({currentStep: this.state.currentStep - 1})
    console.log("this is the current step" + this.state.currentStep)
    if (this.state.currentStep === 1) {
      this.setState({currentStep: 0})
      this.setState({demographicShown: false});
      this.setState({homeShown:true});
    }
    if (this.state.currentStep === store.approvalQuestions.length + store.demographicQuestions.length + store.context.length) {
      console.log('this is the last step and the next page should show')
      this.setState({approvalShown: true});
      this.setState({lastShown: false});
    }
    if (this.state.currentStep === store.demographicQuestions.length + store.multiSelect.length) {
      console.log("multiselect back was pressed")
      this.setState({demographicShown: true});
      this.setState({multiShown: false});
    }
  }

  approvalNext = (pressedAnswer) => {
    this.setState({currentStep: this.state.currentStep + 1});
    store.userResponses.push(pressedAnswer);
    if (this.state.currentStep === store.approvalQuestions.length + store.demographicQuestions.length) {
      console.log('this is the last step and the next page should show')
      this.setState({approvalShown: false});
      this.setState({lastShown: true});
    }
  }


  componentDidMount() {
    if (this.state.currentStep === 0) {
      this.setState({homeShown: true});
    }
  }

  renderHome = () => {
    return <Home function={this.handleNext}/>
  }

  renderDemographic = () => {
    return <Demographic backFunction={this.goBack} demoStep={this.demoNext} currentStep={this.state.currentStep}/>
  }

  renderMulti = () => {
    return <MultiSelect nextFunction={this.multiSelectNext} backFunction={this.goBack}/>
  }

  renderContext = () => {
    return <Context contextNext={this.contextNext}/>
  }

  renderApproval = () => {
    return <Approval approvalStep={this.state.currentStep} nextPage={this.approvalNext}/>
  }

  renderLast = () => {
    return <Last backFunction={this.goBack}/>
  }

  render

  render() {
    const {homeShown, demographicShown, multiShown, contextShown, approvalShown, lastShown, currentStep} = this.state;
    return (
    <div className={style.appContainer}>
      <ProgressBar fill={currentStep / (store.totalSteps)}/>
      {homeShown && this.renderHome()}
      {demographicShown && this.renderDemographic()}
      {multiShown && this.renderMulti()}
      {contextShown && this.renderContext()}
      {approvalShown && this.renderApproval()}
      {lastShown && this.renderLast()}
    </div>
    )
  }
}

export default App;
