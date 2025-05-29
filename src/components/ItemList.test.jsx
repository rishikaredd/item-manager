import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext.jsx';
import ItemList from './ItemList.jsx';

test('renders item titles correctly after loading', () => {
  const mockItems = [
    { id: 1, title: 'Test Item 1', category: 'Books' },
    { id: 2, title: 'Test Item 2', category: 'Games' }
  ];

  render(
    <BrowserRouter>
      <ItemContext.Provider value={{ items: mockItems, setItems: () => {} }}>
        <ItemList />
      </ItemContext.Provider>
    </BrowserRouter>
  );

  expect(screen.getByText('Test Item 1')).toBeInTheDocument();
  expect(screen.getByText('Test Item 2')).toBeInTheDocument();
});

