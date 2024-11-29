import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MealPlannerPage from './pages/MealPlannerPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import ShoppingListPage from './pages/ShoppingListPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meal-planner" element={<MealPlannerPage />} />
          <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
          <Route path="/shopping-list" element={<ShoppingListPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
