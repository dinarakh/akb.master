import styled from "styled-components";
import { css } from "styled-components";

export const CatalogCont = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 1fr;
  padding: 5px 12%;
  border-radius: 3px;
  background-color: rgb(230, 230, 230);
  
`;

export const FilterCont = styled.div`
  //del
  background-color: white;
`;

export const SortCont = styled.div`
    background-color: blue;
`;

export const Sort = styled.div`
  background-color: white;
  margin: 15px 5% 0 5%;
  padding: 10px 7.5%;
  width: 75%;
  border-radius: 3px;
`;



export const ProductCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const ProductBox = styled.div`
  margin: 10px 8px;
  border-radius: 2px;
  background-color: white;
  img {
    width: 100%;
    border-radius: 2px;
    margin: 0 auto;
  }
`;

export const ProductName = styled.p`
  font-size: 18px;
  text-align: center;
  padding: 0 0 10px 0;
`;

export const ProductDescriptionText = styled.p`
  font-size: 11px;
  padding: 0 0 0 10px;
`;

export const ProductCostCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 15px 0 10px 0;
`;

export const ProductCost = styled.div`
  display: grid;
  grid-template-rows: 0.6fr 1fr;
  margin: 0 5%;
  padding: 5px 0;
  background-color: rgb(200,200,200);
  .CostText {
    font-size: 9px;

    text-align: center;
  }
  .Cost {
    font-size: 16px;
    text-align: center;
  }
`;

export const ProductCostNonT = styled.div`
  display: grid;
  grid-template-rows: 0.6fr 1fr;
  margin: 0 5%;
  padding: 5px 0;
  .CostText {
    font-size: 9px;

    text-align: center;
  }
  .Cost {
    font-size: 16px;
    text-align: center;
  }
`;
