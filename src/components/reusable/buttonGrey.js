import React, { Component } from "react";
import { panelList } from "../../store/actions/index";
class ButtonGrey extends Component {
  state = {
    backgroundColor: this.props.backgroundColor,
    color: this.props.color
  };
  render() {
    return (
      <div
        className="btn btn-primary "
        style={{
          backgroundColor: this.state.backgroundColor,
          border: "none",
          fontSize: "12px",
          color: this.state.color,
          fontWeight: "bold",
          borderRadius: "2px",
          letterSpacing: "1.5px",
          cursor: "pointer"
        }}
        onMouseEnter={() =>
          this.setState({ backgroundColor: "#da5655", color: "#CCD1D4" })
        }
        onMouseLeave={() =>
          this.setState({
            backgroundColor: this.props.backgroundColor,
            color: this.props.color
          })
        }
        onClick={this.props.dispatch}
      >
        {this.props.font}
      </div>
    );
  }
}

export default ButtonGrey;
