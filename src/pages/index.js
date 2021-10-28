import React from 'react';
import GlobalStyle from '../Components/GlobalStyles/global';
import { Helmet } from 'react-helmet'
import { Header } from '../Components/Header';
import { Main } from '../Components/Main';
import { Footer } from '../Components/Footer'

export default function Index() {
  return (
    <div>
      <Helmet>
        <title>ULOAX</title>
      </Helmet>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
