import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext';

export default function ItemList() {
  const { items, setItems } = useContext(ItemContext);

  // ✅ Function to handle delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      const updatedItems = items.filter(item => item.id !== id);
      setItems(updatedItems);
    }
  };

  return (
    <div>
      <h2>Item List</h2>

      {/* ✅ Link to Create New Item */}
      <Link to="/items/new" style={{ display: 'block', marginBottom: '10px' }}>
        ➕ Add New Item
      </Link>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {/* Link to view item */}
            <Link to={`/items/${item.id}`}>
              {item.title} – {item.category}
            </Link>

            {/* ✅ Link to edit item */}
            {' '}| <Link to={`/items/${item.id}/edit`}>✏️ Edit</Link>

            {/* ✅ Delete button */}
            {' '}| <button onClick={() => handleDelete(item.id)} style={{ color: 'red', cursor: 'pointer' }}>
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

