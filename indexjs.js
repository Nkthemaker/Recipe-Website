//Function for Slideshow 
let slideIndex=0;
showslides();
function showslides(){
    let i;
    let slides=document.getElementsByClassName("myslides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      slides[slideIndex-1].style.display = "block";  
      setTimeout(showslides, 5000);
}

//Recipe data
const recipes = {
  'Idly': {
      title: 'Idly',
      ingredients: ['1 cup of rice','1 cup of urad dal (black gram lentils)','Salt to taste'],
      instructions: [
          'Soak rice and urad dal separately for 4-6 hours.',
          'Grind soaked rice and dal into a smooth batter.',
          'Mix the batter, add salt, and let it ferment for 8-12 hours.',
          'Pour the batter into idly molds and steam for 10-12 minutes.',
          'Serve the soft idlies with chutney and sambar.'
      ]
  },
  'Dosa': {
      title: 'Dosa',
      ingredients: ['1 cup rice','1/2 cup urad dal (black gram dal)','Salt to taste',"Water for grinding","Oil or ghee for cooking"],
      instructions: [
          'Soak rice and urad dal separately for 4-6 hours.',
          'Grind soaked rice and dal into a smooth batter.',
          'Add salt to the batter and let it ferment for 8-12 hours.',
          'Heat a non-stick pan, spread batter, and cook until crisp.',
          'Serve dosa hot with coconut chutney and sambar.'
      ]
  },
  'Poori': {
      title: 'Poori',
      ingredients: ['2 cups wheat flour','1/2 tsp salt','Water for kneading',"Oil for deep frying"],
      instructions: [
          'Mix wheat flour, salt, and water to make a soft dough.',
          'Roll dough into small circles and deep-fry until puffed and golden.',
          'Serve poori with potato masala or chickpea curry.'
      ]
  },
  'Pongal': {
    title: 'Pongal',
    ingredients: ['1 cup rice','1/4 cup split yellow moong dal','2-3 cups water','Salt to taste','2 tbsp ghee','1/2 tsp cumin seeds','1/2 tsp black pepper','Cashews and curry leaves for garnish'],
    instructions: [
        'Cook rice and split yellow moong dal together until soft.',
        'In a pan, temper with ghee, cumin seeds, and black pepper.',
        'Add cooked rice and dal, season with salt, and mix well.',
        'Garnish with cashews and curry leaves.'
    ]
},
  'Vadai': {
  title: 'Vadai',
  ingredients: ['1 cup urad dal (black gram dal)','1-2 green chilies (finely chopped)','1 small onion (finely chopped)','A few curry leaves (chopped)','Salt to taste','Oil for deep frying'],
  instructions: [
      'Soak urad dal for 3-4 hours and grind into a thick batter.',
      'Add finely chopped onions, green chilies, and curry leaves.',
      'Shape the batter into small rounds and deep-fry until golden.',
      'Serve vada with coconut chutney and sambar.',
  ]
}
};

// Function to display recipe details
function displayRecipe(recipeId) {
  const recipe = recipes[recipeId];
  if (recipe) {
      const recipeDetails = document.getElementById('recipe-details');
      recipeDetails.innerHTML = `
          <h2>${recipe.title}</h2>
          <h3>Ingredients:</h3>
          <ul>
              ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
          <h3>Instructions:</h3>
          <ol>
              ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
          </ol>
      `;
  }
}

// Event listener for clicks on recipe links
const recipeLinks = document.querySelectorAll('#recipe-list a');
recipeLinks.forEach(link => {
  link.addEventListener('click', (event) => {
      event.preventDefault();
      const recipeId = link.getAttribute('href').substring(1); // Remove the '#' symbol
      displayRecipe(recipeId);
  });
});
