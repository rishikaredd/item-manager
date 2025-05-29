import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext';

export default function ItemList() {
  const { items, setItems } = useContext(ItemContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // ✅ Skip loading delay during tests
  useEffect(() => {
    const isTest = import.meta.env.MODE === 'test';

    if (isTest) {
      setLoading(false);
    } else {
      const timeout = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      const updatedItems = items.filter(item => item.id !== id);
      setItems(updatedItems);
    }
  };

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Item List</h2>

      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border px-4 py-2 rounded w-full mb-6"
      />

      <div className="flex justify-end mb-4">
        <Link
          to="/items/new"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ➕ Add New Item
        </Link>
      </div>

      {loading ? (
        <ul className="space-y-4">
          {[1, 2, 3].map((n) => (
            <li key={n} className="border rounded p-4 animate-pulse">
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/3"></div>
            </li>
          ))}
        </ul>
      ) : filteredItems.length > 0 ? (
        <ul className="space-y-4">
          {filteredItems.map(item => (
            <li
              key={item.id}
              className="border rounded p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="mb-2 sm:mb-0">
                <Link to={`/items/${item.id}`} className="text-lg font-medium hover:underline">
                  {item.title}
                </Link>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>

              <div className="space-x-2">
                <Link
                  to={`/items/${item.id}/edit`}
                  className="text-blue-600 hover:underline"
                >
                  ✏️ Edit
                </Link>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600 hover:underline"
                >
                  ❌ Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No items found.</p>
      )}
    </div>
  );
}

