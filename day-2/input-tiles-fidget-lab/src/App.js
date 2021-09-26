import React, {Component} from 'react';
import './App.css';
import TextInput from './Components/TextInput';
import DateInput from './Components/DateInput';
import NumberInput from './Components/NumberInput'
import ButtonInput from './Components/ButtonInput'
import RadioInput from './Components/RadioInput'
import ColorInput from './Components/ColorInput'
import CheckboxInput from './Components/CheckboxInput'

class App extends Component  {
  render() {
    return (
      <div className="container">
        <ul className="cards">
          <TextInput />
          <DateInput />
          <NumberInput />
          <ButtonInput />
          <RadioInput />
          <ColorInput />
          <CheckboxInput />
          
          <li className="RangeInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">Range Slider</div>
                <p className="card-text">
                  <div className="input">
                    <input type="range" className="rangeInput" />
                  </div>
                  <div className="output">
                    <label for="rangeOutput">State: </label>
                    <span name="rangeOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
          <li className="SelectInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">Select</div>
                <p className="card-text">
                  <div className="input">
                    <select className="selectInput">
                      <option value="">Choose one:</option>
                      <option value="Dog">Dog</option>
                      <option value="Cat">Cat</option>
                      <option value="Rabbit">Rabbit</option>
                      <option value="Fish">Fish</option>
                      <option value="Horse">Horse</option>
                    </select>
                  </div>
                  <div className="output">
                    <label for="selectOutput">Image: </label>
                    <span name="selectOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
          <li className="UrlInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">URL</div>
                <p className="card-text">
                  <div className="input btn-block">
                    <input type="url" placeholder="Type a URL here!" className="textInput" />
                  </div>
                  <div className="output">
                    <label for="urlOutput">State: </label>
                    <span name="urlOutput"><a href="http://" id="url" target="_blank" rel="noopener noreferrer">&nbsp;</a></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
