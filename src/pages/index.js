import React from 'react';
import GlobalStyle from '../Components/GlobalStyles/global';
import { Header } from '../Components/Header';
import { Main } from '../Components/Main';
import { Footer } from '../Components/Footer'

export default function Index() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
