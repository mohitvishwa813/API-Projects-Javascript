const input_field = document.querySelector("#input");
const btn = document.querySelector(".search");
const namme = document.querySelector("#name");
const area = document.querySelector("#area");
const recipe = document.querySelector("#recipe");
const img = document.querySelector("#immg");

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

btn.addEventListener("click", () => {
  const inputValue = input_field.value;
  const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;

  fetch(searchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      if (data.meals && data.meals.length > 0) {
        namme.innerHTML = data.meals[0].strMeal;
        area.innerHTML = data.meals[0].strArea;
        recipe.innerHTML = data.meals[0].strInstructions;
        img.src = data.meals[0].strMealThumb;
      } else {

        namme.innerHTML = "Meal not found";
        area.innerHTML = "Big mac";
        recipe.innerHTML = "";
        img.src = ""; 
        
      }
    })
    .catch(function (error) {
      console.error('Error fetching data:', error);
    });
});
