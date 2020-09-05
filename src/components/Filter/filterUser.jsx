import "./filterUser.scss";

import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import ButtonFilter from "./../Shared/button";

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

  clickHandler=(event)=> {
     console.log('1'+this.state.filters)
     var filterdata={};
    var val = event.target.textContent;
    var parentValue = event.target.parentElement.parentElement.parentElement.className;
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
        filterdata= {...this.state.filters,  year: val}
        this.setState((prevState) => ({
          ...prevState,
          filters:filterdata,
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
        filterdata= {...this.state.filters,  launch: val }
        this.setState((prevState) => ({
          ...prevState,
          filters:filterdata,
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
        filterdata= {...this.state.filters,  landing: val}
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
    console.log('2'+this.state.filters);
    console.log(filterdata)
  }
  render() {
    var launchYears = (
      <Row>
        {this.state.year.map((ele, index) => {
          return (
            <Col xs={6} md={6}>
              <ButtonFilter
                key={index}
                clickbutton={this.clickHandler}
                activeValue={ele.isActive}
              >
                {ele.name}
              </ButtonFilter>
            </Col>
          );
        })}
      </Row>
    );
    var launchingFilter = (
      <Row>
        {this.state.launch.map((ele, index) => {
          return (
            <Col xs={6} md={6}>
              <ButtonFilter
                key={index}
                clickbutton={this.clickHandler}
                activeValue={ele.isActive}
              >
                {ele.name}
              </ButtonFilter>
            </Col>
          );
        })}
      </Row>
    );
    var landingFilter = (
      <Row>
        {this.state.landing.map((ele, index) => {
          return (
            <Col xs={6} md={6}>
              <ButtonFilter
                clickbutton={this.clickHandler}
                key={index}
                activeValue={ele.isActive}
              >
                {ele.name}
              </ButtonFilter>
            </Col>
          );
        })}
      </Row>
    );

    return (
      <div className="filter">
        <h5 style={{ marginLeft: "3%", paddingTop: "2%" }}>Filters</h5>
        <Container>
          <div className="LaunchYear">
            <span className="filterHeading">Launch Year</span>
            {launchYears}
          </div>
          <div className="LaunchSuccess">
            <span className="filterHeading">Successful Launch</span>
            {launchingFilter}
          </div>
          <div className="Land">
            <span className="filterHeading">Successful Landing</span>
            {landingFilter}
          </div>
        </Container>
      </div>
    );
  }
}

export default FilterUser;
