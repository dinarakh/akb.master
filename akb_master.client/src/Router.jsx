import { Route, Routes } from 'react-router-dom';
import React from 'react';
//Pages
import Main from "./Pages/MainPage/MainPage";
import Privacy from './Pages/PrivacyPage/Privacy';
import Contact from './Pages/ContactPage/ContactPage';
import Admin from './Pages/AdminPage/AdminPage';
import Test from './Pages/testpage/test';

//Components
import Header from './Components/Header/HeaderComponents';
import Footer from './Components/Footer/Footer';

export const AppRoutes = () => (
  <>
    <Header/>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path='/test' element={<Test/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    <Footer/>
  </>
);
