import React from "react";
import { FooterS, HeaderS, LayoutS, MainS } from "./styled-components/Layout.styled";
import { Outlet } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  return (
    <LayoutS>
      <HeaderS>
        <Navbar/>
      </HeaderS>

      <MainS>
        <Outlet/>
      </MainS>

      <FooterS>
        <h1>Footer</h1>
      </FooterS>
    </LayoutS>
  );
}
