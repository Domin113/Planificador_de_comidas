// // Página de inicio.
import React from 'react';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import './homePage.css';

const HomePage = () => {
  // Datos simulados para recetas destacadas
  const categories = [
    {
      name: 'Desayuno',
      recipes: [
        { id: 1, title: 'Pancakes', image: 'https://via.placeholder.com/150', description: 'Deliciosos pancakes con jarabe.' },
        { id: 2, title: 'Huevos Revueltos', image: 'https://via.placeholder.com/150', description: 'Huevos revueltos con espinacas.' },
        { id: 3, title: 'Pancakes', image: 'https://via.placeholder.com/150', description: 'Deliciosos pancakes con jarabe.' },
        { id: 4, title: 'Huevos Revueltos', image: 'https://via.placeholder.com/150', description: 'Huevos revueltos con espinacas.' },
        { id: 5, title: 'Pancakes', image: 'https://via.placeholder.com/150', description: 'Deliciosos pancakes con jarabe.' },
        { id: 6, title: 'Huevos Revueltos', image: 'https://via.placeholder.com/150', description: 'Huevos revueltos con espinacas.' }
      ]
    },
    {
      name: 'Merienda',
      recipes: [
        { id: 7, title: 'Smoothie', image: 'https://via.placeholder.com/150', description: 'Smoothie de frutas tropicales.' },
        { id: 8, title: 'Sándwich', image: 'https://via.placeholder.com/150', description: 'Sándwich de jamón y queso.' },
        { id: 9, title: 'Smoothie', image: 'https://via.placeholder.com/150', description: 'Smoothie de frutas tropicales.' },
        { id: 10, title: 'Sándwich', image: 'https://via.placeholder.com/150', description: 'Sándwich de jamón y queso.' },
        { id: 11, title: 'Smoothie', image: 'https://via.placeholder.com/150', description: 'Smoothie de frutas tropicales.' },
        { id: 12, title: 'Sándwich', image: 'https://via.placeholder.com/150', description: 'Sándwich de jamón y queso.' },
        { id: 13, title: 'Smoothie', image: 'https://via.placeholder.com/150', description: 'Smoothie de frutas tropicales.' },
        { id: 14, title: 'Sándwich', image: 'https://via.placeholder.com/150', description: 'Sándwich de jamón y queso.' }
      ]
    },
    {
      name: 'Cena',
      recipes: [
        { id: 15, title: 'Pizza', image: 'https://via.placeholder.com/150', description: 'Pizza margarita con albahaca.' },
        { id: 16, title: 'Ensalada César', image: 'https://via.placeholder.com/150', description: 'Ensalada César con pollo.' },
        { id: 17, title: 'Pizza', image: 'https://via.placeholder.com/150', description: 'Pizza margarita con albahaca.' },
        { id: 18, title: 'Ensalada César', image: 'https://via.placeholder.com/150', description: 'Ensalada César con pollo.' },
        { id: 19, title: 'Pizza', image: 'https://via.placeholder.com/150', description: 'Pizza margarita con albahaca.' },
        { id: 20, title: 'Ensalada César', image: 'https://via.placeholder.com/150', description: 'Ensalada César con pollo.' }
      ]
    }
  ];

  return (
    <div className="home-page">
      
      <section className="search-section">
        <SearchBar placeholder="Buscar recetas..." />
      </section>
      
      {categories.map(category => (
        <section key={category.name}>
          <h2>{category.name}</h2>
          <div className="recipe-grid">
            {category.recipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                title={recipe.title}
                image={recipe.image}
                description={recipe.description}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default HomePage;
