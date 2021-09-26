import React from 'react';
import './DataView.css';

function DataView(props) {
  return(
    <div className="view">
      <div className="view-column">
        <div className="borough">
          <h1 className="borough-text">{props.borough}</h1>
        </div>
      </div>
      <div className="view-column">
        <div className="data-view">
          <div className="data-view-column left right">
            <div className="text">
              <h3 className="text-header">Renters</h3>
            </div>
            <div className="text">
              <h2 className="text-data">{props.renterCost}</h2>
              <h3 className="text-label">Annual Housing Cost</h3>
            </div>
            <div className="text">
              <h2 className="text-data">{props.renterIncome}</h2>
              <h3 className="text-label">Annual Income</h3>
            </div>
            <div className="text bottom">
              <h2 className="text-data">{props.renterCostToIncome}</h2>
              <h3 className="text-label">Cost-to-Income Ratio</h3>
            </div>
          </div>
          <div className="data-view-column right">
            <div className="text">
              <h3 className="text-header">Homeowners</h3>
            </div>
            <div className="text">
              <h2 className="text-data">{props.ownerCost}</h2>
              <h3 className="text-label">Annual Housing Cost</h3>
            </div>
            <div className="text">
              <h2 className="text-data">{props.ownerIncome}</h2>
              <h3 className="text-label">Annual Income</h3>
            </div>
            <div className="text bottom">
              <h2 className="text-data">{props.ownerCostToIncome}</h2>
              <h3 className="text-label">Cost-to-Income Ratio</h3>
            </div>
          </div>
        </div>
        <br /><br /><br />
        <div className="analysis-bubble">
          <b>{props.analysis}</b>
        </div>
      </div>
    </div>
  );
}

export default DataView;
