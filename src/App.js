import React from "react";
import style from "./style/index.scss";
import store from "./database/database.js";
import ProgressBar from "./components/progressBar";
import Home from "./pages/home";
import Demographic from "./pages/demographic";
import MultiSelect from "./pages/demographic/multiSelect";
import Context from "./pages/context.js";
import MarineContext from "./pages/contexts/marineContext.js";
import MarineApproval from "./pages/approvalQuestions/marineApproval";
import AgricultureContext from "./pages/contexts/agricultureContext";
import MilitaryContext from "./pages/contexts/militaryContext";
import MilitaryApproval from "./pages/approvalQuestions/militaryApproval.js";
import ArtsContext from "./pages/contexts/artsContext";
import ArtsApproval from "./pages/approvalQuestions/artsApproval";
import Approval from "./pages/approvalQuestions";
import ApprovalSecond from "./pages/approvalQuestions/template2";
import ApprovalThird from "./pages/approvalQuestions/template3";
import Last from "./pages/lastPage";
import ThankYou from "./pages/thankYou";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeShown: false,
      demographicShown: false,
      multiShown: false,
      contextShown: false,
      marineContextShown: false,
      marineApprovalShown: false,
      agricultureContextShown: false,
      militaryContextShown: false,
      militaryApprovalShown: false,
      artsContextShown: false,
      artsApprovalShown: false,
      approvalShown: false,
      approvalSecondShown: false,
      approvalThirdShown: false,
      lastShown: false,
      thankShown: false,
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
      console.log("multiselect should be shown")
      this.setState({demographicShown: false});
      this.setState({multiShown:true})
    }
  }

  multiSelectNext = (ethnicityArray) => {
    let arrayToString = ethnicityArray.join();
    store.userResponses.push(arrayToString);

    if (this.state.currentStep === store.demographicQuestions.length + store.multiSelect.length) {
      this.setState({multiShown: false});
      this.setState({contextShown: true});
    }
  }

  finalNext = () => {
    this.setState({lastShown: false});
    this.setState({thankShown: true});
  }

  contextNext = () => {
    this.setState({currentStep: this.state.currentStep + 1})
    this.setState({contextShown: false});
    this.setState({approvalShown: true});
    if (this.state.currentStep === store.demographicQuestions.length + store.multiSelect.length + store.context.length + 3) {
      this.setState({contextShown: false});
      this.setState({approvalShown: true});
    }
    if (this.state.currentStep === 21) {
      this.setState({marineApprovalShown: true});
      this.setState({approvalShown: false});
      this.setState({marineContextShown: false});
    }
    if (this.state.currentStep === 28) {
      this.setState({marineApprovalShown: true});
      this.setState({approvalShown: false});
      this.setState({agricultureContextShown: false});
    }
    if (this.state.currentStep === 31) {
      this.setState({militaryContextShown: false});
      this.setState({approvalShown: false});
      this.setState({militaryApprovalShown: true});
    }
    if (this.state.currentStep === 37) {
      this.setState({artsContextShown: false});
      this.setState({approvalShown: false});
      this.setState({artsApprovalShown: true});
    }
  }

  approvalNext = (pressedAnswer) => {
    this.setState({currentStep: this.state.currentStep + 1});
    store.userResponses.push(pressedAnswer);
    console.log(store.userResponses);
    if (this.state.currentStep === 9) {
      this.setState({approvalShown: false});
      this.setState({approvalThirdShown: true});
    }
    if (this.state.currentStep === 10) {
      this.setState({approvalSecondShown: true});
      this.setState({approvalThirdShown: false});
    }
    if (this.state.currentStep === 20) {
      this.setState({approvalSecondShown: false});
      this.setState({marineContextShown: true});
    }
    if (this.state.currentStep === 27) {
      this.setState({marineApprovalShown: false});
      this.setState({agricultureContextShown: true});
    }
    if (this.state.currentStep === 30) {
      this.setState({marineApprovalShown: false});
      this.setState({militaryContextShown: true});
    }
    if (this.state.currentStep === 36) {
      this.setState({militaryApprovalShown: false});
      this.setState({artsContextShown: true});
    }
    if (this.state.currentStep === store.approvalQuestions.length + store.demographicQuestions.length + store.context.length - 1) {
      console.log('this is the last step and the next page should show')
      this.setState({approvalShown: false});
      this.setState({artsApprovalShown: false});
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
    return <Demographic demoStep={this.demoNext} currentStep={this.state.currentStep}/>
  }

  renderMulti = () => {
    return <MultiSelect nextFunction={this.multiSelectNext}/>
  }

  renderContext = () => {
    return <Context contextNext={this.contextNext}/>
  }

  renderMarineContext = () => {
    return <MarineContext contextNext={this.contextNext}/>
  }

  renderMarineApproval = () => {
    return <MarineApproval approvalStep={this.state.currentStep} nextPage={this.approvalNext}/>
  }

  renderAgricultureContext = () => {
    return <AgricultureContext contextNext={this.contextNext}/>
  }

  renderMilitaryContext = () => {
    return <MilitaryContext contextNext={this.contextNext}/>
  }

  renderMilitaryApproval = () => {
    return <MilitaryApproval approvalStep={this.state.currentStep} nextPage={this.approvalNext}/>
  }

  renderArtsContext = () => {
    return <ArtsContext contextNext={this.contextNext}/>
  }

  renderArtsApproval = () => {
    return <ArtsApproval approvalStep={this.state.currentStep} nextPage={this.approvalNext}/>
  }

  renderApproval = () => {
    return <Approval approvalStep={this.state.currentStep} nextPage={this.approvalNext}/>
  }

  renderApprovalSecond = () => {
    return <ApprovalSecond approvalStep={this.state.currentStep} nextPage={this.approvalNext}/>
  }

  renderApprovalThird = () => {
    return <ApprovalThird approvalStep={this.state.currentStep} nextPage={this.approvalNext}/>
  }

  renderLast = () => {
    return <Last renderThank={this.finalNext}/>
  }

  renderThank = () => {
    return <ThankYou/>
  }

  render

  render() {
    const {homeShown, demographicShown, multiShown, contextShown, marineContextShown, marineApprovalShown, agricultureContextShown, militaryContextShown, militaryApprovalShown, artsContextShown, artsApprovalShown, approvalShown, approvalSecondShown, approvalThirdShown, lastShown, currentStep, thankShown} = this.state;
    return (
    <div className={style.appContainer}>
      <ProgressBar fill={currentStep / (store.totalSteps)}/>
      {homeShown && this.renderHome()}
      {demographicShown && this.renderDemographic()}
      {multiShown && this.renderMulti()}
      {contextShown && this.renderContext()}
      {marineContextShown && this.renderMarineContext()}
      {marineApprovalShown && this.renderMarineApproval()}
      {agricultureContextShown && this.renderAgricultureContext()}
      {militaryContextShown && this.renderMilitaryContext()}
      {militaryApprovalShown && this.renderMilitaryApproval()}
      {artsContextShown && this.renderArtsContext()}
      {artsApprovalShown && this.renderArtsApproval()}
      {approvalShown && this.renderApproval()}
      {approvalSecondShown && this.renderApprovalSecond()}
      {approvalThirdShown && this.renderApprovalThird()}
      {lastShown && this.renderLast()}
      {thankShown && this.renderThank()}
    </div>
    )
  }
}

export default App;
