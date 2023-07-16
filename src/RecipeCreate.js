import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(recipe);
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <div className="recipe-create">
      <form name="create" onSubmit={handleSubmit}>
        <div className="create-input-container">
          <div className="half-input">
            <input
              name="name"
              type="text"
              value={recipe.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>

          <div className="half-input">
            <input
              name="cuisine"
              type="text"
              value={recipe.cuisine}
              onChange={handleChange}
              placeholder="Cuisine"
            />
          </div>

          <div className="half-input">
            <input
              name="photo"
              type="text"
              value={recipe.photo}
              onChange={handleChange}
              placeholder="Photo URL"
            />
          </div>

          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            placeholder="Ingredients"
          />

          <textarea
            name="preparation"
            value={recipe.preparation}
            onChange={handleChange}
            placeholder="Preparation"
          />

          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default RecipeCreate;





