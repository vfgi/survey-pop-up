import { screen } from '@testing-library/react'
import App from './App'
import { openModal } from './redux/reducers/modal';
import { setupStore } from './redux/store';
import { renderWithProviders } from './redux/test-utils';

test('renders the survey', () => {
  const store = setupStore()
  store.dispatch(openModal())

  renderWithProviders(<App />, { store })
  
  expect(screen.getByRole("modal")).toBeInTheDocument();
});
