import styled from "styled-components";
import { css } from "styled-components";

export const AddProductCont = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  height: 90vh;
  width: 80vw;
`;

export const AddProductContent = styled.div`
  padding: 30px;

  form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
  }
`;

export const ContInput = styled.div`
  width: 60%;
`;

export const Text = styled.div`
font-size: 12px;
width: 100%;

`;
