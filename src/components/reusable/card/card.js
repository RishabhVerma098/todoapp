import React, { Component } from "react";
import "./card.scss";
class CardComponent extends Component {
  state = {};
  render() {
    return (
      <div className="card-container">
        <div className="card-row-title">
          <input className="title" type="text" placeholder="Title"></input>
          <div className="tick" onClick={this.props.changeSize}>
            <i class="fas fa-check"></i>
          </div>
        </div>
        <hr style={{ marginTop: "2px" }}></hr>
        <div className="card-row-description">
          <textarea
            rows="4"
            cols="50"
            className="description"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="fotter-controls">
          <div className="labrem">
            <div className="label">
              <i class="fas fa-tags"></i>
            </div>
            <div className="reminder">
              <i class="fas fa-bell"></i>
            </div>
          </div>
          <div className="expandCard">
            <i class="fas fa-expand"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default CardComponent;
