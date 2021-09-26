import React, {Component} from 'react';

class ButtonInput extends Component {
  constructor (props){
    super(props);
    this.state = {
      number: 0
    }
  }

  handleChange = () => {
    this.setState({number: this.state.number+1});
  }

  render (){
    return (
      <li className="ButtonInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">Button</div>
                <p className="card-text">
                  <div className="input btn-block">
                    <input type="button" value="Click me!" className="btn" onClick = {this.handleChange}/>
                  </div>
                  <div className="output">
                    <label for="buttonOutput">State: {this.state.number}</label>
                    <span name="buttonOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
    )
  }
  
}

export default ButtonInput;
