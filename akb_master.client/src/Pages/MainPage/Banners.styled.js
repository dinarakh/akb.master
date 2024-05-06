import styled from "styled-components";
import {css} from 'styled-components'
import ImageBanner1 from "../../Images/BannerImage/ImageBanner11.jpg"
import ImageBanner2 from "../../Images/BannerImage/ImageBanner22.jpg"
import ImageBanner3 from "../../Images/BannerImage/ImageBanner3.jpg";
import ImageBanner4 from "../../Images/BannerImage/ImageBanner4.jpg";


export const BannersCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 3px;
  grid-row-gap: 3px; 
  height: 400px;
  padding: 0px 12%;
  color: white;
`;

export const FirstBannerText = styled.p`
  font-size: 16px;
  padding: 15px 18px;
`;

export const SecondBannerText = styled.p`
  margin: 0 86% 0 14%;
  font-size: 28px;
  .sum{
    display: inline;
    font-size: 48px;
    font-weight: bold;
    padding: 0 4px;
}
`;

export const ThirdBannerText = styled.p`
  font-size: 13px;
  margin: 0 35% 0 14% ;
`;

export const BannerFirst = styled.div`
display: grid;
grid-template-rows: 0.6fr 1fr 0.4fr;
background-image: url(${ImageBanner1});
background-size: 100% 100%;
box-shadow: inset 0px 0px 200px 40px rgba(0,0,0,8);
border-radius: 4px 4px 4px 4px;

`;

export const BannerSecond = styled.div`
font-size: 30px;
background-image: url(${ImageBanner2});
background-size: 100% 100%;
box-shadow: inset 0px 0px 200px 40px rgba(0,0,0,8);
border-radius: 4px 4px 4px 4px;
`;

export const BannerThird = styled.div`
font-size: 30px;
background-image: url(${ImageBanner3});
background-size: 100% 100%;
box-shadow: inset 0px 0px 200px 40px rgba(0,0,0,8);
border-radius: 4px 4px 4px 4px;
`;

export const BannerFourth = styled.div`
font-size: 30px;
background-image: url(${ImageBanner4});
background-size: 100% 100%;
box-shadow: inset 0px 0px 200px 40px rgba(0,0,0,8);
border-radius: 4px 4px 4px 4px;
`;