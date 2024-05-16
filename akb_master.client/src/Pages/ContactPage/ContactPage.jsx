import React, { useState } from "react";

// NPM
import { useMediaQuery } from "@mui/material";

//Styles Main
import {
  ContactPageStyled,
  TitlePageContact,
  ContactInformationCont,
  NumberCont,
  ScheduleCont,
  MailCont,
  MessengerCont,
  Cont,
  Paragraph,
  Text,
  YandexMapStyled,
} from "./ContactStyled";

const TelegramSvg = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 24 24"
    height="2em"
    width="2em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l.013-.007.87 2.87c.112.311.266.367.453.341.188-.025.287-.126.41-.244l1.188-1.148 2.55 1.888c.466.257.801.124.917-.432l1.657-7.822c.183-.728-.137-1.02-.702-.788l-9.733 3.76c-.664.266-.66.638-.12.803l2.497.78z"></path>
    </g>
  </svg>
);

const WhatsAppSvg = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 448 512"
    height="2em"
    width="2em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
  </svg>
);

const VKSvg = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    version="1.1"
    viewBox="0 0 16 16"
    height="2em"
    width="2em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM12.959 11.2l-1.463 0.022c0 0-0.316 0.063-0.728-0.222-0.547-0.375-1.063-1.353-1.466-1.225-0.406 0.128-0.394 1.006-0.394 1.006s0.003 0.188-0.091 0.287c-0.1 0.109-0.3 0.131-0.3 0.131h-0.653c0 0-1.444 0.088-2.716-1.238-1.388-1.444-2.612-4.309-2.612-4.309s-0.072-0.188 0.006-0.278c0.087-0.103 0.322-0.109 0.322-0.109l1.566-0.009c0 0 0.147 0.025 0.253 0.103 0.088 0.063 0.134 0.184 0.134 0.184s0.253 0.641 0.588 1.219c0.653 1.128 0.959 1.375 1.181 1.256 0.322-0.175 0.225-1.597 0.225-1.597s0.006-0.516-0.162-0.744c-0.131-0.178-0.378-0.231-0.484-0.244-0.088-0.013 0.056-0.216 0.244-0.309 0.281-0.138 0.778-0.147 1.366-0.141 0.456 0.003 0.591 0.034 0.769 0.075 0.541 0.131 0.356 0.634 0.356 1.841 0 0.388-0.069 0.931 0.209 1.109 0.119 0.078 0.412 0.012 1.147-1.234 0.347-0.591 0.609-1.284 0.609-1.284s0.056-0.125 0.144-0.178c0.091-0.053 0.213-0.037 0.213-0.037l1.647-0.009c0 0 0.494-0.059 0.575 0.166 0.084 0.234-0.184 0.781-0.856 1.678-1.103 1.472-1.228 1.334-0.309 2.184 0.875 0.813 1.056 1.209 1.088 1.259 0.356 0.6-0.406 0.647-0.406 0.647z"></path>
  </svg>
);

const Contact = () => {
  const isLargeDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const isDesktop = useMediaQuery((theme) =>
    theme.breakpoints.between("lg", "xl")
  );
  const isNotebook = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <ContactPageStyled>
      <TitlePageContact>Контактная информация</TitlePageContact>

      <ContactInformationCont>
        <NumberCont>
          <Paragraph>Контактный телефон:</Paragraph>
          <Text> +7 (906)-100-84-42</Text>
        </NumberCont>

        <ScheduleCont>
          <Paragraph>График работы:</Paragraph>
          <Text>Пн-Пт 9:00-20:00</Text>
          <Text>Сб-Вс 10:00-18:00</Text>
        </ScheduleCont>

        <MailCont>
          <Paragraph>Почта для коммерческих предложений:</Paragraph>
          <Text>Akbmaster102@yandex.ru</Text>
        </MailCont>

        <MessengerCont>
          <Cont>
            <Paragraph>Telegram</Paragraph>
            <a href="https://t.me/Akb_Master102" target="_blank">{TelegramSvg}</a>
          </Cont>
          <Cont>
            <Paragraph>WhatsApp</Paragraph>
            <a href="https://wa.me/79061008442" target="_blank">{WhatsAppSvg}</a>      
          </Cont>
          <Cont>
            <Paragraph>VK</Paragraph>
            <a href="https://vk.com/akbufa102" target="_blank">{VKSvg}</a>  
          </Cont>
        </MessengerCont>
      </ContactInformationCont>
      
      <YandexMapStyled>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=55.999213%2C54.745727&mode=whatshere&whatshere%5Bpoint%5D=55.999582%2C54.745802&whatshere%5Bzoom%5D=17&z=18"
          allowfullscreen="true"
        ></iframe>
      </YandexMapStyled>

    </ContactPageStyled>
  );
};
export default Contact;
// Desktop={isDesktop} Notebook={isNotebook} Tablet={isTablet} Mobile={isMobile}
