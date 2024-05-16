import styled from "styled-components";
import { css } from "styled-components";

export const ContactPageStyled = styled.div`
  * {
    margin: 0;
  }
  margin: 0 12%;
  /* background-color: rgb(230, 230, 230); */
`;

export const TitlePageContact = styled.div`
  font-size: 26px;
  margin: 40px 0 20px;
`;

export const YandexMapStyled = styled.div`
  * {
    border: none;
  }
  position: relative;
  overflow: hidden;
  margin: 10px 0 25px;
  iframe {
    position: relative;
    width: 100%;
    height: 500px;
  }
`;


export const ContactInformationCont = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const NumberCont = styled.div`
  display:grid;
  justify-items: center;
  width: 100%;
  grid-area: 1 / 1 / 2 / 2;
`;

export const ScheduleCont = styled.div`
  display:grid;
  justify-items: center;
  width: 100%;
  grid-area: 1 / 2 / 2 / 3;
  border: 1px solid rgb(150,150,150);
  border-top: 0;
  border-bottom: 0;
`;

export const MailCont = styled.div`
  display:grid;
  justify-items: center;
  width: 100%;
  grid-area: 1 / 3 / 2 / 4;
`;

export const MessengerCont = styled.div`
  display:grid;
  height: 70%;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  width: 100%;
  grid-area: 2 / 1 / 3 / 4;
`;

export const Cont = styled.div`
  display:grid;
  justify-items: center;
  a{
  text-decoration: none;
  color: black;
  }
`; 

export const Paragraph = styled.p`
  font-size: 16px;
  color: rgb(80,80,80);
  padding: 10px 0 10px;
`;

export const Text = styled.p`
  font-size: 22px;
`;
