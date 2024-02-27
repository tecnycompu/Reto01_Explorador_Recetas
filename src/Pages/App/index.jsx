import React from 'react';
import RecipeExplorer from './RecipeExplorer';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Explorador de Recetas</h1>
      <RecipeExplorer />
    </div>
  );
}

export default App;