import React, { Component } from "react";
import "./index.scss";
class Home extends Component {
  state = {
    expandCard: false
  };
  render() {
    return (
      <div className="container">
        <div className="item">
          <div
            className={"cardComponent-" + this.state.expandCard}
            onClick={() =>
              this.setState({ expandCard: !this.state.expandCard })
            }
          >
            Do Update Repo
            {this.state.expandCard ? <div>body</div> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
