import React, {Component} from 'react';

class DateInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null
    }
  };

  handleChange = (event) => {
    this.setState({date: event.target.value})
  }

  render() {
    return(
      <li className="cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Date</div>
            <p className="card-text">
              <div className="input btn-block">
                <input type="date" className="textInput" onChange={this.handleChange}/>
              </div>
              <div className="output">
                <label for="dateOutput">State: {this.state.date}</label>
                <span name="dateOutput"></span>
              </div>
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default DateInput;
