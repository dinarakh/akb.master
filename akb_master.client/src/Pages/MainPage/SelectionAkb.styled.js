import styled from "styled-components";
import {css} from 'styled-components'

export const SelectionAkb = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 0.4fr;
  background-color: rgb(19,112,170);
  padding: 15px;
  margin: 10px 12%;
  border-radius: 3px;
`;

export const SelectionAkbContText = styled.div`
  font-weight: bold;
`;
export const ContCall = styled.div`
display: grid;
grid-template-columns:  1fr 5fr;
margin: 0 10px;
padding: 3px 0;

input{
  all:unset;
  background-color: white;
  padding-left: 10px;
  width: 150px;
  border-radius: 3px 0 0 3px;
}
`;

export const ButtonCall = styled.button`
all:unset;
cursor: pointer;
background-color: white;
text-align: center;
border-radius: 0 3px 3px 0;
color: white;
background-color: black;

&:hover{
  background-color: grey;
}
`;