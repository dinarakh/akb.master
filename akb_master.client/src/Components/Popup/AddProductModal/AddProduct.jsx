import React, { Children, Component, useState } from "react";
import axios from "axios";

// NPM
import { useMediaQuery } from "@mui/material";

//Styles Main
import {
  AddProductCont,
  AddProductContent,
  ContInput,
  Text,
} from "./AddProduct.styled";
import { render } from "@testing-library/react";

class AddProductForm extends Component {
  state = {
    name: "",
    price: 0,
    price_trade: 0,
    categoryId: 0,
    country: "",
    polarity: "",
    dimensions: "",
    capacity: "",
    starting_current: "",
    performance: "",
    guarantee: "",
    selectedFile: null,
    uploadStatus: "",
  };

  handleChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === "file") {
      this.setState({ selectedFile: files[0] });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      name,
      price,
      price_trade,
      categoryId,
      country,
      polarity,
      dimensions,
      capacity,
      starting_current,
      performance,
      guarantee,
      selectedFile,
    } = this.state;

    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Price", price);
    formData.append("Price_Trade", price_trade);
    formData.append("CategoryId", categoryId);
    formData.append("Description.Country", country);
    formData.append("Description.Polarity", polarity);
    formData.append("Description.Dimensions", dimensions);
    formData.append("Description.Capacity", capacity);
    formData.append("Description.Starting_current", starting_current);
    formData.append("Description.Performance", performance);
    formData.append("Description.Guarantee", guarantee);
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "https://localhost:7271/AddProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.status);
      if (response.status === 201) {
        this.setState({ uploadStatus: "Продукт с описанием успешно создан!" });
      } else {
        this.setState({
          uploadStatus: "Ошибка при создании продукта с описанием.",
        });
      }
    } catch (error) {
      this.setState({
        uploadStatus: "Ошибка при создании продукта с описанием.",
      });
      console.error("Ошибка при создании продукта с описанием:", error);
    }
  };

  render() {
    const { uploadStatus } = this.state;
    return (
      <AddProductCont>
        <AddProductContent>
          <form onSubmit={this.handleSubmit}>
            <ContInput>
              <Text>Название</Text>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Название продукта"
              />
            </ContInput>
            <ContInput>
              <Text>Цена</Text>
              <input
                type="number"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
                placeholder="Цена"
              />
            </ContInput>
            <ContInput>
              <Text>Цена с обменом акумулятора</Text>
              <input
                type="number"
                name="price_trade"
                value={this.state.price_trade}
                onChange={this.handleChange}
                placeholder="Цена для торговли"
              />
            </ContInput>
            <ContInput>
              <Text>Категория</Text>
              <input
                type="number"
                name="categoryId"
                value={this.state.categoryId}
                onChange={this.handleChange}
                placeholder="ID категории"
              />
            </ContInput>
            <ContInput>
              <Text>Страна производителя</Text>
              <input
                type="text"
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
                placeholder="Страна"
              />
            </ContInput>
            <ContInput>
              <Text>Полярность</Text>
              <input
                type="text"
                name="polarity"
                value={this.state.polarity}
                onChange={this.handleChange}
                placeholder="Полярность"
              />
            </ContInput>
            <ContInput>
              <Text>Габариты</Text>
              <input
                type="text"
                name="dimensions"
                value={this.state.dimensions}
                onChange={this.handleChange}
                placeholder="Габариты"
              />
            </ContInput>
            <ContInput>
              <Text>Емкость</Text>
              <input
                type="text"
                name="capacity"
                value={this.state.capacity}
                onChange={this.handleChange}
                placeholder="Емкость"
              />
            </ContInput>
            <ContInput>
              <Text>Пусковый ток</Text>
              <input
                type="text"
                name="starting_current"
                value={this.state.starting_current}
                onChange={this.handleChange}
                placeholder="Пусковой ток"
              />
            </ContInput>
            <ContInput>
              <Text>Производительность</Text>
              <input
                type="text"
                name="performance"
                value={this.state.performance}
                onChange={this.handleChange}
                placeholder="Производительность"
              />
            </ContInput>
            <ContInput>
              <Text>Гарантия</Text>
              <input
                type="text"
                name="guarantee"
                value={this.state.guarantee}
                onChange={this.handleChange}
                placeholder="Гарантия"
              />
            </ContInput>
            <ContInput>
              <Text>Фотка</Text>
              <input
                type="file"
                name="file"
                onChange={this.handleChange}
                placeholder="Загрузить изображение"
              />
            </ContInput>
            <button type="submit">Отправить</button>
          </form>
        </AddProductContent>
      </AddProductCont>
    );
  }
}

export default AddProductForm;
