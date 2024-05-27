import styled from "styled-components";
import { css } from "styled-components";

export const ModalCont = styled.div`
    * {
    margin: 0;
    padding: 0;
  }

  .modal{
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  transform: scale(1);
  };

  .modal_active{
    transform: scale(0);
  };
`;

export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 20px;
  background-color: black;
`;