const recipes = [
{
    name: "Beef Meatballs",
    image: "images/meatball.jpg",
    category: "Rice",
    ingredients: [
        "500 g ground beef",
        "100 g breadcrumbs",
        "1 egg",
        "2 cloves garlic",
        "1 tsp salt",
        "1 tsp black pepper",
        "2 tbsp cooking oil"
    ],

    steps: [
        "Mix the beef, breadcrumbs, egg, garlic, salt, and pepper.",
        "Shape into small meatballs.",
        "Heat the oil in a pan.",
        "Cook the meatballs until browned.",
        "Serve with steamed rice."
    ]
},

{
    name: "Creamy Alfredo Chicken",
    image: "images/alfredo.jpg",
    category: "Pasta",
    ingredients: [
        "250 g fettuccine",
        "200 g chicken breast",
        "2 tbsp butter",
        "2 cloves garlic",
        "200 ml heavy cream",
        "50 g Parmesan cheese",
        "Salt",
        "Black pepper"
    ],

    steps: [
        "Cook the fettuccine until al dente.",
        "Cook the chicken until golden.",
        "Melt butter and sauté garlic.",
        "Add heavy cream and Parmesan cheese.",
        "Mix with the pasta.",
        "Serve immediately."
    ]
},

{
    name: "Seafood Aglio e Olio",
    image: "images/aglioolio.jpg",
    category: "Pasta",
    ingredients: [
        "200 g spaghetti",
        "150 g shrimp",
        "3 cloves garlic",
        "3 tbsp olive oil",
        "1 tsp chili flakes",
        "Parsley",
        "Salt"
    ],

    steps: [
        "Cook the spaghetti.",
        "Heat olive oil.",
        "Cook garlic until fragrant.",
        "Add the shrimp.",
        "Mix in the spaghetti.",
        "Sprinkle parsley and serve."
    ]
},

{
    name: "BBQ Chicken Rice",
    image: "images/bbqchickenpizza.jpg",
    category: "Rice",
    ingredients: [
        "2 cups cooked rice",
        "200 g grilled chicken",
        "3 tbsp BBQ sauce",
        "Butter",
        "Spring onions"
    ],

    steps: [
        "Cook the chicken with BBQ sauce.",
        "Prepare hot steamed rice.",
        "Place the chicken on top.",
        "Garnish with spring onions.",
        "Serve warm."
    ]
},

{
    name: "Chocolate Pancakes",
    image: "images/pancakes.jpg",
    category: "Dessert",
    ingredients: [
        "2 cups pancake mix",
        "1 egg",
        "250 ml milk",
        "2 tbsp cocoa powder",
        "Chocolate syrup"
    ],

    steps: [
        "Mix all the ingredients.",
        "Pour the batter onto a hot pan.",
        "Cook both sides until golden.",
        "Drizzle with chocolate syrup.",
        "Serve warm."
    ]
},
{
    name: "Double Cheeseburger",
    image: "images/burger.jpg",
    category: "Burger",
    ingredients: [
        "2 beef patties",
        "2 burger buns",
        "4 cheddar cheese slices",
        "Lettuce",
        "Tomato",
        "Onion",
        "Burger sauce"
    ],

    steps: [
        "Grill both beef patties.",
        "Melt cheese on each patty.",
        "Toast the burger buns.",
        "Layer lettuce, tomato, onion, and patties.",
        "Spread burger sauce.",
        "Serve immediately."
    ]
},

{
    name: "Spicy Chicken Curry",
    image: "images/chickencurry.jpg",
    category: "Rice",
    ingredients: [
        "300 g chicken",
        "2 tbsp curry paste",
        "200 ml coconut milk",
        "1 onion",
        "2 cloves garlic",
        "Salt"
    ],

    steps: [
        "Cook onion and garlic until fragrant.",
        "Add chicken pieces.",
        "Mix in curry paste.",
        "Pour coconut milk.",
        "Simmer for 20 minutes.",
        "Serve with rice."
    ]
},

{
    name: "Seafood Carbonara",
    image: "images/carbonara.jpg",
    category: "Pasta",
    ingredients: [
        "200 g spaghetti",
        "100 g shrimp",
        "2 eggs",
        "50 g Parmesan cheese",
        "Black pepper",
        "Butter"
    ],

    steps: [
        "Cook the spaghetti.",
        "Cook the shrimp in butter.",
        "Whisk eggs with Parmesan cheese.",
        "Mix everything together.",
        "Season with black pepper.",
        "Serve hot."
    ]
},

{
    name: "Chicken Caesar Bowl",
    image: "images/caesarsalad.jpg",
    category: "Salad",
    ingredients: [
        "Romaine lettuce",
        "Grilled chicken",
        "Croutons",
        "Parmesan cheese",
        "Caesar dressing"
    ],

    steps: [
        "Wash the lettuce.",
        "Slice the grilled chicken.",
        "Mix lettuce with dressing.",
        "Top with chicken, croutons, and Parmesan.",
        "Serve fresh."
    ]
},

{
    name: "Mini Pepperoni Pizza",
    image: "images/pepperoni.jpg",
    category: "Pizza",
    ingredients: [
        "Mini pizza dough",
        "Pizza sauce",
        "Mozzarella cheese",
        "Pepperoni slices",
        "Italian seasoning"
    ],

    steps: [
        "Preheat the oven to 220°C.",
        "Spread pizza sauce.",
        "Add mozzarella cheese.",
        "Top with pepperoni.",
        "Bake for 12 minutes.",
        "Serve hot."
    ]
},
{
    name: "BBQ Beef Pizza",
    image: "images/bbqchickenpizza.jpg",
    category: "Pizza",
    ingredients: [
        "Pizza dough",
        "BBQ sauce",
        "Ground beef",
        "Mozzarella cheese",
        "Red onion"
    ],

    steps: [
        "Preheat the oven to 220°C.",
        "Spread BBQ sauce on the dough.",
        "Add mozzarella cheese.",
        "Top with cooked ground beef and onion.",
        "Bake for 15 minutes.",
        "Serve hot."
    ]
},

{
    name: "Garlic Mushroom Pasta",
    image: "images/garmuspasta.jpg",
    category: "Pasta",
    ingredients: [
        "200 g spaghetti",
        "150 g mushrooms",
        "3 cloves garlic",
        "3 tbsp olive oil",
        "Parsley",
        "Salt"
    ],

    steps: [
        "Cook the spaghetti.",
        "Sauté garlic in olive oil.",
        "Add mushrooms.",
        "Mix in the spaghetti.",
        "Garnish with parsley.",
        "Serve warm."
    ]
},

{
    name: "Chicken Fried Rice",
    image: "images/chickenfriedrice.jpg",
    category: "Rice",
    ingredients: [
        "2 cups cooked rice",
        "150 g chicken",
        "1 egg",
        "Garlic",
        "Soy sauce",
        "Spring onion"
    ],

    steps: [
        "Cook the garlic until fragrant.",
        "Add chicken and cook thoroughly.",
        "Scramble the egg.",
        "Add rice and soy sauce.",
        "Mix well.",
        "Top with spring onion."
    ]
},

{
    name: "Grilled Chicken Salad",
    image: "images/chickensalad.jpg",
    category: "Salad",
    ingredients: [
        "Lettuce",
        "Grilled chicken",
        "Cherry tomatoes",
        "Cucumber",
        "Olive oil",
        "Black pepper"
    ],

    steps: [
        "Wash all vegetables.",
        "Slice the grilled chicken.",
        "Mix everything together.",
        "Drizzle with olive oil.",
        "Season with black pepper.",
        "Serve fresh."
    ]
},

{
    name: "Blueberry Pancakes",
    image: "images/pancakes.jpg",
    category: "Dessert",
    ingredients: [
        "Pancake mix",
        "Milk",
        "Egg",
        "Blueberries",
        "Butter",
        "Maple syrup"
    ],

    steps: [
        "Mix the pancake batter.",
        "Fold in the blueberries.",
        "Cook on a hot pan.",
        "Flip until golden.",
        "Serve with maple syrup."
    ]
},
{
    name: "Creamy Mushroom Pasta",
    image: "images/alfredo.jpg",
    category: "Pasta",
    ingredients: [
        "250 g fettuccine",
        "150 g mushrooms",
        "200 ml heavy cream",
        "2 cloves garlic",
        "50 g Parmesan cheese",
        "Butter"
    ],

    steps: [
        "Cook the pasta until al dente.",
        "Sauté garlic and mushrooms in butter.",
        "Pour in the heavy cream.",
        "Add Parmesan cheese.",
        "Mix with the pasta.",
        "Serve warm."
    ]
},

{
    name: "Spicy Meat Lovers Pizza",
    image: "images/meatloverspizza.jpg",
    category: "Pizza",
    ingredients: [
        "Pizza dough",
        "Pizza sauce",
        "Mozzarella cheese",
        "Pepperoni",
        "Cooked sausage",
        "Chili flakes"
    ],

    steps: [
        "Preheat the oven to 220°C.",
        "Spread pizza sauce on the dough.",
        "Add mozzarella cheese.",
        "Top with pepperoni and sausage.",
        "Sprinkle chili flakes.",
        "Bake for 15 minutes."
    ]
},

{
    name: "Chocolate Banana Pancakes",
    image: "images/pancakes.jpg",
    category: "Dessert",
    ingredients: [
        "Pancake mix",
        "1 banana",
        "Milk",
        "Egg",
        "Chocolate chips",
        "Butter"
    ],

    steps: [
        "Prepare the pancake batter.",
        "Slice the banana.",
        "Add banana and chocolate chips.",
        "Cook until both sides are golden.",
        "Serve warm."
    ]
},
{
    name: "Cheesy Four Cheese Pasta",
    image: "images/cheesy4pasta.jpg",
    category: "Pasta",
    ingredients: [
        "250 g fettuccine",
        "Mozzarella cheese",
        "Cheddar cheese",
        "Parmesan cheese",
        "Cream cheese",
        "200 ml heavy cream"
    ],

    steps: [
        "Cook the pasta until al dente.",
        "Heat the heavy cream.",
        "Add all cheeses and stir until melted.",
        "Mix the pasta into the sauce.",
        "Serve immediately."
    ]
},

{
    name: "Greek Chicken Salad",
    image: "images/greeksalad.jpg",
    category: "Salad",
    ingredients: [
        "Lettuce",
        "Grilled chicken",
        "Feta cheese",
        "Tomatoes",
        "Cucumber",
        "Black olives"
    ],

    steps: [
        "Wash the vegetables.",
        "Slice the grilled chicken.",
        "Mix all ingredients together.",
        "Top with feta cheese.",
        "Serve chilled."
    ]
},

{
    name: "Berry Fruit Pancakes",
    image: "images/pancakes.jpg",
    category: "Dessert",
    ingredients: [
        "Pancake mix",
        "Milk",
        "Egg",
        "Strawberries",
        "Blueberries",
        "Honey"
    ],

    steps: [
        "Prepare the pancake batter.",
        "Cook pancakes until golden.",
        "Top with strawberries and blueberries.",
        "Drizzle with honey.",
        "Serve immediately."
    ]
},
{
    name: "Classic Beef Lasagna",
    image: "images/lasagna.jpg",
    category: "Pasta",
    ingredients: [
        "Lasagna sheets",
        "250 g ground beef",
        "Pasta sauce",
        "Mozzarella cheese",
        "Parmesan cheese",
        "Bechamel sauce"
    ],

    steps: [
        "Cook the ground beef.",
        "Add the pasta sauce.",
        "Layer lasagna sheets, beef sauce, and bechamel.",
        "Repeat the layers.",
        "Top with mozzarella and Parmesan.",
        "Bake for 40 minutes."
    ]
},

{
    name: "Pepperoni Cheese Pizza",
    image: "images/pepperoni.jpg",
    category: "Pizza",
    ingredients: [
        "Pizza dough",
        "Pizza sauce",
        "Mozzarella cheese",
        "Pepperoni",
        "Oregano"
    ],

    steps: [
        "Preheat the oven to 220°C.",
        "Spread pizza sauce.",
        "Add mozzarella cheese.",
        "Arrange pepperoni slices.",
        "Sprinkle oregano.",
        "Bake for 15 minutes."
    ]
},

{
    name: "Japanese Chicken Donburi",
    image: "images/chickendonburi.jpg",
    category: "Rice",
    ingredients: [
        "2 cups steamed rice",
        "200 g chicken breast",
        "Soy sauce",
        "Onion",
        "Sugar",
        "Spring onion"
    ],

    steps: [
        "Cook the onion until soft.",
        "Add sliced chicken.",
        "Pour in soy sauce and sugar.",
        "Cook until the chicken is done.",
        "Serve over steamed rice.",
        "Top with spring onion."
    ]
},

{
    name: "Fresh Tuna Caesar Salad",
    image: "images/caesarsalad.jpg",
    category: "Salad",
    ingredients: [
        "Romaine lettuce",
        "Tuna",
        "Croutons",
        "Parmesan cheese",
        "Caesar dressing"
    ],

    steps: [
        "Wash the lettuce.",
        "Drain the tuna.",
        "Mix lettuce with Caesar dressing.",
        "Add tuna and croutons.",
        "Sprinkle Parmesan cheese.",
        "Serve chilled."
    ]
},

{
    name: "Chocolate Berry Pancakes",
    image: "images/pancakes.jpg",
    category: "Dessert",
    ingredients: [
        "Pancake mix",
        "Milk",
        "Egg",
        "Chocolate syrup",
        "Mixed berries"
    ],

    steps: [
        "Prepare the pancake batter.",
        "Cook pancakes until golden.",
        "Top with mixed berries.",
        "Drizzle with chocolate syrup.",
        "Serve warm."
    ]
},
{
    name: "Creamy Seafood Pasta",
    image: "images/seafoodpasta.jpg",
    category: "Pasta",
    ingredients: [
        "250 g spaghetti",
        "100 g shrimp",
        "100 g squid",
        "200 ml heavy cream",
        "2 cloves garlic",
        "Parmesan cheese"
    ],

    steps: [
        "Cook the spaghetti until al dente.",
        "Sauté garlic until fragrant.",
        "Cook the shrimp and squid.",
        "Pour in the heavy cream.",
        "Add Parmesan cheese.",
        "Mix with the spaghetti and serve."
    ]
},

{
    name: "Margherita Deluxe Pizza",
    image: "images/pizzamarg.jpg",
    category: "Pizza",
    ingredients: [
        "Pizza dough",
        "Pizza sauce",
        "Fresh mozzarella",
        "Fresh basil",
        "Olive oil"
    ],

    steps: [
        "Preheat the oven to 220°C.",
        "Spread pizza sauce evenly.",
        "Add mozzarella slices.",
        "Bake for 15 minutes.",
        "Top with fresh basil.",
        "Drizzle with olive oil before serving."
    ]
},

{
    name: "Crispy Fried Chicken Rice",
    image: "images/friedchicken.jpg",
    category: "Rice",
    ingredients: [
        "2 pieces fried chicken",
        "2 cups steamed rice",
        "Cucumber",
        "Tomato",
        "Chili sauce"
    ],

    steps: [
        "Prepare hot steamed rice.",
        "Place crispy fried chicken beside the rice.",
        "Add sliced cucumber and tomato.",
        "Serve with chili sauce.",
        "Enjoy while hot."
    ]
},

{
    name: "Fruit Yogurt Salad",
    image: "images/fruitsalad.jpg",
    category: "Salad",
    ingredients: [
        "Apple",
        "Strawberries",
        "Grapes",
        "Kiwi",
        "Plain yogurt",
        "Honey"
    ],

    steps: [
        "Wash and cut all fruits.",
        "Mix yogurt with honey.",
        "Pour the dressing over the fruits.",
        "Mix gently.",
        "Chill before serving."
    ]
},

{
    name: "Baked Mac and Cheese",
    image: "images/macandcheese.jpg",
    category: "Pasta",
    ingredients: [
        "250 g macaroni",
        "Cheddar cheese",
        "Mozzarella cheese",
        "Milk",
        "Butter",
        "Breadcrumbs"
    ],

    steps: [
        "Cook the macaroni.",
        "Prepare the cheese sauce.",
        "Mix the macaroni with the sauce.",
        "Top with mozzarella and breadcrumbs.",
        "Bake for 20 minutes.",
        "Serve hot."
    ]
},
{
    name: "Spicy Pesto Chicken Pasta",
    image: "images/pestopasta.jpg",
    category: "Pasta",
    ingredients: [
        "250 g pasta",
        "150 g chicken breast",
        "3 tbsp pesto sauce",
        "2 cloves garlic",
        "Parmesan cheese",
        "Chili flakes"
    ],

    steps: [
        "Cook the pasta until al dente.",
        "Grill the chicken and slice it.",
        "Sauté garlic until fragrant.",
        "Mix in the pesto sauce.",
        "Add the pasta and chicken.",
        "Top with Parmesan cheese and chili flakes."
    ]
},

{
    name: "BBQ Meat Lovers Pizza",
    image: "images/meatloverspizza.jpg",
    category: "Pizza",
    ingredients: [
        "Pizza dough",
        "BBQ sauce",
        "Mozzarella cheese",
        "Ground beef",
        "Pepperoni",
        "Cooked sausage"
    ],

    steps: [
        "Preheat the oven to 220°C.",
        "Spread BBQ sauce over the dough.",
        "Add mozzarella cheese.",
        "Top with beef, pepperoni, and sausage.",
        "Bake for 15 minutes.",
        "Serve hot."
    ]
},

{
    name: "Japanese Beef Fried Rice",
    image: "images/japanesebeeffriedrice.jpg",
    category: "Rice",
    ingredients: [
        "2 cups cooked rice",
        "150 g sliced beef",
        "1 egg",
        "Soy sauce",
        "Garlic",
        "Spring onion"
    ],

    steps: [
        "Cook the garlic until fragrant.",
        "Add the sliced beef.",
        "Scramble the egg.",
        "Add rice and soy sauce.",
        "Stir well.",
        "Top with spring onion."
    ]
},

{
    name: "Mediterranean Greek Salad",
    image: "images/greeksalad.jpg",
    category: "Salad",
    ingredients: [
        "Lettuce",
        "Tomatoes",
        "Cucumber",
        "Feta cheese",
        "Black olives",
        "Olive oil"
    ],

    steps: [
        "Wash and chop the vegetables.",
        "Combine all ingredients.",
        "Add feta cheese and olives.",
        "Drizzle with olive oil.",
        "Serve fresh."
    ]
},

{
    name: "Strawberry Pancakes",
    image: "images/pancakes.jpg",
    category: "Dessert",
    ingredients: [
        "Pancake mix",
        "1 egg",
        "250 ml milk",
        "Fresh strawberries",
        "Whipped cream"
    ],

    steps: [
        "Prepare the pancake batter.",
        "Cook each pancake until golden.",
        "Top with sliced strawberries.",
        "Add whipped cream.",
        "Serve immediately."
    ]
},
{
    name: "Cheesy Mushroom Alfredo",
    image: "images/alfredo.jpg",
    category: "Pasta",
    ingredients: [
        "250 g fettuccine",
        "150 g mushrooms",
        "200 ml heavy cream",
        "50 g Parmesan cheese",
        "2 cloves garlic",
        "Butter"
    ],

    steps: [
        "Cook the fettuccine until al dente.",
        "Sauté garlic and mushrooms in butter.",
        "Pour in the heavy cream.",
        "Add Parmesan cheese and stir well.",
        "Mix with the pasta.",
        "Serve hot."
    ]
},

{
    name: "Ultimate Four Cheese Pizza",
    image: "images/fourcheesepizza.jpg",
    category: "Pizza",
    ingredients: [
        "Pizza dough",
        "Pizza sauce",
        "Mozzarella cheese",
        "Cheddar cheese",
        "Parmesan cheese",
        "Blue cheese"
    ],

    steps: [
        "Preheat the oven to 220°C.",
        "Spread pizza sauce over the dough.",
        "Add all four cheeses evenly.",
        "Bake for 15 minutes.",
        "Slice and serve hot."
    ]
},

{
    name: "Japanese Chicken Fried Rice",
    image: "images/japanesechickfriedrice.jpg",
    category: "Rice",
    ingredients: [
        "2 cups cooked rice",
        "150 g chicken breast",
        "1 egg",
        "2 cloves garlic",
        "Soy sauce",
        "Spring onion"
    ],

    steps: [
        "Cook garlic until fragrant.",
        "Add diced chicken and cook thoroughly.",
        "Scramble the egg.",
        "Add rice and soy sauce.",
        "Mix everything together.",
        "Garnish with spring onion."
    ]
},

{
    name: "Classic Cobb Chicken Salad",
    image: "images/cobbsalad.jpg",
    category: "Salad",
    ingredients: [
        "Lettuce",
        "Grilled chicken",
        "Boiled egg",
        "Tomatoes",
        "Avocado",
        "Ranch dressing"
    ],

    steps: [
        "Wash and prepare the vegetables.",
        "Slice the chicken and boiled egg.",
        "Arrange all ingredients in a bowl.",
        "Pour ranch dressing on top.",
        "Serve fresh."
    ]
},

{
    name: "Honey Banana Pancakes",
    image: "images/pancakes.jpg",
    category: "Dessert",
    ingredients: [
        "Pancake mix",
        "1 banana",
        "250 ml milk",
        "1 egg",
        "Honey"
    ],

    steps: [
        "Prepare the pancake batter.",
        "Cook pancakes until golden brown.",
        "Top with sliced banana.",
        "Drizzle with honey.",
        "Serve warm."
    ]
},
{
    name: "Classic Japanese Gyudon",
    image: "images/gyudon.jpg",
    category: "Rice",
    ingredients: [
        "2 cups steamed rice",
        "200 g thinly sliced beef",
        "1 onion",
        "3 tbsp soy sauce",
        "2 tbsp mirin",
        "1 tbsp sugar"
    ],

    steps: [
        "Slice the onion thinly.",
        "Cook the onion until soft.",
        "Add the sliced beef.",
        "Pour in soy sauce, mirin, and sugar.",
        "Simmer for 10 minutes.",
        "Serve over steamed rice."
    ]
},

{
    name: "Mushroom Supreme Pizza",
    image: "images/mushroompizza.jpg",
    category: "Pizza",
    ingredients: [
        "1 pizza dough",
        "1/2 cup pizza sauce",
        "200 g mozzarella cheese",
        "150 g mushrooms",
        "1 tsp oregano"
    ],

    steps: [
        "Preheat the oven to 220°C.",
        "Spread pizza sauce over the dough.",
        "Add mozzarella cheese.",
        "Top with sliced mushrooms.",
        "Sprinkle oregano.",
        "Bake for 15 minutes."
    ]
},

{
    name: "Japanese Omurice",
    image: "images/omurice.jpg",
    category: "Rice",
    ingredients: [
        "2 cups cooked rice",
        "2 eggs",
        "150 g chicken breast",
        "2 tbsp ketchup",
        "1 onion",
        "1 tbsp butter"
    ],

    steps: [
        "Cook onion and diced chicken.",
        "Add rice and ketchup.",
        "Cook until well mixed.",
        "Make a thin omelet.",
        "Wrap the fried rice with the omelet.",
        "Serve with ketchup."
    ]
},

{
    name: "Fresh Garden Vegetable Salad",
    image: "images/gardensalad.jpg",
    category: "Salad",
    ingredients: [
        "Lettuce",
        "Cherry tomatoes",
        "Cucumber",
        "Carrot",
        "Sweet corn",
        "Italian dressing"
    ],

    steps: [
        "Wash all vegetables.",
        "Slice into bite-sized pieces.",
        "Mix everything in a large bowl.",
        "Pour Italian dressing over the salad.",
        "Toss gently.",
        "Serve fresh."
    ]
},

{
    name: "Spicy Beef Rendang",
    image: "images/rendang.jpg",
    category: "Rice",
    ingredients: [
        "300 g beef",
        "200 ml coconut milk",
        "2 tbsp rendang spice paste",
        "2 kaffir lime leaves",
        "1 lemongrass stalk",
        "Steamed rice"
    ],

    steps: [
        "Cook the beef until lightly browned.",
        "Add the rendang spice paste.",
        "Pour in the coconut milk.",
        "Add kaffir lime leaves and lemongrass.",
        "Simmer until the beef is tender.",
        "Serve with steamed rice."
    ]
},
{
    name: "Bacon Cheeseburger",
    image: "images/burger.jpg",
    category: "Burger",
    ingredients: [
        "Burger bun",
        "Beef patty",
        "Cheddar cheese",
        "Bacon",
        "Lettuce",
        "Tomato",
        "Burger sauce"
    ],

    steps: [
        "Cook the beef patty until done.",
        "Fry the bacon until crispy.",
        "Toast the burger buns.",
        "Layer lettuce, tomato, patty, cheese, and bacon.",
        "Spread burger sauce.",
        "Serve immediately."
    ]
},

{
    name: "Mushroom Swiss Burger",
    image: "images/burger.jpg",
    category: "Burger",
    ingredients: [
        "Burger bun",
        "Beef patty",
        "Swiss cheese",
        "Mushrooms",
        "Butter",
        "Lettuce"
    ],

    steps: [
        "Cook the beef patty.",
        "Sauté mushrooms in butter.",
        "Melt Swiss cheese over the patty.",
        "Assemble the burger with lettuce and mushrooms.",
        "Serve warm."
    ]
},

{
    name: "Spicy Jalapeño Burger",
    image: "images/burger.jpg",
    category: "Burger",
    ingredients: [
        "Burger bun",
        "Beef patty",
        "Cheddar cheese",
        "Jalapeños",
        "Lettuce",
        "Spicy mayonnaise"
    ],

    steps: [
        "Grill the beef patty.",
        "Toast the buns.",
        "Add cheese to the patty.",
        "Top with jalapeños and spicy mayonnaise.",
        "Serve hot."
    ]
},

{
    name: "BBQ Bacon Burger",
    image: "images/burger.jpg",
    category: "Burger",
    ingredients: [
        "Burger bun",
        "Beef patty",
        "Bacon",
        "BBQ sauce",
        "Cheddar cheese",
        "Onion"
    ],

    steps: [
        "Cook the beef patty.",
        "Fry the bacon.",
        "Toast the buns.",
        "Layer the patty, cheese, bacon, onion, and BBQ sauce.",
        "Serve immediately."
    ]
},

{
    name: "Chicken Burger Deluxe",
    image: "images/burger.jpg",
    category: "Burger",
    ingredients: [
        "Burger bun",
        "Grilled chicken breast",
        "Lettuce",
        "Tomato",
        "Cheddar cheese",
        "Mayonnaise"
    ],

    steps: [
        "Grill the chicken breast.",
        "Toast the buns.",
        "Layer lettuce, tomato, chicken, and cheese.",
        "Spread mayonnaise.",
        "Serve warm."
    ]
},

{
    name: "Double Beef Burger",
    image: "images/burger.jpg",
    category: "Burger",
    ingredients: [
        "Burger bun",
        "2 beef patties",
        "Cheddar cheese",
        "Lettuce",
        "Tomato",
        "Burger sauce"
    ],

    steps: [
        "Cook both beef patties.",
        "Melt cheese over each patty.",
        "Toast the buns.",
        "Stack both patties with vegetables.",
        "Add burger sauce and serve."
    ]
},

{
    name: "Onion Ring Burger",
    image: "images/burger.jpg",
    category: "Burger",
    ingredients: [
        "Burger bun",
        "Beef patty",
        "Onion rings",
        "Cheddar cheese",
        "BBQ sauce"
    ],

    steps: [
        "Cook the beef patty.",
        "Prepare crispy onion rings.",
        "Toast the buns.",
        "Layer the burger with onion rings and cheese.",
        "Drizzle BBQ sauce.",
        "Serve hot."
    ]
},

{
    name: "Avocado Burger",
    image: "images/burger.jpg",
    category: "Burger",
    ingredients: [
        "Burger bun",
        "Beef patty",
        "Avocado",
        "Lettuce",
        "Tomato",
        "Mayonnaise"
    ],

    steps: [
        "Cook the beef patty.",
        "Slice the avocado.",
        "Toast the buns.",
        "Assemble with lettuce, tomato, avocado, and mayonnaise.",
        "Serve fresh."
    ]
},

{
    name: "Teriyaki Burger",
    image: "images/burger.jpg",
    category: "Burger",
    ingredients: [
        "Burger bun",
        "Beef patty",
        "Teriyaki sauce",
        "Lettuce",
        "Onion",
        "Sesame seeds"
    ],

    steps: [
        "Cook the beef patty.",
        "Brush with teriyaki sauce.",
        "Toast the buns.",
        "Add lettuce and onion.",
        "Sprinkle sesame seeds before serving."
    ]
},

{
    name: "Classic Hamburger",
    image: "images/burger.jpg",
    category: "Burger",
    ingredients: [
        "Burger bun",
        "Beef patty",
        "Lettuce",
        "Tomato",
        "Onion",
        "Ketchup",
        "Mustard"
    ],

    steps: [
        "Cook the beef patty until done.",
        "Toast the burger buns.",
        "Layer lettuce, tomato, onion, and the patty.",
        "Add ketchup and mustard.",
        "Serve immediately."
    ]
},
{
    name: "Mexican Burger",
    image: "images/burger.jpg",
    category: "Burger",
    ingredients: [
        "Burger bun",
        "Beef patty",
        "Cheddar cheese",
        "Jalapeños",
        "Salsa",
        "Lettuce"
    ],

    steps: [
        "Cook the beef patty until fully cooked.",
        "Toast the burger buns.",
        "Place lettuce on the bottom bun.",
        "Add the beef patty and cheddar cheese.",
        "Top with salsa and jalapeños.",
        "Cover with the top bun and serve."
    ]
},

{
    name: "Egg Cheeseburger",
    image: "images/burger.jpg",
    category: "Burger",
    ingredients: [
        "Burger bun",
        "Beef patty",
        "Cheddar cheese",
        "1 fried egg",
        "Lettuce",
        "Mayonnaise"
    ],

    steps: [
        "Cook the beef patty.",
        "Fry the egg until the yolk is slightly runny.",
        "Toast the burger buns.",
        "Layer lettuce, beef patty, cheese, and fried egg.",
        "Spread mayonnaise on the top bun.",
        "Serve immediately."
    ]
},

{
    name: "Crispy Chicken Burger",
    image: "images/burger.jpg",
    category: "Burger",
    ingredients: [
        "Burger bun",
        "Crispy chicken fillet",
        "Lettuce",
        "Tomato",
        "Mayonnaise",
        "Pickles"
    ],

    steps: [
        "Cook the crispy chicken fillet until golden.",
        "Toast the burger buns.",
        "Place lettuce and tomato on the bottom bun.",
        "Add the crispy chicken fillet.",
        "Top with pickles and mayonnaise.",
        "Serve while hot."
    ]
},

{
    name: "Mushroom BBQ Burger",
    image: "images/burger.jpg",
    category: "Burger",
    ingredients: [
        "Burger bun",
        "Beef patty",
        "Mushrooms",
        "BBQ sauce",
        "Cheddar cheese",
        "Butter"
    ],

    steps: [
        "Cook the beef patty until done.",
        "Sauté the mushrooms in butter.",
        "Toast the burger buns.",
        "Layer the patty, cheese, mushrooms, and BBQ sauce.",
        "Close the burger and serve warm."
    ]
},
];