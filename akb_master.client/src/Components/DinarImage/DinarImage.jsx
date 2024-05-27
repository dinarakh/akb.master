import React, { useEffect, useState } from "react";
import axios from "axios";
const imageUrl = "https://i.imgur.com/fHyEMsl.jpg";

const DinarImage = () => {
  const [testSrc, setTestSrc] = useState();
  const fetchImage = async () => {
    console.log("qweqeqwe");
    const res = await axios.get("https://localhost:7271/Images");
    const imageBytes = res.data[0].byteImage;
    const testSrc2 = `data:image/jpg;base64,${imageBytes}`;
    setTestSrc (testSrc2);
    console.log("asdasd");
  };

  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <>
    <img src={testSrc} />
    {/* <img src={img} /> */}
    </>
  );
};
export default DinarImage;
