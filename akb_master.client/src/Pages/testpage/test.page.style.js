import styled from "styled-components";
import {css} from 'styled-components'


export const MainPageStyled = styled.div`
  background-color: bisque;

  /* Decktop 1920 */
  ${(props) =>
    props.Desktop &&
    css`
     background-color: green;
    `}
  /* Notebook 1280*/
${(props) =>
    props.Notebook &&
    css`
    background-color: red;
    `}
/* Tablet 960*/
${(props) =>
    props.Tablet &&
    css`
    background-color: blue;
    `}
/* Mobile 600*/
${(props) =>
    props.Mobile &&
    css`
    background-color: yellow;
    `}
`;
