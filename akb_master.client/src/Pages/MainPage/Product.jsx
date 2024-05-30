import React, { useState, useEffect } from "react";
import axios from "axios";

// Styles Product
import {
  CatalogCont,
  FilterCont,
  SortCont,
  Sort,
  ProductCont,
  ProductBox,
  ProductName,
  ProductDescriptionText,
  ProductCostCont,
  ProductCost,
  ProductCostNonT,
} from "./Product.styed";

// Global styles
import { GlobalStyled } from "../Global.styled";

//npm
import { useMediaQuery } from "@mui/material";

//page
import ProductCatalog from "./ProductCatalog";


class Product extends React.Component {
  state = {
    images: [],
    isLargeDesktop: false,
    isDesktop: false,
    isNotebook: false,
    isTablet: false,
    isMobile: false,
  };


  componentDidMount() {
    this.fetchImages();
    this.updateMediaQueries();
    window.addEventListener("resize", this.updateMediaQueries);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateMediaQueries);
  }

  fetchImages = async () => {
    try {
      const res = await axios.get("https://localhost:7271/ControllerGetAllTables");
      const images = res.data.map(image => {
        const blob = new Blob([new Uint8Array(image.byteImage)], { type: "image/jpg" });
        const url = URL.createObjectURL(blob);
        return { id: image.id, url };
      });
      this.setState({ images });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  updateMediaQueries = () => {
    const isLargeDesktop = window.matchMedia("(min-width: 1920px)").matches;
    const isDesktop = window.matchMedia("(min-width: 1280px) and (max-width: 1919px)").matches;
    const isNotebook = window.matchMedia("(min-width: 960px) and (max-width: 1279px)").matches;
    const isTablet = window.matchMedia("(min-width: 600px) and (max-width: 959px)").matches;
    const isMobile = window.matchMedia("(max-width: 599px)").matches;

    this.setState({
      isLargeDesktop,
      isDesktop,
      isNotebook,
      isTablet,
      isMobile,
    });
  };

  render() {
    const { isLargeDesktop, isDesktop, isNotebook, isTablet, isMobile } = this.state;
    const {images} = this.state;

    return (
      <GlobalStyled>
          <CatalogCont Desktop={isDesktop} Notebook={isNotebook} Tablet={isTablet} Mobile={isMobile}>
            <FilterCont>
              <SortCont>
                <Sort>
                  <p>Test</p>
                </Sort>
              </SortCont>
            </FilterCont>
            <ProductCatalog/>
          </CatalogCont>
      </GlobalStyled>
    );
  }
}

export default Product;













            {/* <ProductCont>
              <ProductBox>
                <ProductName>АКБ 6ст-60 Polus Arctic о.п.</ProductName>
                <ProductDescriptionText>Емкость: 60Ач</ProductDescriptionText>
                <ProductDescriptionText>Пусковой ток: 560А</ProductDescriptionText>
                <ProductDescriptionText>Габариты: 242х175х190</ProductDescriptionText>
                <ProductDescriptionText>Полярность: Обратная</ProductDescriptionText>
                <ProductDescriptionText>Гарантия: 1 Год</ProductDescriptionText>
                <ProductCostCont>
                  <ProductCost>
                    <p className="CostText">Цена с обменом</p>
                    <p className="Cost">6500</p>
                  </ProductCost>
                  <ProductCostNonT>
                    <p className="CostText">Цена без обмена</p>
                    <p className="Cost">7500</p>
                  </ProductCostNonT>
                </ProductCostCont>
              </ProductBox>
            </ProductCont> */}