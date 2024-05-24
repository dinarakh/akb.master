import styled from "styled-components";
import { css } from "styled-components";

export const AdminPageStyled = styled.div`
    * {
    margin: 0;
    padding: 0;
  }
`;

export const Cont = styled.div`
  display: flex;
  width: 100%;
  background-color: rgb(130,130,130);
`;

export const MenuCont = styled.div`

  width: 80px;
  height: 500px;
  background-color: rgb(48,52,61) 
`;

export const MenuButtonCont = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 10px 0;
  justify-items: center;
  cursor: pointer;
`;

export const MenuButton = styled.button`
  all: unset;
  display: block;
  text-align: center;
  height: 25px;
  width: 100%;
  font-size:14px;
  color: rgb(142,144,156);
`;

export const ProductCont = styled.div`
.test{
}
`;


