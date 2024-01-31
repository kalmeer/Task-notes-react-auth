import React, { useState } from "react";
import RecipeItem from "../components/RecipeItem";
import { getAllRecipes } from "../api/recipes";
import { useQuery } from "@tanstack/react-query";
import AddRecipe from "../components/AddRecipe";

const Recipes = () => {
  const {
    data: recipes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: getAllRecipes,
  });

  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);
  const onOpen = () => setShow(true);

  const recipeList = recipes?.map((recipe) => (
    <RecipeItem key={recipe._id} {...recipe} />
  ));
  return (
    <div className="p-5 min-h-screen bg-orange-100">
      {/* Add recipe button */}
      <div className="mb-5">
        <button
          onClick={onOpen}
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
        >
          Add Recipe
        </button>
      </div>
      {/* Recipe list */}
      <div className="flex flex-wrap gap-3 ">{recipeList}</div>

      {/* Add recipe modal */}
      <AddRecipe show={show} onClose={onClose} onSave={() => {}} />
    </div>
  );
};

export default Recipes;
