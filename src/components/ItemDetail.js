import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';

export default function ItemDetail() {
  const { id } = useParams();
  const { items } = useContext(ItemContext);

  const item = items.find((i) => i.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h2>{item.title}</h2>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Description:</strong> {item.description}</p>
    </div>
  );
}
