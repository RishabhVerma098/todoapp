import React, { Component } from "react";
import "./card.scss";
class CardComponent extends Component {
  state = {};
  render() {
    return (
      <div className="card-container">
        <div className="card-row-title">
          <span className="title">Title</span>
          <div className="tick" onClick={this.props.changeSize}>
            <i class="fas fa-check"></i>
          </div>
        </div>
        <hr style={{ marginTop: "2px" }}></hr>
        <div className="card-row-description">
          <p className="description">
            Occaecat culpa officia et cupidatat. Cillum veniam ut tempor
            ullamco...
          </p>
        </div>
        <div className="fotter-controls">
          <div className="labrem">
            <div className="label">
              <i class="fas fa-tags" style={{ color: "#8DA2DD" }}></i>
            </div>
            <div className="reminder">
              <i class="fas fa-bell" style={{ color: "#8DDDA5" }}></i>
            </div>
          </div>
          <div className="expandCard">
            <i class="fas fa-expand" style={{ color: "#8D8686" }}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default CardComponent;
