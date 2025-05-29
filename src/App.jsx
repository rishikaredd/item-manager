import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ItemList from './components/ItemList.jsx';
import ItemDetail from './components/ItemDetail';
import ItemForm from './components/ItemForm.jsx';

function App() {
  return (
    <Router>
      <div className="p-6 max-w-4xl mx-auto bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">
          Item Manager Portal
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome Rishika! Let’s build something cool 🚀
        </p>

        {/* Navigation buttons */}
        <div className="flex gap-4 mb-6">
          <Link
            to="/items"
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition"
          >
            Go to Item List
          </Link>
          <Link
            to="/items/new"
            className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition"
          >
            ➕ Add New Item
          </Link>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/items" element={<ItemList />} />
          <Route path="/items/:id" element={<ItemDetail />} />
          <Route path="/items/new" element={<ItemForm />} />
          <Route path="/items/:id/edit" element={<ItemForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



