import React, {Component} from 'react';

class CheckboxInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      checkedBoxes: 0
    };
  }

  handleChange = (event) => {
    let total = this.state.checkedBoxes;

    if(event.target.checked === true){total++;} else{total--;}

    this.setState({checkedBoxes: total});
  }

  render () {
    return (
      <li className="CheckboxInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">Checkbox</div>
                <p className="card-text">
                  <div className="input">
                    <input type="checkbox" id="cb1" name="checkboxInput" value="1" className="checkboxInput" onChange ={this.handleChange}/>
                    <input type="checkbox" id="cb2" name="checkboxInput" value="2" className="checkboxInput" onChange ={this.handleChange}/>
                    <input type="checkbox" id="cb3" name="checkboxInput" value="3" className="checkboxInput" onChange ={this.handleChange}/>
                    <input type="checkbox" id="cb4" name="checkboxInput" value="4" className="checkboxInput" onChange ={this.handleChange}/>
                    <input type="checkbox" id="cb5" name="checkboxInput" value="5" className="checkboxInput" onChange ={this.handleChange}/>
                  </div>
                  <div className="output">
                    <label for="checkboxOutput">Count: {this.state.checkedBoxes}</label>
                    <span name="checkboxOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
    );
  }
}

export default CheckboxInput