import { screen } from '@testing-library/react'
import UserInfo from '.';
import { changeStep } from '../../redux/reducers/steps';
import { setupStore } from '../../redux/store';
import { renderWithProviders } from '../../redux/test-utils';

test('renders the firstStep', () => {
  const store = setupStore()
  store.dispatch(changeStep(1))

  renderWithProviders(<UserInfo />, { store })
  
  expect(screen.getByRole("firstStep")).toBeInTheDocument();
});

test('renders the secondStep', () => {
  const store = setupStore()
  store.dispatch(changeStep(2))

  renderWithProviders(<UserInfo />, { store })
  
  expect(screen.getByRole("secondStep")).toBeInTheDocument();
});

test('renders the thirdStep', () => {
  const store = setupStore()
  store.dispatch(changeStep(3))

  renderWithProviders(<UserInfo />, { store })
  
  expect(screen.getByRole("thirdStep")).toBeInTheDocument();
});

test('renders the resume', () => {
  const store = setupStore()
  store.dispatch(changeStep(4))

  renderWithProviders(<UserInfo />, { store })
  
  expect(screen.getByRole("resume")).toBeInTheDocument();
});