import React, { useEffect, useState } from "react";

const Recepies = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const fetchrecepies = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
        );
        const data = await response.json();

        if (data.meals) {
          setFoods(data.meals);
        } else {
          setFoods([]);
        }
      } catch (error) {
        console.error("Error fetching recepies:", error);
      }
    };
    fetchrecepies();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Chicken Meals 🍗
      </h1>

      {foods.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Loading...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {foods.map((foodItem) => (
            <div
              key={foodItem.idMeal}
              className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg"
            >
              <img
                src={foodItem.strMealThumb}
                alt={foodItem.strMeal}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {foodItem.strMeal}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recepies;
