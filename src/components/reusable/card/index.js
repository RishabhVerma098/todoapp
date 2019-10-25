import React, { Component } from "react";
import CardComponent from "./card";
import "./index.scss";
class Card extends Component {
  state = {
    expandCard: false
  };

  changeSize = () => {
    this.setState({ expandCard: !this.state.expandCard });
  };

  render() {
    return (
      <div className={"cardComponent-" + this.state.expandCard}>
        {this.state.expandCard ? null : (
          <div className="title" onClick={this.changeSize}>
            Title
          </div>
        )}
        {this.state.expandCard ? (
          <CardComponent changeSize={this.changeSize} />
        ) : null}
      </div>
    );
  }
}

export default Card;
