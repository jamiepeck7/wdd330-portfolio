const searchResultDiv = document.querySelector('.search-result')

export function generateHTML(results) {
    let generatedHTML = '';
    results.map((result) => {
        generatedHTML +=
        `
    <div class="item">
        <img src="${result.recipe.image}" alt="${result.recipe.source}">
        <div class="flex-container">
           <h1 class="title">${result.recipe.label}</h1>
            <a class="button" href="${result.recipe.url}" target="_blank">View Recipe</a>
        </div>
        <p class="item-data"> Calories:  ${result.recipe.calories.toFixed(2)}</p>
        
        
    </div>
        `;

    });
    searchResultDiv.innerHTML = generatedHTML;
}