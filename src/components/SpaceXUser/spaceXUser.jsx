import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import CardLauncher from "./../Shared/Card";
import { actionCreators } from "../../store/actions/actionCreator";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    userdata: state.userSpaceXdata,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class SpaceXUserList extends Component {
  componentDidMount() {
    let filterdata = { landing: "", launch: "", year: "" };
    this.props.getUserListAction(filterdata);
  }

  render() {
    let userValue = this.props.userdata.userList;
    let lanchList = null;
    if (userValue.length > 0) {
      lanchList = userValue.map((ele, index) => {
        return (
          <Col xs={12} md={6} lg={3}>
            <CardLauncher key={index} userData={ele}></CardLauncher>
          </Col>
        );
      });
    }
    return (
      <>
        <Container>
          <Row>{lanchList}</Row>
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceXUserList);
