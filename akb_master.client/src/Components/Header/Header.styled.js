import styled from "styled-components";
import css from "styled-components";

export const HeaderStyle = styled.div`
  *{
    margin: 0;
    padding: 0;
  }
   //del
    background-color: white;

  .test{
    display: flex;
  }
  .testlink{
    padding: 0 5px;
  }
  

`;
export const NavbarTop = styled.div`
background-color: #f2f5f7;

display: grid;
grid-template-columns: repeat(2, 1fr);

p{
  font-size: 14px;
}

/* rev */
padding: 7px 15%;
`;

export const ContContact = styled.div`
display: flex;
justify-self: end;
.Num{
  padding-left: 20px;
}
`;

export const NavbarBottom = styled.div`
/* rev */
padding: 0% 15%;
display: grid;
  grid-template-columns: 0.8fr 1fr 0.8fr;
  justify-items: center;
  align-items: center;
  .logo{
    justify-self: start;
  }
`;
export const ContLink = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
`;

export const ContMedia = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 0.1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-area: 10px;
  align-items: center;


  background-color: none;
  svg{
    height: 25px;
    width: 25px;

  }
  /* .Number{
    font-size: 24px;
  }
  .Adress{
    grid-area: 2 / 1 / 3 / 6;
  } */
`;
