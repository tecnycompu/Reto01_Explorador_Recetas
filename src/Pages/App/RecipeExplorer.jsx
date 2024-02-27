import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecipeExplorer = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    {
      title: 'Receta01',
      image: 'https://via.placeholder.com/300',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nemo ab nihil magni, nulla quasi rem pariatur? Eum tenetur magnam expedita iusto doloremque, omnis totam at vel! Quod, officia unde.'
    },
    {
      title: 'Receta01',
      image: 'https://via.placeholder.com/300',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nemo ab nihil magni, nulla quasi rem pariatur? Eum tenetur magnam expedita iusto doloremque, omnis totam at vel! Quod, officia unde.'
    },
    {
      title: 'Receta01',
      image: 'https://via.placeholder.com/300',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nemo ab nihil magni, nulla quasi rem pariatur? Eum tenetur magnam expedita iusto doloremque, omnis totam at vel! Quod, officia unde.'
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const openModal = (index) => {
    setSelectedRecipe(recipes[index]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Slider {...sliderSettings}>
        {recipes.map((recipe, index) => (
          <div key={index} className="bg-white p-4 rounded-lg">
            <img src={recipe.image} alt={recipe.title} className="mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
            <p className="text-gray-700">{recipe.description}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => openModal(index)}>Ver Receta</button>
          </div>
        ))}
      </Slider>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-md">
            <h2 className="text-xl font-bold mb-4">{selectedRecipe.title}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.title} className="mx-auto mb-4" />
            <p className="text-gray-700 mb-4">{selectedRecipe.description}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeExplorer;
