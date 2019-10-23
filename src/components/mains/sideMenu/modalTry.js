import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import * as panelListAction from "../../../store/actions/index";
import { bindActionCreators } from "redux";
import GreyButton from "../../reusable/buttonGrey";
import "./modal.scss";
class ModalTry extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators(panelListAction, dispatch);
    console.log(this.boundActionCreators);
    // {
    //   panelList: Function,
    //   slider: Function
    // }
  }

  state = {
    show: false,
    newAddedList: null
  };

  handleSubmit = e => {
    this.setState({
      newAddedList: e.target.value
    });
  };

  handleDispatch = () => {
    let { dispatch } = this.props;
    let action = panelListAction.panelList(this.state.newAddedList);
    dispatch(action);
    this.setState({ show: false });
  };

  render() {
    return (
      <React.Fragment>
        <>
          <GreyButton
            backgroundColor="#4a515c"
            color="#8a8e91"
            font="NEW LIST +"
            dispatch={() => this.setState({ show: true })}
          />
          <Modal
            show={this.state.show}
            onHide={() => this.setState({ show: false })}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            className="my-modal"
          >
            <Modal.Header closeButton className="header">
              <Modal.Title
                id="example-custom-modal-styling-title"
                className="title"
              >
                Add New List
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    placeholder="list name"
                    onChange={this.handleSubmit}
                    style={{ backgroundColor: "#ededed" }}
                  />
                </Col>
                <Col xs={2}>
                  <Button variant="danger" onClick={this.handleDispatch}>
                    Go
                  </Button>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        </>
      </React.Fragment>
    );
  }
}

export default connect()(ModalTry);
