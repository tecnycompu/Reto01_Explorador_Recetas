import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecipeExplorer = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    {
      title: 'Tacos al pastor',
      image: 'https://via.placeholder.com/300',
      description: 'Deliciosa receta de tacos al pastor mexicanos. Preparados con carne de cerdo marinada y cocinada lentamente, servidos en tortillas de maíz con cebolla, piña y cilantro.'
    },
    // Agrega más recetas aquí...
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      <Slider {...sliderSettings}>
        {recipes.map((recipe, index) => (
          <div key={index} className="bg-white p-4 rounded-lg">
            <img src={recipe.image} alt={recipe.title} className="mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
            <p className="text-gray-700">{recipe.description}</p>
            <button onClick={() => handleRecipeClick(recipe)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Ver Receta</button>
          </div>
        ))}
      </Slider>

      {selectedRecipe && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-2">{selectedRecipe.title}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.title} className="mx-auto mb-4" />
            <p className="text-gray-700">{selectedRecipe.description}</p>
            <button onClick={handleCloseModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeExplorer;
