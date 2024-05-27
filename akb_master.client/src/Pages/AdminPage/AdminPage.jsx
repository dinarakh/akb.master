import React, { Component } from "react";
import axios from "axios";

// Styles Admin Page
import {
  AdminPageStyled,
  Cont,
  MenuCont,
  MenuButtonCont,
  MenuButton,
  ProductCont,
} from "./Admin.styled";

// Modal
import Modal from "../../Components/Popup/Modal";
import AddProduct from "../../Components/Popup/AddProductModal/AddProduct";

// SVGs
const ProductSvg = (
  <svg
    width="25px"
    viewBox="0 0 512 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>product</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="icon" fill="#8E909C" transform="translate(64.000000, 34.346667)">
        <path
          d="M192,7.10542736e-15 L384,110.851252 L384,332.553755 L192,443.405007 L1.42108547e-14,332.553755 L1.42108547e-14,110.851252 L192,7.10542736e-15 Z M127.999,206.918 L128,357.189 L170.666667,381.824 L170.666667,231.552 L127.999,206.918 Z M42.6666667,157.653333 L42.6666667,307.920144 L85.333,332.555 L85.333,182.286 L42.6666667,157.653333 Z M275.991,97.759 L150.413,170.595 L192,194.605531 L317.866667,121.936377 L275.991,97.759 Z M192,49.267223 L66.1333333,121.936377 L107.795,145.989 L233.374,73.154 L192,49.267223 Z"
          id="Combined-Shape"
        ></path>
      </g>
    </g>
  </svg>
);

const NumberSvg = (
  <svg
    width="20px"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>phone</title>
    <desc>Created with Sketch Beta.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="Icon-Set-Filled"
        transform="translate(-258.000000, -309.000000)"
        fill="#8E909C"
      >
        <path
          d="M289.073,313.433 L286.195,310.563 C285.401,309.77 284.112,309.77 283.317,310.563 L279,316.303 C278.341,317.274 278.206,318.38 279,319.173 L280.762,320.93 C279.456,322.68 277.888,324.588 276.123,326.348 C274.127,328.338 271.907,330.147 269.911,331.633 L268.208,329.936 C267.414,329.143 266.305,329.277 265.33,329.936 L259.574,334.241 C258.609,334.906 258.779,336.318 259.574,337.111 L262.452,339.98 C264.042,341.566 266.109,341.058 268.208,339.98 C268.208,339.98 274.561,336.424 280,331 C285.116,325.898 289.073,319.173 289.073,319.173 C289.898,316.91 290.663,315.018 289.073,313.433"
          id="phone"
        ></path>
      </g>
    </g>
  </svg>
);

class AdminPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLargeDesktop: false,
  //     isDesktop: false,
  //     isNotebook: false,
  //     isTablet: false,
  //     isMobile: false,
  //     modalActive: false,
  //   };
  // }

  // componentDidMount() {
  //   this.updateMediaQueries();
  //   window.addEventListener("resize", this.updateMediaQueries);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateMediaQueries);
  // }

  // updateMediaQueries = () => {
  //   const isLargeDesktop = window.matchMedia("(min-width: 1920px)").matches;
  //   const isDesktop = window.matchMedia(
  //     "(min-width: 1280px) and (max-width: 1919px)"
  //   ).matches;
  //   const isNotebook = window.matchMedia(
  //     "(min-width: 960px) and (max-width: 1279px)"
  //   ).matches;
  //   const isTablet = window.matchMedia(
  //     "(min-width: 600px) and (max-width: 959px)"
  //   ).matches;
  //   const isMobile = window.matchMedia("(max-width: 599px)").matches;

  //   this.setState({
  //     isLargeDesktop,
  //     isDesktop,
  //     isNotebook,
  //     isTablet,
  //     isMobile,
  //   });
  // };

  // setModalActive = (modalActive) => {
  //   this.setState({ modalActive });
  // };

  // post image
  state = {
    selectedFile: null,
    uploadStatus: "",
  };

  handleFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { selectedFile } = this.state;

    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "https://localhost:7271/images/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        this.setState({ uploadStatus: "Image uploaded successfully!" });
      } else {
        this.setState({ uploadStatus: "Error uploading image." });
      }
    } catch (error) {
      this.setState({ uploadStatus: "Error uploading image." });
      console.error("Error uploading image:", /*error*/ this.state);
    }
  };

  render() {
    // const { isLargeDesktop, isDesktop, isNotebook, isTablet, isMobile, modalActive } = this.state;
    const { uploadStatus } = this.state;
    return (
      <AdminPageStyled>
        <Cont>
          <MenuCont>
            <MenuButtonCont>
              {ProductSvg}
              <MenuButton>Product</MenuButton>
            </MenuButtonCont>
            <MenuButtonCont>
              {NumberSvg}
              <MenuButton>Number</MenuButton>
            </MenuButtonCont>
          </MenuCont>
          <ProductCont>
            {/* <MenuButton onClick={() => this.setModalActive(true)}>
              добавить
            </MenuButton>
            <Modal active={modalActive} setActive={this.setModalActive}>
              <AddProduct />
            </Modal> */}
            <div>
        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleFileChange} />
          <button type="submit">Upload</button>
        </form>
        {uploadStatus && <p>{uploadStatus}</p>}
      </div>
          </ProductCont>
        </Cont>
      </AdminPageStyled>
    );
  }
}

export default AdminPage;
