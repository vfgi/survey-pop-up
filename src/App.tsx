import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {ThemeProvider} from 'styled-components'
import Modal from './components/Modal';
import { theme } from './components/theme';
import { RootState } from './redux/rootReducers';
import { openModal } from './redux/reducers/modal';
import UserInfo from './pages/userInformation';

function App() {
  const { modalState } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(openModal());
    }, 2000);
  }, [dispatch])

  const submited = localStorage.getItem('submited')

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {!submited && modalState.isOpened ? <Modal role="modal" children={<UserInfo/>}/> : ''}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
