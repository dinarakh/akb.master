import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  ProductCont,
  ProductBox,
  ProductName,
  ProductDescriptionText,
  ProductCostCont,
  ProductCost,
  ProductCostNonT,
} from "./ProductCatalog.styled";

const ProductCatalog = () => {
  const [imageSrcArray, setArray] = useState([]);

  const fetchImages = async () => {
    try {
      const res = await axios.get("https://localhost:7271/ControllerGetAllTables");
  

      // // Предполагаем, что каждый элемент массива содержит данные изображения
      // const imageSources = imagesData.map(data => {
      //   // Предполагаем, что у вас есть свойство byteImage
      //   const byteImage = data.products[0].productImage[0].byteImage;
      //   return `data:image/jpg;base64,${byteImage}`;
      // });

      const Data = res.data;
      console.log(Data)

      setArray(Data);
    } catch (error) {
      console.error("Ошибка при загрузке изображений:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <ProductCont>
      {imageSrcArray.map((data) => (
              <ProductBox>
              <img src={`data:image/jpg;base64,${data.products[0].productImage[0].byteImage}`}/>
                <ProductName>{data.products[0].name}</ProductName>
                <ProductDescriptionText>Емкость: {data.capacity}</ProductDescriptionText>
                <ProductDescriptionText>Пусковой {data.starting_current}</ProductDescriptionText>
                <ProductDescriptionText>Габариты: {data.dimensions}</ProductDescriptionText>
                <ProductDescriptionText>Полярность: {data.polarity}</ProductDescriptionText>
                <ProductDescriptionText>Гарантия: {data.guarantee}</ProductDescriptionText>
                <ProductCostCont>
                  <ProductCost>
                    <p className="CostText">Цена с обменом</p>
                    <p className="Cost">{data.products[0].price_Trade}</p>
                  </ProductCost>
                  <ProductCostNonT>
                    <p className="CostText">Цена без обмена</p>
                    <p className="Cost">{data.products[0].price}</p>
                  </ProductCostNonT>
                </ProductCostCont>
              </ProductBox>
      ))}
    </ProductCont>
  );
};

export default ProductCatalog;

