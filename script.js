const app = {};

const $panels = $('.panel'); 
const $drinkContainer = $('.drink-container');
const $drinkTitle = $('.drink-title');
const $recipeContainer = $('.recipe-card-container');

// Removes the open class from every panel whenever another panel is clicked
app.removeOpenClasses = function() {
  $panels.each(function() {
    $panels.removeClass('open');
  });
}

// Calling API by ingredient
app.getCocktailsByIngredient = selection => {
  $.ajax({
    url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selection}`,
    method: `GET`,
    dataType: `JSON`
  }).then(results => {
    $drinkContainer.empty();
    app.displayDrinks(results);
  });
}

// Displays the drink results and appends them to the drink container, each card will lead to the recipe on cocktaildb.com when clicked
app.displayDrinks = result => {
  const drinksArray = result.drinks;
  drinksArray.forEach(function(drinkObj) {
    const drinkNames = drinkObj.strDrink;
    const drinkCardHTML = `
      <li class="drink-card" id="${drinkObj.idDrink}">
        <img src="${drinkObj.strDrinkThumb}" alt="${drinkNames}" class="drink-img">
        <div class="name-container">
          <h5 class="drink-name">${drinkNames}</h5>
        </div>
      </li>
    `;
    $drinkContainer.append(drinkCardHTML);
  });
  const $drinkCards = $('.drink-card');
  $drinkCards.on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    window.open(`https://www.thecocktaildb.com/drink/${this.id}`, '_blank');
  });
}

$(function() {
  // Click event for the panels, it removes open classes from every panel then opens and calls for drinks to be displayed on the panel that was clicked
  $panels.each(function(panel) {
    $(this).click(function(e) {
      e.preventDefault();
      app.removeOpenClasses();
      $(this).toggleClass('open');
      if(panel === 0) {
        app.getCocktailsByIngredient('whiskey');
        $(this).click(function() {
          if($(this).hasClass('open')) {
            $(this).removeClass('open');
          } else {
            $(this).addClass('open');
            app.getCocktailsByIngredient('whiskey');
          }
        });
      }
      else if(panel === 1) {
        app.getCocktailsByIngredient('rum');
        $(this).click(function() {
          if($(this).hasClass('open')) {
            $(this).removeClass('open');
          } else {
            $(this).addClass('open');
            app.getCocktailsByIngredient('rum');
          }
        });
      }
      else if(panel === 2) {
        app.getCocktailsByIngredient('gin');
        $(this).click(function() {
          if($(this).hasClass('open')) {
            $(this).removeClass('open');
          } else {
            $(this).addClass('open');
            app.getCocktailsByIngredient('gin');
          }
        });
      }
      else if(panel === 3) {
        app.getCocktailsByIngredient('vodka');
        $(this).click(function() {
          if($(this).hasClass('open')) {
            $(this).removeClass('open');
          } else {
            $(this).addClass('open');
            app.getCocktailsByIngredient('vodka');
          }
        });
      }
      else if(panel === 4) {
        app.getCocktailsByIngredient('tequila');
        $(this).click(function() {
          if($(this).hasClass('open')) {
            $(this).removeClass('open');
          } else {
            $(this).addClass('open');
            app.getCocktailsByIngredient('tequila');
          }
        });
      }
    });
  });
});







