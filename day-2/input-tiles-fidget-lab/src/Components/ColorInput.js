import React, {Component} from 'react';

class ColorInput extends Component {
  constructor (props){
    super (props);
    this.state = {
      color: '#000000'
    };
  };

handleChange = (event) => {
  this.setState({color: event.target.value});
}

render () {
  return (
    <li className="ColorInput cards-item">
      <div className="card">
        <div className="card-content">
          <div className="card-title">Color</div>
          <p className="card-text">
            <div className="input btn-block">
              <input type="color" className="colorButton" onChange={this.handleChange}/>
            </div>
            <div className="output" >
              <label for="colorOutput">State: {this.state.color}</label>
              <span name="colorOutput"></span>
            </div>
          </p>
        </div>
      </div>
    </li>
  );
}

}

export default ColorInput