function searchMeal() {
    const searchInput = document.getElementById('search').value;
    const div = document.getElementById("meal-container");
    div.innerHTML ="";
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
.then(response => response.json())
.then(data => {
    console.log(data);
    if(data.meals){
    data.meals.forEach(meal => {
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('meal');
        mealDiv.innerHTML=
        `<h3>${meal.strMeal}</h3>
        <img src ="${meal.strMealThumb}">
        <p>${meal.strInstructions}</p>`;
        div.appendChild(mealDiv);
    });
}else{
    div.innerHTML =`<p> No recipe found . Please try again </p>`;
}
})
}