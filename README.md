# Item Manager Portal

The Item Manager Portal is a React-based CRUD application to manage a list of items. It supports listing, creating, editing, viewing, and deleting items using modern React practices like Context API and React Router. Styling is handled with Tailwind CSS for responsive design. It includes basic validation, search, localStorage persistence, and loading skeletons.

---

## Tech Stack

- React.js (Hooks + Functional Components)
- React Router DOM
- Context API
- Tailwind CSS
- Static products.json (in-memory data source)

---

## Features

- List all items
- View details of a selected item
- Create new items with validation
- Edit existing items using a shared form
- Delete items with confirmation
- Search/filter functionality
- Responsive layout (mobile + desktop)
- Error and loading state handling
- LocalStorage-based persistence
- Loading skeletons for better UX
- Unit test using Vitest + React Testing Library

---

## How to Use

1. Run the app locally by following the setup instructions below.
2. Navigate to `/items` to view the list.
3. Add, edit, or delete items through the UI.
4. Data is stored in browser localStorage and resets on clear.

---

✅ 1. Setup & Run Instructions
## Setup & Run Instructions

1. **Clone the repository**
```bash
git clone https://github.com/your-username/item-manager-portal.git
cd item-manager-portal

2 Install dependencies
npm install
3 Start the development server
npm run dev
App will run at: http://localhost:5173

4 Run tests
npx vitest
5 Build for production
npm run build

✅ 2. Architectural Decisions & Trade-offs

## Architectural Decisions & Trade-offs

- **React Context API** was chosen over Redux for simplicity and less boilerplate in global state management.
- **Static JSON data** (products.json) simulates backend for easy setup and demo.
- **Single shared form** is used for both create and edit to avoid code duplication.
- **Tailwind CSS** enables quick, consistent UI with responsive layout.
- **LocalStorage** is used for persistence to preserve state across page reloads.
 
✅ 3. Extra Features I'd Add with More Time
## Extra Features I'd Add with More Time

- Authentication and role-based access (e.g., admin vs user)
- Backend integration (Firebase, JSON Server, or Express API)
- Pagination for large item lists
- Advanced form handling with React Hook Form or Formik
- Dark mode toggle
- Animations and polished UI
- Full unit/integration testing coverage with mocks

✅ 4. Purpose
## Purpose

This project was built to practice full CRUD functionality with modern React tools and demonstrate practical frontend development skills. It serves as a base template for small-to-medium scale data-driven React apps.



