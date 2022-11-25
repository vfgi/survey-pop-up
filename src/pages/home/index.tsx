import React from 'react';
import Footer from '../../components/Footer';

import * as S from './styles'

import Loader from '../../components/Icons/loader.svg'
import { PageContainer } from '../../components/PageContainer';

function Home() {
  return (
    <PageContainer>
        <S.LoaderContainer>
            <img src={Loader} alt="loader" />
        </S.LoaderContainer>
        <Footer />
    </PageContainer>
  );
}

export default Home;
