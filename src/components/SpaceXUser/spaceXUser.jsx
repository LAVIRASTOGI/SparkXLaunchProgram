import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import CardLauncher from "./../Shared/Card";
import { actionCreators } from "../../store/actions/actionCreator";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    userdata: state.userSpaceXdata.userList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class SpaceXUserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userlist: [
        {
          image: "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
          "flight_number":1,
      "mission_name":"FalconSat",
          missionId:  ["EE86F74"],
          launch_year: "2006",
          launch_success: true,
          land_success: true,
        },
        {
          image: "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
          flight_number:1,
        mission_name:"FalconSat",
          missionId: ["EE86F74","EE86F74"],
          launch_year: "2006",
          launch_success: false,
          land_success: null,
        },
        {
          image: "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
          flight_number:1,
          mission_name:"FalconSat",
          missionId: [],
          launch_year: "2006",
          launch_success: false,
          land_success: null,
        },
        {
          image: "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
          flight_number:1,
          mission_name:"FalconSat",
          missionId: [],
          launch_year: "2006",
          launch_success: false,
          land_success: null,
        },
        {
          image: "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
          flight_number:1,
          mission_name:"FalconSat",
          missionId: [],
          launch_year: "2006",
          launch_success: false,
          land_success: null,
        },
      ],
    };
  }

  componentDidMount() {
    var filterdata = { landing: "", launch: "", year: "" };
    this.props.getUserListAction(filterdata);
  }

  render() {
    var x=this.state.userlist.map((ele,index)=>{
      return (
        <Col xs={12} md={6} lg={3}>
         <CardLauncher key={index} userData={ele} ></CardLauncher>
        </Col>
       
      )
     
    })
    return (
      <>
      <Container  >
        <Row>
        {x} 
        </Row>
      </Container>
      
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceXUserList);
