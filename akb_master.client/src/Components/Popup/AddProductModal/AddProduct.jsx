import React, { Children, Component, useState } from "react";
import axios from "axios";

// NPM
import { useMediaQuery } from "@mui/material";

//Styles Main
import { AddProductCont } from "./AddProduct.styled";
import { render } from "@testing-library/react";

class AddProduct extends React.Component{
    state = {
        // id: "",
        country: "",
        polarity: "",
        dimensions: "",
        capacity: "",
        starting_current: "",
        performance: "",
        guarantee: "",
        // isLargeDesktop: false,
        // isDesktop: false,
        // isNotebook: false,
        // isTablet: false,
        // isMobile: false,
      };
    
      handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    
      handleSubmit = async (event) => {
        event.preventDefault();
        const {
          // id,
          country,
          polarity,
          dimensions,
          capacity,
          starting_current,
          performance,
          guarantee,
        } = this.state;
    
        const descriptionData = {
          // id,
          country,
          polarity,
          dimensions,
          capacity,
          starting_current,
          performance,
          guarantee,
        };
    
        try {
          const response = await axios.post(
            "https://localhost:7271/descriptions",
            descriptionData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(response.status);
          if (response.status === 201) {
            console.log("Description created successfully:", response.data);
          } else {
            console.error("Error creating description:", response.statusText);
          }
        } catch (error) {
          console.error("Error creating description:", this.state);
        }
      };
    
      // componentDidMount() {
      //   this.updateMediaQueries();
      //   window.addEventListener("resize", this.updateMediaQueries);
      // }
    
      // componentWillUnmount() {
      //   window.removeEventListener("resize", this.updateMediaQueries);
      // }
    
      // updateMediaQueries = () => {
      //   const isLargeDesktop = window.matchMedia("(min-width: 1920px)").matches;
      //   const isDesktop = window.matchMedia(
      //     "(min-width: 1280px) and (max-width: 1919px)"
      //   ).matches;
      //   const isNotebook = window.matchMedia(
      //     "(min-width: 960px) and (max-width: 1279px)"
      //   ).matches;
      //   const isTablet = window.matchMedia(
      //     "(min-width: 600px) and (max-width: 959px)"
      //   ).matches;
      //   const isMobile = window.matchMedia("(max-width: 599px)").matches;
    
      //   this.setState({
      //     isLargeDesktop,
      //     isDesktop,
      //     isNotebook,
      //     isTablet,
      //     isMobile,
      //   });
      // };
  render() {
    // const { isLargeDesktop, isDesktop, isNotebook, isTablet, isMobile } =
    //   this.state;
    return(
        <AddProductCont>
            <div className="test">
               <form onSubmit={this.handleSubmit}>
              {/*  <input
                  type="text"
                  name="id"
                  value={this.state.id}
                  onChange={this.handleChange}
                  placeholder="Id"
                /> */}
                <input
                  type="text"
                  name="country"
                  value={this.state.country}
                  onChange={this.handleChange}
                  placeholder="Country"
                />
                <input
                  type="text"
                  name="polarity"
                  value={this.state.polarity}
                  onChange={this.handleChange}
                  placeholder="Polarity"
                />
                <input
                  type="text"
                  name="dimensions"
                  value={this.state.dimensions}
                  onChange={this.handleChange}
                  placeholder="Dimensions"
                />
                <input
                  type="text"
                  name="capacity"
                  value={this.state.capacity}
                  onChange={this.handleChange}
                  placeholder="Capacity"
                />
                <input
                  type="text"
                  name="starting_current"
                  value={this.state.starting_current}
                  onChange={this.handleChange}
                  placeholder="Starting Current"
                />
                <input
                  type="text"
                  name="performance"
                  value={this.state.performance}
                  onChange={this.handleChange}
                  placeholder="Performance"
                />
                <input
                  type="text"
                  name="guarantee"
                  value={this.state.guarantee}
                  onChange={this.handleChange}
                  placeholder="Guarantee"
                />
                <button type="submit">Submit</button>
              </form>
            </div>
        </AddProductCont>
    );
  }
}
export default AddProduct;
