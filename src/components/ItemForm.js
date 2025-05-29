import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext';

export default function ItemForm() {
  const { id } = useParams();
  const { items, setItems } = useContext(ItemContext);
  const navigate = useNavigate();

  const isEditing = Boolean(id);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
  });

  useEffect(() => {
    if (isEditing) {
      const existingItem = items.find(item => item.id === parseInt(id));
      if (existingItem) setFormData(existingItem);
    }
  }, [id, isEditing, items]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      const updatedItems = items.map(item =>
        item.id === parseInt(id) ? formData : item
      );
      setItems(updatedItems);
    } else {
      const newItem = {
        ...formData,
        id: Date.now(),
      };
      setItems([...items, newItem]);
    }

    navigate('/items');
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Item' : 'Add New Item'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isEditing ? 'Update Item' : 'Create Item'}
        </button>
      </form>
    </div>
  );
}
