import styled from "styled-components";
import {css} from 'styled-components'


export const MainPageStyled = styled.div`
  margin: 0 15%;
`;

export const СarouselBrandsCont = styled.div`
  /* del */
  /* background-color: blue; */
  height: 100px;
  padding: 10px 0;

`;

export const SelectionAkb = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 0.4fr;
  background-color: rgb(19,112,170);
  padding: 15px;
  margin: 10px 0;
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

export const BannersCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 500px;
//del
  background-color: black;
`;

export const BannerFirst = styled.div`
background-color: beige;
`;

export const BannerSecond = styled.div`
background-color: blue;
`;

export const BannerThird = styled.div`
background-color: bisque;
`;

export const BannerFourth = styled.div`
background-color: blanchedalmond;
`;