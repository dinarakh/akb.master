import React, { useState } from "react";

// NPM
import { useMediaQuery } from "@mui/material";

//Styles Main
import { MainPageStyled } from "./test.page.style";

import Modal from "../../Components/Popup/Modal";
import AddProduct from "../../Components/Popup/AddProductModal/AddProduct";

const Test = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <MainPageStyled>
      {/* <button onClick={() => setModalActive(true)}>asdasd</button>
      <Modal active={modalActive} setActive={setModalActive}>
        <AddProduct/>
      </Modal> */}
asd
    </MainPageStyled>
  );
};
export default Test; 

// class Test extends React.Component {
//   state = {
//     isLargeDesktop: false,
//     isDesktop: false,
//     isNotebook: false,
//     isTablet: false,
//     isMobile: false,
//   };

//   componentDidMount() {
//     this.updateMediaQueries();
//     window.addEventListener("resize", this.updateMediaQueries);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("resize", this.updateMediaQueries);
//   }

//   updateMediaQueries = () => {
//     const isLargeDesktop = window.matchMedia("(min-width: 1920px)").matches;
//     const isDesktop = window.matchMedia("(min-width: 1280px) and (max-width: 1919px)").matches;
//     const isNotebook = window.matchMedia("(min-width: 960px) and (max-width: 1279px)").matches;
//     const isTablet = window.matchMedia("(min-width: 600px) and (max-width: 959px)").matches;
//     const isMobile = window.matchMedia("(max-width: 599px)").matches;

//     this.setState({
//       isLargeDesktop,isDesktop,isNotebook,isTablet,isMobile,
//     });
//   };
//   render() {
//     const { isLargeDesktop, isDesktop, isNotebook, isTablet, isMobile } = this.state;
//     return (
//       <MainPageStyled
//       Desktop={isDesktop}
//       Notebook={isNotebook}
//       Tablet={isTablet}
//       Mobile={isMobile}>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima commodi
//         doloremque dolor eaque necessitatibus quaerat, minus vero harum
//         architecto fugiat non amet, molestiae itaque eveniet provident dolore
//         voluptate nisi sunt!
//       </MainPageStyled>
//     );
//   }
// }
// export default Test;
// Desktop={isDesktop} Notebook={isNotebook} Tablet={isTablet} Mobile={isMobile}
