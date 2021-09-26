import React, {Component} from 'react';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null
    }
  };

  handleChange = (event) => {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <li className="TextInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Text</div>
            <p className="card-text">
              <div className="input btn-block">
                <input type="text" placeholder="Write here!" className="textInput" onChange={this.handleChange}/>
              </div>
              <div className="output">
                <label for="textOutput">State: </label>
                <span name="textOutput">{this.state.date}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
}

export default TextInput;
