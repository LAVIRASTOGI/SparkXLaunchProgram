import "./filterUser.scss";

import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import ButtonFilter from "./../Shared/button";
import { actionCreators } from "../../store/actions/actionCreator";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

// function mapStateToProps(state) {
//     return {
//       data: state.userSpaceXdata.isLoading,
//     };
//   }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
  }
class FilterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        year: "",
        launch: "",
        landing: "",
      },
      year: [
        { name: "2006", isActive: false },
        { name: "2007", isActive: false },
        { name: "2008", isActive: false },
        { name: "2009", isActive: false },
        { name: "2010", isActive: false },
        { name: "2011", isActive: false },
        { name: "2012", isActive: false },
        { name: "2013", isActive: false },
        { name: "2014", isActive: false },
        { name: "2015", isActive: false },
        { name: "2016", isActive: false },
        { name: "2017", isActive: false },
        { name: "2018", isActive: false },
        { name: "2019", isActive: false },
        { name: "2020", isActive: false },
      ],
      launch: [
        { name: "true", isActive: false },
        { name: "false", isActive: false },
      ],
      landing: [
        { name: "true", isActive: false },
        { name: "false", isActive: false },
      ],
    };
  }

  clickHandler = (event) => {
    console.log("1" + this.state.filters);
    var filterdata = {};
    var val = event.target.textContent;
    var parentValue =
      event.target.parentElement.parentElement.parentElement.className;
    switch (parentValue) {
      case "LaunchYear": {
        let launchYear = this.state.year.map((ele) => {
          if (ele.name == val) {
            return {
              name: ele.name,
              isActive: true,
            };
          }
          return {
            name: ele.name,
            isActive: false,
          };
        });
        filterdata = { ...this.state.filters, year: val };
        this.setState((prevState) => ({
          ...prevState,
          filters: filterdata,
          year: launchYear,
        }));

        break;
      }

      case "LaunchSuccess": {
        let launchNew = this.state.launch.map((ele) => {
          if (ele.name == val) {
            return {
              name: ele.name,
              isActive: true,
            };
          }
          return {
            name: ele.name,
            isActive: false,
          };
        });
        filterdata = { ...this.state.filters, launch: val };
        this.setState((prevState) => ({
          ...prevState,
          filters: filterdata,
          launch: launchNew,
        }));

        break;
      }

      case "Land": {
        let landNew = this.state.landing.map((ele) => {
          if (ele.name == val) {
            return {
              name: ele.name,
              isActive: true,
            };
          }
          return {
            name: ele.name,
            isActive: false,
          };
        });
        filterdata = { ...this.state.filters, landing: val };
        this.setState((prevState) => ({
          ...prevState,
          filters: filterdata,
          landing: landNew,
        }));

        break;
      }

      default: {
      }
    }
    console.log(filterdata);
    this.props.getUserListAction(filterdata);
  };
  render() {


    return (
      <div className="filter">
        <h5 style={{ marginLeft: "3%", paddingTop: "2%" }}>Filters</h5>
        <Container>
          <div className="LaunchYear">
            <span className="filterHeading">Launch Year</span>
            <Btnfnc Btndata={this.state.year} clickHandlerBtn={this.clickHandler}></Btnfnc>
          </div>
          <div className="LaunchSuccess">
            <span className="filterHeading">Successful Launch</span>
            <Btnfnc Btndata={this.state.launch} clickHandlerBtn={this.clickHandler}></Btnfnc>
          </div>
          <div className="Land">
            <span className="filterHeading">Successful Landing</span>
            <Btnfnc  Btndata={this.state.landing} clickHandlerBtn={this.clickHandler}></Btnfnc>
          </div>
        </Container>
      </div>
    );
  }
}
function Btnfnc(props){
  return(
    <Row>
    {props.Btndata.map((ele, index) => {
      return (
        <Col xs={6} md={6}>
          <ButtonFilter
            key={index}
            clickbutton={props.clickHandlerBtn}
            activeValue={ele.isActive}
          >
            {ele.name}
          </ButtonFilter>
        </Col>
      );
    })}
  </Row>

  )
}
export default connect(null, mapDispatchToProps)(FilterUser);
