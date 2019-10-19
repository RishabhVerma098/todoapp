import React, { Component } from "react";

class ResuableRoundedButton extends Component {
  state = {
    hover: false,
    backgroundColor: null,
    cursor: "default"
  };
  roundedbutton = (backgroundColor, fontSize, height, width, paddingTop) => {
    var bgColor =
      this.state.backgroundColor !== null
        ? this.state.backgroundColor
        : backgroundColor;
    return {
      width: width,
      height: height,
      backgroundColor: bgColor,
      borderRadius: "4px",
      fontSize: fontSize,
      display: "flex",
      justifyContent: " center",
      paddingTop: paddingTop,
      cursor: this.state.cursor,
      transition: "background-color 0.5s ease-out",
      color: "#919BA2"
    };
  };

  render() {
    return (
      <div
        className="backbutton"
        style={this.roundedbutton(
          this.props.backgroundColor,
          this.props.fontSize,
          this.props.height,
          this.props.width,
          this.props.paddingTop
        )}
        onMouseEnter={() =>
          this.setState({ backgroundColor: "#DA5655", cursor: "pointer" })
        }
        onMouseLeave={() =>
          this.setState({ backgroundColor: null, cursor: "default" })
        }
      >
        <i className={this.props.icon}></i>
      </div>
    );
  }
}

export default ResuableRoundedButton;
