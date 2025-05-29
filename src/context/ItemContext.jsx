import { createContext, useState, useEffect } from 'react';
import products from '../data/products.json';

// Create the context
export const ItemContext = createContext();

// Create the provider component
export const ItemProvider = ({ children }) => {
  // ✅ Load from localStorage OR use products.json
  const localItems = JSON.parse(localStorage.getItem('items'));
  const [items, setItems] = useState(localItems || products);

  // ✅ Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <ItemContext.Provider value={{ items, setItems }}>
      {children}
    </ItemContext.Provider>
  );
};

