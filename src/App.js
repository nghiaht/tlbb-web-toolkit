import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {calculateKimTinhThach} from './utils';

function TinhThongCalculationForm(props) {
  const {currentTinhThongLevel, targetTinhThongLevel} = props;

  return (<div>
    <label>Cấp tinh thông hiện tại</label>
    <input name="currentTinhThongLevel" type="number" onChange={props.onChange} value={currentTinhThongLevel}/>

    <br />

    <label>Cấp tinh thông mục tiêu</label>
    <input name="targetTinhThongLevel" type="number" onChange={props.onChange} value={targetTinhThongLevel}/>

    {props.children}

  </div>)
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTinhThongLevel: 1,
      targetTinhThongLevel: 100,
      calculatedKimTinhThach: 1580
    }
  }

  // https://reactjs.org/docs/forms.html#handling-multiple-inputs
  handleTinhThongFormInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value <= 0 ? 1: value
    }, function () {
      this.setState({
        calculatedKimTinhThach: calculateKimTinhThach(parseInt(this.state.currentTinhThongLevel), parseInt(this.state.targetTinhThongLevel))
      })
    });


  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <TinhThongCalculationForm onChange={this.handleTinhThongFormInputChange}
                                  currentTinhThongLevel={this.state.currentTinhThongLevel}
                                  targetTinhThongLevel={this.state.targetTinhThongLevel}>

          <br />
          <label>Số lượng Kim Tinh Thạch cần để thăng cấp: {this.state.calculatedKimTinhThach}</label>
        </TinhThongCalculationForm>




      </div>
    );
  }
}

export default App;
