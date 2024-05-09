import { Route, Routes } from 'react-router-dom';
import React from 'react';
//Pages
import MainPage from "./Pages/MainPage/MainPage";
import Test from './Pages/testpage/test';

//Components

import Header from './Components/Header/HeaderComponents';

export const AppRoutes = () => (
  <>
    <Header/>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path='/test' element={<Test/>}/>

    </Routes>

  </>
);
