import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {ThemeProvider} from 'styled-components'

import Header from './components/Header';
import Modal from './components/Modal';
import { theme } from './components/theme';
import Home from './pages/home';
import { RootState } from './redux/rootReducers';
import { openModal, setChildren } from './redux/reducers/modal';
import UserInfo from './pages/userInformation';

function App() {
  const { modalState } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setChildren(<UserInfo />))
    setTimeout(() => {
      dispatch(openModal());
    }, 2000);
  }, [dispatch])

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {modalState.isOpened ? <Modal children={modalState.children}/> : ''}
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
