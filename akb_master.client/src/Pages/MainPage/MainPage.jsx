import React, { useState } from "react";
import axios from "axios";

//Styles Main
import {
  MainPageStyled,
  СarouselBrandsCont,   
} from "./Main.styled";

// Styles Selection
import {
  SelectionAkb, SelectionAkbContText, ContCall, ButtonCall
} from "./SelectionAkb.styled";

//Styles Banners
import {
  BannersCont, BannerFirst, BannerSecond, BannerThird, BannerFourth,
  FirstBannerText, SecondBannerText, ThirdBannerText
} from "./Banners.styled";

// Styles Product
import {
   CatalogCont, 
   FilterCont, SortCont, Sort,
   ProductCont, ProductBox, ProductName, ProductDescriptionText, ProductCostCont, ProductCost, ProductCostNonT,
 } from "./Product.styed";

// Global stlyes
import { GlobalStyled } from "../Global.styled";

//npm 
import ReactInputMask from "react-input-mask";
import { useMediaQuery } from "@mui/material";

//Copmonents
import Carousel from "../../Components/Carousel/Carousel";

//Image
import TestImage from "../../Images/CarouselImage/Aurora.jpg";


const CallSvg = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M426.666 330.667a250.385 250.385 0 0 1-75.729-11.729c-7.469-2.136-16-1.073-21.332 5.333l-46.939 46.928c-60.802-30.928-109.864-80-140.802-140.803l46.939-46.927c5.332-5.333 7.462-13.864 5.332-21.333-8.537-24.531-12.802-50.136-12.802-76.803C181.333 73.604 171.734 64 160 64H85.333C73.599 64 64 73.604 64 85.333 64 285.864 226.136 448 426.666 448c11.73 0 21.334-9.604 21.334-21.333V352c0-11.729-9.604-21.333-21.334-21.333z"></path>
  </svg>
);



class MainPage extends React.Component{
  state = {
    test: []
  }
  adaptiv = {
    isLargeDesktop: false,
    isDesktop: false,
    isNotebook: false,
    isTablet: false,
    isMobile: false,
  }
  componentDidMount(){
    axios.get('https://localhost:7271/Descriptions')
      .then(res => {
        const test = res.data;
        console.log(test);
        this.setState({ test });
      })
    this.updateMediaQueries();
    window.addEventListener("resize", this.updateMediaQueries);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateMediaQueries);
  }

  updateMediaQueries = () => {
    const isLargeDesktop = window.matchMedia("(min-width: 1920px)").matches;
    const isDesktop = window.matchMedia("(min-width: 1280px) and (max-width: 1919px)").matches;
    const isNotebook = window.matchMedia("(min-width: 960px) and (max-width: 1279px)").matches;
    const isTablet = window.matchMedia("(min-width: 600px) and (max-width: 959px)").matches;
    const isMobile = window.matchMedia("(max-width: 599px)").matches;

    this.setState({
      isLargeDesktop,isDesktop,isNotebook,isTablet,isMobile,
    });
  };
    render(){
      const { isLargeDesktop, isDesktop, isNotebook, isTablet, isMobile } = this.adaptiv;
      return (
        <GlobalStyled >
          <MainPageStyled>
            {/* Сarousel */}
            <СarouselBrandsCont>
              {/* не сделаено */}
              <Carousel/>
            </СarouselBrandsCont>
    
            <SelectionAkb>
              <SelectionAkbContText>
                <p>Подбор аккумулятора специалистом</p>
                <p>В будни с 9:00 до 19:00, выходные с 10:00 до 18:00</p>
              </SelectionAkbContText>
              <ContCall>
                <ReactInputMask mask="+7(999) 999-9999">
                {() => <input type="tel" id="phone" placeholder="+7(___) ___-____" />}
                </ReactInputMask>
                <ButtonCall>{CallSvg} Оставить номер</ButtonCall>
              </ContCall>
              <p>И мы перезвоним в течении дня</p>
            </SelectionAkb>
    
            <BannersCont>
              <BannerFirst>
                <FirstBannerText>
                  При сдаче АКБ (от 60Ah) скидка
                </FirstBannerText>
                <SecondBannerText>
                  от<p className="sum">1000</p>₽ 
                </SecondBannerText>
                <ThirdBannerText>

                </ThirdBannerText>
              </BannerFirst>
    
              <BannerSecond>
              <FirstBannerText>
                Доставка АКБ пр городу 24/7
              </FirstBannerText>
              <SecondBannerText>
                за<p className="sum">0</p>₽ 
              </SecondBannerText>
              <ThirdBannerText>
                Доставим и установим по Уфе аккумулятор за 60 секунд
              </ThirdBannerText>
              </BannerSecond>
    
              <BannerThird>
              <FirstBannerText>
                Диагностика состояния АКБ
              </FirstBannerText>
              <SecondBannerText>
                за<p className="sum">0</p>₽ 
              </SecondBannerText>
              <ThirdBannerText>
                Проверяем основные показатели аккумулятора
              </ThirdBannerText>
              </BannerThird>
            
              <BannerFourth>
              <FirstBannerText>
                Обслуживание аккумулятора
              </FirstBannerText>
              <SecondBannerText>
                от<p className="sum">200</p>₽ 
              </SecondBannerText>
              <ThirdBannerText>
                Проведем полное обслуживание аккумулятора
              </ThirdBannerText>
              </BannerFourth>
    
            </BannersCont>
    
            <CatalogCont Desktop={isDesktop} Notebook={isNotebook} Tablet={isTablet} Mobile={isMobile}>
              <FilterCont>
                <SortCont>
                  <Sort>
                    <p>Test</p>
                    
                  </Sort>
                </SortCont>
              </FilterCont>



              <ProductCont>
                <ProductBox>
                  <img src={TestImage}/>
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

                <ProductBox>
                  <img src={TestImage}/>
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

                <ProductBox>
                  <img src={TestImage}/>
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

                <ProductBox>
                  <img src={TestImage}/>
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

                <ProductBox>
                  <img src={TestImage}/>
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
                <ProductBox>
                  <img src={TestImage}/>
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
                <ProductBox>
                  <img src={TestImage}/>
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
                <ProductBox>
                  <img src={TestImage}/>
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
                

                
              </ProductCont>
              
    
            </CatalogCont>
          </MainPageStyled>
        </GlobalStyled>
      );
    }
};

export default MainPage;
