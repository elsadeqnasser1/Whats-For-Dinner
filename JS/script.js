var btnTry = document.getElementById("btn-try");
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var people = document.getElementById("people");
var cookTime = document.getElementById("cookTime");
var prepTIME = document.getElementById("prepTime");
var star = document.getElementById("star");
var reviews = document.getElementById("reviews");
var mealImg = document.getElementById("img");
var mealName = document.getElementById("mealName");
var mealDec = document.getElementById("mealDes");
var iconWarning = document.getElementById("icon-warning");
var warningH5 = document.getElementById("warning-h5");
var warningP = document.getElementById("warning-p");
var ingredient1 = document.getElementById("ingredient1");
var ingredient2 = document.getElementById("ingredient2");
var ingredient3 = document.getElementById("ingredient3");
var ingredient4 = document.getElementById("ingredient4");
var ingredient5 = document.getElementById("ingredient5");
var ingredient6 = document.getElementById("ingredient6");
var ingredient7 = document.getElementById("ingredient7");
var ingredient8 = document.getElementById("ingredient8");
var ingredient9 = document.getElementById("ingredient9");
var instruction1 = document.getElementById("instruction1");
var instruction2 = document.getElementById("instruction2");
var instruction3 = document.getElementById("instruction3");
var instruction4 = document.getElementById("instruction4");
var instruction5 = document.getElementById("instruction5");
var instruction6 = document.getElementById("instruction6");
var caloriesValue = document.getElementById("caloriesValue");
var proteinValue = document.getElementById("proteinValue");
var carbsValue = document.getElementById("carbsValue");
var fatValue = document.getElementById("fatValue");
var fiberValue = document.getElementById("fiberValue");
var sodiumValue = document.getElementById("sodiumValue");
var tip1 = document.getElementById("tip1");
var tip2 = document.getElementById("tip2");
var tip3 = document.getElementById("tip3");
var tip4 = document.getElementById("tip4");
var tabs = document.querySelectorAll(".tab");
var recipeDetails = document.querySelector(".recipe-details");
var contents = document.querySelectorAll(".tab-pane");
var tab1 = document.querySelector(".tab1");
var tab2 = document.querySelector(".tab2");
var tab3 = document.querySelector(".tab3");
var tab4 = document.querySelector(".tab4");

var meals = [
  // 1
  {
    span1: "Intermediate",
    span2: "Mediterranean",
    people: "Mediterranean",
    cookTime: "60 min",
    prepTime: "15 min",
    star: "4.7",
    reviews: "(267 reviews)",
    mealImg: "images/photo-1547592166-23ac45744acd.jpg",
    mealName: "French Onion Soup",
    mealDec: "Rich beef broth with caramelized onions and melted cheese",
    iconWarning: " <i class='fa-solid fa-triangle-exclamation'></i>",
    warningH5: "Extended Preparation Time",
    warningP:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",
    ingredient1: "4 large onions, thinly sliced",
    ingredient2: "4 tablespoons butter",
    ingredient3: "1 liter beef broth",
    ingredient4: "1/2 cup white wine",
    ingredient5: "2 bay leaves",
    ingredient6: "Fresh thyme",
    ingredient7: "Baguette slices",
    ingredient8: "200g Gruyère cheese, grated",
    ingredient9: "",
    instruction1:
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
    instruction2: "Add white wine and deglaze the pot, scraping up brown bits.",
    instruction3:
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
    instruction4: "Meanwhile, toast baguette slices until golden.",
    instruction5:
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
    instruction6:
      "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
    caloriesValue: "380 kcal",
    proteinValue: "18g",
    carbsValue: "36g",
    fatValue: "18g",
    fiberValue: "4g",
    sodiumValue: "980mg",
    tip1: "Patience is key - don't rush the onion caramelization",
    tip2: "Use good quality beef broth for best flavor",
    tip3: "Gruyère can be substituted with Swiss cheese",
    tip4: "Watch carefully when broiling to avoid burning",
  },
  // 2
  {
    span1: "Easy",
    span2: "Italian",
    people: "4 people",
    cookTime: "20 min",
    prepTime: "15 min",
    star: "4.8",
    reviews: "(234 reviews)",
    mealImg: "images/photo-1612874742237-6526221588e3.jpg",
    mealName: "Creamy Spaghetti Carbonara",
    mealDec: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    iconWarning: "",
    warningH5: "",
    warningP: "",
    ingredient1: "400g spaghetti pasta",
    ingredient2: "200g pancetta or guanciale, diced",
    ingredient3: "4 large eggs",
    ingredient4: "100g Pecorino Romano cheese, grated",
    ingredient5: "50g Parmesan cheese, grated",
    ingredient6: "Freshly ground black pepper",
    ingredient7: "Salt for pasta water",
    ingredient8: "",
    ingredient9: "",
    instruction1:
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
    instruction2:
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
    instruction3:
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
    instruction4:
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
    instruction5:
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
    instruction6:
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
    caloriesValue: "520 kcal",
    proteinValue: "28g",
    carbsValue: "62g",
    fatValue: "18g",
    fiberValue: "3g",
    sodiumValue: "680mg",
    tip1: "Use room temperature eggs for a smoother sauce consistency",
    tip2: "Work quickly when mixing eggs with hot pasta to avoid scrambling",
    tip3: "Reserve extra pasta water - it's the secret to perfect creaminess",
    tip4: "Freshly grated cheese makes all the difference in flavor",
  },
  // 3
  {
    span1: "Easy",
    span2: "Asian",
    people: "4 people",
    cookTime: "15 min",
    prepTime: "15 min",
    star: "4.5",
    reviews: "(324 reviews)",
    mealImg: "images/photo-1603133872878-684f208fb84b.jpg",
    mealName: "Chicken Stir-Fry",
    mealDec: "Quick and healthy stir-fry with colorful vegetables",
    iconWarning: "",
    warningH5: "",
    warningP: "",
    ingredient1: "500g chicken breast, sliced",
    ingredient2: "2 bell peppers, sliced",
    ingredient3: "1 broccoli head, florets",
    ingredient4: "2 carrots, julienned",
    ingredient5: "3 tablespoons soy sauce",
    ingredient6: "2 tablespoons oyster sauce",
    ingredient7: "1 tablespoon sesame oil",
    ingredient8: "2 cloves garlic, minced",
    ingredient9: "Fresh ginger, grated",
    instruction1: "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
    instruction2:
      "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
    instruction3:
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
    instruction4:
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
    instruction5:
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
    instruction6: "Serve immediately over steamed rice or noodles.",
    caloriesValue: "320 kcal",
    proteinValue: "34g",
    carbsValue: "18g",
    fatValue: "12g",
    fiberValue: "5g",
    sodiumValue: "840mg",
    tip1: "Cut all ingredients before starting to cook",
    tip2: "Keep heat high for authentic stir-fry texture",
    tip3: "Don't overcrowd the wok or vegetables will steam",
    tip4: "Add cashews or peanuts for extra crunch",
  },
  // 4
  {
    span1: "Easy",
    span2: "American",
    people: "4 people",
    cookTime: "240 min",
    prepTime: "15 min",
    star: "4.7",
    reviews: "(412 reviews)",
    mealImg: "images/photo-1529692236671-f1f6cf9683ba.jpg",
    mealName: "BBQ Pulled Pork",
    mealDec: "Slow-cooked tender pork in smoky barbecue sauce",
    iconWarning: "<i class='fa-solid fa-triangle-exclamation'></i>",
    warningH5: "Extended Preparation Time",
    warningP:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",
    ingredient1: "1kg pork shoulder",
    ingredient2: "1 cup BBQ sauce",
    ingredient3: "1/2 cup apple cider vinegar",
    ingredient4: "2 tablespoons brown sugar",
    ingredient5: "1 tablespoon paprika",
    ingredient6: "1 tablespoon garlic powder",
    ingredient7: "Burger buns",
    ingredient8: "Coleslaw for serving",
    ingredient9: "",
    instruction1:
      "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
    instruction2:
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
    instruction3:
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
    instruction4: "Remove pork and shred with two forks. Discard excess fat.",
    instruction5: "Return shredded pork to slow cooker, mix with BBQ sauce.",
    instruction6: "Serve on toasted buns with coleslaw on top.",
    caloriesValue: "620 kcal",
    proteinValue: "48g",
    carbsValue: "52g",
    fatValue: "22g",
    fiberValue: "2g",
    sodiumValue: "1180mg",
    tip1: "Use pork shoulder for best results - it stays moist",
    tip2: "Let pork rest before shredding for juicier meat",
    tip3: "Make your own BBQ sauce for better flavor",
    tip4: "Leftovers freeze well for up to 3 months",
  },
  // 5
  {
    span1: "Easy",
    span2: "Italian",
    people: "2 people",
    cookTime: "5 min",
    prepTime: "10 min",
    star: "4.5",
    reviews: "(189 reviews)",
    mealImg: "images/photo-1509722747041-616f39b57569.jpg",
    mealName: "Caprese Sandwich",
    mealDec: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    iconWarning: "",
    warningH5: "",
    warningP: "",
    ingredient1: "1 ciabatta bread",
    ingredient2: "200g fresh mozzarella, sliced",
    ingredient3: "2 large tomatoes, sliced",
    ingredient4: "Fresh basil leaves",
    ingredient5: "3 tablespoons pesto",
    ingredient6: "2 tablespoons balsamic glaze",
    ingredient7: "Olive oil",
    ingredient8: "Salt and pepper",
    ingredient9: "",
    instruction1: "Slice ciabatta bread in half horizontally.",
    instruction2: "Toast bread lightly until just crispy.",
    instruction3: "Spread pesto on both sides of bread.",
    instruction4:
      "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
    instruction5:
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
    instruction6: "Close sandwich, cut in half, and serve immediately.",
    caloriesValue: "480 kcal",
    proteinValue: "22g",
    carbsValue: "48g",
    fatValue: "22g",
    fiberValue: "3g",
    sodiumValue: "680mg",
    tip1: "Use ripe, in-season tomatoes for best flavor",
    tip2: "Buffalo mozzarella is traditional but harder to slice",
    tip3: "Toast bread lightly - not too crispy",
    tip4: "Add prosciutto or salami for a heartier sandwich",
  },
  // 6
  {
    span1: "Intermediate",
    span2: "Mediterranean",
    people: "4 people",
    cookTime: "60 min",
    prepTime: "30 min",
    star: "4.8",
    reviews: "(234 reviews)",
    mealImg: "images/photo-1601050690597-df0568f70950.jpg",
    mealName: "Greek Moussaka",
    mealDec: "Traditional layered eggplant casserole with lamb",
    iconWarning: "<i class='fa-solid fa-triangle-exclamation'></i>",
    warningH5: "Extended Preparation Time",
    warningP:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",
    ingredient1: "3 large eggplants, sliced",
    ingredient2: "500g ground lamb",
    ingredient3: "400g canned tomatoes",
    ingredient4: "1 onion, diced",
    ingredient5: "3 cloves garlic, minced",
    ingredient6: "500ml béchamel sauce",
    ingredient7: "100g parmesan cheese",
    ingredient8: "Cinnamon and oregano",
    ingredient9: "Olive oil",
    instruction1:
      "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
    instruction2:
      "Brush eggplant slices with olive oil, grill or bake until softened.",
    instruction3:
      "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
    instruction4: "Preheat oven to 180°C (350°F).",
    instruction5:
      "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
    instruction6:
      "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
    caloriesValue: "580 kcal",
    proteinValue: "36g",
    carbsValue: "32g",
    fatValue: "32g",
    fiberValue: "8g",
    sodiumValue: "820mg",
    tip1: "Salt eggplant to remove bitterness",
    tip2: "Don't skip the resting time - it helps set the layers",
    tip3: "Use ground beef if lamb is unavailable",
    tip4: "Make ahead and reheat for easier serving",
  },
  // 7
  {
    span1: "Easy",
    span2: "Seafood",
    people: "2 people",
    cookTime: "15 min",
    prepTime: "10 min",
    star: "4.9",
    reviews: "(187 reviews)",
    mealImg: "images/photo-1467003909585-2f8a72700288.jpg",
    mealName: "Honey Garlic Salmon",
    mealDec: "Pan-seared salmon with a sweet and savory glaze",
    iconWarning: "",
    warningH5: "",
    warningP: "",
    ingredient1: "2 salmon fillets (6oz each)",
    ingredient2: "3 tablespoons honey",
    ingredient3: "2 tablespoons soy sauce",
    ingredient4: "4 cloves garlic, minced",
    ingredient5: "1 tablespoon olive oil",
    ingredient6: "1 teaspoon fresh ginger, grated",
    ingredient7: "Sesame seeds for garnish",
    ingredient8: "Green onions, sliced",
    ingredient9: "",
    instruction1:
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
    instruction2:
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
    instruction3: "Heat olive oil in a large skillet over medium-high heat.",
    instruction4:
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
    instruction5:
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
    instruction6:
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    caloriesValue: "380 kcal",
    proteinValue: "35g",
    carbsValue: "28g",
    fatValue: "14g",
    fiberValue: "0g",
    sodiumValue: "720mg",
    tip1: "Don't overcook salmon - it should be slightly pink in the center",
    tip2: "Use wild-caught salmon for best flavor and nutrition",
    tip3: "Let the sauce caramelize slightly for deeper flavor",
    tip4: "Pair with steamed broccoli or asparagus for a complete meal",
  },
  // 8
  {
    span1: "Easy",
    span2: "American",
    people: "4 people",
    cookTime: "20 min",
    prepTime: "15 min",
    star: "4.6",
    reviews: "(278 reviews)",
    mealImg: "images/photo-1565299585323-38d6b0865b47.jpg",
    mealName: "Beef Tacos",
    mealDec: "Flavorful Mexican tacos with seasoned ground beef",
    iconWarning: "",
    warningH5: "",
    warningP: "",
    ingredient1: "500g ground beef",
    ingredient2: "8 taco shells",
    ingredient3: "1 onion, diced",
    ingredient4: "2 tablespoons taco seasoning",
    ingredient5: "Shredded lettuce",
    ingredient6: "Diced tomatoes",
    ingredient7: "Shredded cheddar cheese",
    ingredient8: "Sour cream",
    ingredient9: "Salsa",
    instruction1:
      "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
    instruction2: "Add diced onion and cook until softened, about 5 minutes.",
    instruction3:
      "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
    instruction4: "Warm taco shells according to package directions.",
    instruction5: "Fill each shell with seasoned beef.",
    instruction6:
      "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately.",
    caloriesValue: "420 kcal",
    proteinValue: "26g",
    carbsValue: "32g",
    fatValue: "20g",
    fiberValue: "4g",
    sodiumValue: "780mg",
    tip1: "Drain excess fat from beef for healthier tacos",
    tip2: "Warm shells in oven for better texture",
    tip3: "Prepare all toppings before cooking beef",
    tip4: "Use ground turkey for a lighter option",
  },
  // 9
  {
    span1: "Easy",
    span2: "Asian",
    people: "4 people",
    cookTime: "30 min",
    prepTime: "20 min",
    star: "4.6",
    reviews: "(289 reviews)",
    mealImg: "images/photo-1585032226651-759b368d7246.jpg",
    mealName: "Vegetable Curry",
    mealDec: "Hearty vegetarian curry with coconut milk",
    iconWarning: "<i class='fa-solid fa-triangle-exclamation'></i>",
    warningH5: "Extended Preparation Time",
    warningP:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",
    ingredient1: "2 potatoes, cubed",
    ingredient2: "1 cauliflower, florets",
    ingredient3: "2 carrots, sliced",
    ingredient4: "1 can chickpeas",
    ingredient5: "400ml coconut milk",
    ingredient6: "3 tablespoons curry powder",
    ingredient7: "1 onion, diced",
    ingredient8: "3 cloves garlic, minced",
    ingredient9: "Fresh spinach",
    instruction1:
      "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute",
    instruction2: "Add potatoes and carrots, cook for 5 minutes.",
    instruction3: "Pour in coconut milk and 1 cup water. Bring to simmer.",
    instruction4:
      "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
    instruction5: "Stir in fresh spinach and cook until wilted.",
    instruction6: "Serve hot over basmati rice or with naan bread.",
    caloriesValue: "380 kcal",
    proteinValue: "14g",
    carbsValue: "48g",
    fatValue: "16g",
    fiberValue: "12g",
    sodiumValue: "480mg",
    tip1: "Add vegetables in order of cooking time needed",
    tip2: "Adjust curry powder amount to taste",
    tip3: "Use full-fat coconut milk for creamier curry",
    tip4: "Add protein like tofu or paneer if desired",
  },
  // 10
  {
    span1: "Intermediate",
    span2: "Asian",
    people: "4 people",
    cookTime: "30 min",
    prepTime: "20 min",
    star: "4.7",
    reviews: "(389 reviews)",
    mealImg: "images/photo-1565557623262-b51c2513a641.jpg",
    mealName: "Chicken Tikka Masala",
    mealDec: "Rich and creamy Indian curry with tender chicken pieces",
    iconWarning: "<i class='fa-solid fa-triangle-exclamation'></i>",
    warningH5: "Extended Preparation Time",
    warningP:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",
    ingredient1: "600g chicken breast, cubed",
    ingredient2: "1 cup plain yogurt",
    ingredient3: "2 tablespoons tikka masala paste",
    ingredient4: "400ml coconut cream",
    ingredient5: "1 onion, diced",
    ingredient6: "4 cloves garlic, minced",
    ingredient7: "2 tablespoons ginger, grated",
    ingredient8: "400g canned tomatoes",
    ingredient9: "Fresh cilantro for garnish",
    instruction1:
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
    instruction2:
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
    instruction3:
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
    instruction4:
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
    instruction5:
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
    instruction6:
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
    caloriesValue: "450 kcal",
    proteinValue: "38g",
    carbsValue: "24g",
    fatValue: "22g",
    fiberValue: "4g",
    sodiumValue: "760mg",
    tip1: "Marinate chicken overnight for deeper flavor",
    tip2: "Use full-fat coconut cream for richest sauce",
    tip3: "Adjust spice level by varying the tikka paste amount",
    tip4: "Serve with naan bread and basmati rice",
  },
  // 11
  {
    span1: "Intermediate",
    span2: "Italian",
    people: "2 people",
    cookTime: "12 min",
    prepTime: "90 min",
    star: "4.9",
    reviews: "(512 reviews)",
    mealImg: "images/photo-1574071318508-1cdbab80d002.jpg",
    mealName: "Margherita Pizza",
    mealDec: "Classic Italian pizza with fresh mozzarella and basil",
    iconWarning: "<i class='fa-solid fa-triangle-exclamation'></i>",
    warningH5: "Extended Preparation Time",
    warningP:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",
    ingredient1: "300g pizza dough",
    ingredient2: "200g crushed tomatoes",
    ingredient3: "250g fresh mozzarella",
    ingredient4: "Fresh basil leaves",
    ingredient5: "2 tablespoons olive oil",
    ingredient6: "2 cloves garlic, minced",
    ingredient7: "Salt and pepper to taste",
    ingredient8: "Parmesan cheese for topping",
    ingredient9: "",
    instruction1:
      "Let pizza dough come to room temperature and rest for 1 hour.",
    instruction2: "Preheat oven to maximum temperature (usually 250°C/480°F).",
    instruction3:
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
    instruction4: "Roll out dough on a floured surface to desired thickness.",
    instruction5:
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
    instruction6:
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
    caloriesValue: "580 kcal",
    proteinValue: "24g",
    carbsValue: "68g",
    fatValue: "22g",
    fiberValue: "4g",
    sodiumValue: "920mg",
    tip1: "Use a pizza stone for crispier crust",
    tip2: "Don't overload with toppings - less is more",
    tip3: "Add basil after baking to keep it fresh",
    tip4: "Let dough rest properly for best texture",
  },
  // 12

  {
    span1: "Easy",
    span2: "Mediterranean",
    people: "2 people",
    cookTime: "35 min",
    prepTime: "20 min",
    star: "4.5",
    reviews: "(156 reviews)",
    mealImg: "images/photo-1546069901-ba9599a7e63c.avif",
    mealName: "Mediterranean Quinoa Bowl",
    mealDec: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    iconWarning: "<i class='fa-solid fa-triangle-exclamation'></i>",
    warningH5: "Extended Preparation Time",
    warningP:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",
    ingredient1: "1 cup quinoa",
    ingredient2: "Cherry tomatoes, halved",
    ingredient3: "Cucumber, diced",
    ingredient4: "Red onion, sliced",
    ingredient5: "Kalamata olives",
    ingredient6: "Feta cheese, crumbled",
    ingredient7: "Fresh parsley",
    ingredient8: "Tahini dressing",
    ingredient9: "",
    instruction1:
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
    instruction2: "While quinoa cooks, prepare all vegetables and set aside.",
    instruction3:
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
    instruction4: "Fluff cooked quinoa with a fork and let cool slightly.",
    instruction5:
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
    instruction6:
      "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",
    caloriesValue: "480 kcal",
    proteinValue: "18g",
    carbsValue: "58g",
    fatValue: "20g",
    fiberValue: "10g",
    sodiumValue: "540mg",
    tip1: "Rinse quinoa well to remove bitter coating",
    tip2: "Let quinoa cool before adding fresh ingredients",
    tip3: "Make extra tahini dressing - it keeps well in the fridge",
    tip4: "Add grilled chicken or chickpeas for extra protein",
  },
  // 13
  {
    span1: "Easy",
    span2: "Seafood",
    people: "2 people",
    cookTime: "15 min",
    prepTime: "10 min",
    star: "4.8",
    reviews: "(356 reviews)",
    mealImg: "images/photo-1633504581786-316c8002b1b9.jpg",
    mealName: "Shrimp Scampi",
    mealDec: "Garlicky shrimp in white wine butter sauce",
    iconWarning: "",
    warningH5: "",
    warningP: "",
    ingredient1: "400g large shrimp, peeled",
    ingredient2: "300g linguine pasta",
    ingredient3: "6 cloves garlic, minced",
    ingredient4: "1/2 cup white wine",
    ingredient5: "4 tablespoons butter",
    ingredient6: "2 tablespoons olive oil",
    ingredient7: "Fresh parsley, chopped",
    ingredient8: "Lemon juice and zest",
    ingredient9: "Red pepper flakes",
    instruction1:
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
    instruction2:
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
    instruction3:
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
    instruction4:
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
    instruction5:
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
    instruction6: "Garnish with parsley, lemon zest, and serve immediately.",
    caloriesValue: "520 kcal",
    proteinValue: "36g",
    carbsValue: "54g",
    fatValue: "18g",
    fiberValue: "3g",
    sodiumValue: "620mg",
    tip1: "Don't overcook shrimp - they cook very quickly",
    tip2: "Use good quality white wine for best flavor",
    tip3: "Toss pasta in sauce for maximum flavor absorption",
    tip4: "Add extra lemon for bright, fresh taste",
  },
  // 14
  {
    span1: "Intermediate",
    span2: "Asian",
    people: "2 people",
    cookTime: "15 min",
    prepTime: "20 min",
    star: "4.8",
    reviews: "(445 reviews)",
    mealImg: "images/photo-1559314809-0d155014e29e.jpg",
    mealName: "Pad Thai",
    mealDec: "Popular Thai stir-fried noodles with shrimp and peanuts",
    iconWarning: "",
    warningH5: "",
    warningP: "",
    ingredient1: "200g rice noodles",
    ingredient2: "200g shrimp, peeled",
    ingredient3: "2 eggs",
    ingredient4: "3 tablespoons tamarind paste",
    ingredient5: "2 tablespoons fish sauce",
    ingredient6: "1 tablespoon palm sugar",
    ingredient7: "Bean sprouts",
    ingredient8: "Crushed peanuts",
    ingredient9: "Lime wedges and cilantro",
    instruction1:
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
    instruction2:
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
    instruction3: "Heat wok over high heat. Scramble eggs and set aside.",
    instruction4:
      "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
    instruction5:
      "Add scrambled eggs and bean sprouts. Toss everything together.",
    instruction6:
      "Serve topped with crushed peanuts, lime wedges, and cilantro.",
    caloriesValue: "540 kcal",
    proteinValue: "32g",
    carbsValue: "62g",
    fatValue: "16g",
    fiberValue: "4g",
    sodiumValue: "1120mg",
    tip1: "Don't oversoak noodles or they'll be mushy",
    tip2: "Cook on high heat for authentic wok flavor",
    tip3: "Balance sweet, sour, and salty flavors",
    tip4: "Prepare all ingredients before starting to cook",
  },
  // 15
  {
    span1: "Easy",
    span2: "American",
    people: "4 people",
    cookTime: "20 min",
    prepTime: "15 min",
    star: "4.6",
    reviews: "(421 reviews)",
    mealImg: "images/photo-1568901346375-23c9450c58cd.jpg",
    mealName: "Classic Beef Burger",
    mealDec: "Juicy homemade burger with all the fixings",
    iconWarning: "",
    warningH5: "",
    warningP: "",
    ingredient1: "500g ground beef (80/20)",
    ingredient2: "4 burger buns",
    ingredient3: "4 slices cheddar cheese",
    ingredient4: "Lettuce leaves",
    ingredient5: "Tomato slices",
    ingredient6: "Red onion, sliced",
    ingredient7: "Pickles",
    ingredient8: "Burger sauce or condiments",
    ingredient9: "",
    instruction1:
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
    instruction2:
      "Season patties generously with salt and pepper on both sides.",
    instruction3:
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
    instruction4:
      "Add cheese slices in the last minute of cooking and cover to melt.",
    instruction5: "Toast burger buns lightly on the grill or in a pan.",
    instruction6:
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
    caloriesValue: "650 kcal",
    proteinValue: "38g",
    carbsValue: "42g",
    fatValue: "35g",
    fiberValue: "2g",
    sodiumValue: "920mg",
    tip1: "Don't press down on burgers while cooking - keeps them juicy",
    tip2: "Make indent in center to prevent burger from puffing up",
    tip3: "Let patties rest for 2-3 minutes before serving",
    tip4: "Toast buns for better texture and flavor",
  },
  // 16
  {
    span1: "Easy",
    span2: "Mediterranean",
    people: "2 people",
    cookTime: "0 min",
    prepTime: "15 min",
    star: "4.4",
    reviews: "(198 reviews)",
    mealImg: "images/photo-1546793665-c74683f339c1.avif",
    mealName: "Caesar Salad",
    mealDec: "Classic salad with crispy romaine and creamy dressing",
    iconWarning: "",
    warningH5: "",
    warningP: "",
    ingredient1: "<span>1</span>1 large romaine lettuce",
    ingredient2: "1/2 cup Caesar dressing",
    ingredient3: "1/2 cup parmesan cheese, shaved",
    ingredient4: "1 cup croutons",
    ingredient5: "2 anchovy fillets (optional)",
    ingredient6: "Lemon wedges",
    ingredient7: "Black pepper",
    ingredient8: "",
    ingredient9: "",
    instruction1:
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
    instruction2: "Place lettuce in a large salad bowl.",
    instruction3: "Add Caesar dressing and toss until evenly coated.",
    instruction4: "Add croutons and half the parmesan cheese. Toss gently.",
    instruction5:
      "Top with remaining parmesan shavings and anchovies if using.",
    instruction6: "Serve immediately with lemon wedges and fresh black pepper.",
    caloriesValue: "320 kcal",
    proteinValue: "12g",
    carbsValue: "18g",
    fatValue: "22g",
    fiberValue: "3g",
    sodiumValue: "680mg",
    tip1: "Use cold, crisp lettuce for best texture",
    tip2: "Make homemade croutons for better flavor",
    tip3: "Add grilled chicken for a complete meal",
    tip4: "Don't dress salad until ready to serve",
  },
  // 17
  {
    span1: "Intermediate",
    span2: "Italian",
    people: "4 people",
    cookTime: "90 min",
    prepTime: "30 min",
    star: "4.9",
    reviews: "(478 reviews)",
    mealImg: "images/photo-1574894709920-11b28e7367e3.avif",
    mealName: "Lasagna Bolognese",
    mealDec: "Layered Italian pasta with rich meat sauce and béchamel",
    iconWarning: "<i class='fa-solid fa-triangle-exclamation'></i>",
    warningH5: "Extended Preparation Time",
    warningP:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",
    ingredient1: "12 lasagna sheets",
    ingredient2: "500g ground beef",
    ingredient3: "400g canned tomatoes",
    ingredient4: "1 onion, diced",
    ingredient5: "2 carrots, diced",
    ingredient6: "500ml béchamel sauce",
    ingredient7: "200g mozzarella, grated",
    ingredient8: "100g parmesan cheese",
    ingredient9: "Fresh basil",
    instruction1:
      "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
    instruction2:
      "Cook lasagna sheets according to package directions. Drain and set aside.",
    instruction3: "Preheat oven to 180°C (350°F).",
    instruction4:
      "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
    instruction5:
      "Top final layer with béchamel, mozzarella, and parmesan cheese.",
    instruction6:
      "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",
    caloriesValue: "680 kcal",
    proteinValue: "42g",
    carbsValue: "58g",
    fatValue: "28g",
    fiberValue: "6g",
    sodiumValue: "920mg",
    tip1: "Make bolognese sauce a day ahead for better flavor",
    tip2: "Don't skip the resting time after baking",
    tip3: "Use fresh pasta sheets for best texture",
    tip4: "Freeze leftovers in individual portions",
  },

  // 18
  {
    span1: "Easy",
    span2: "Asian",
    people: "2 people",
    cookTime: "20 min",
    prepTime: "15 min",
    star: "4.7",
    reviews: "(367 reviews)",
    mealImg: "images/photo-1546069901-eacef0df6022.avif",
    mealName: "Teriyaki Chicken Bowl",
    mealDec: "Sweet and savory chicken over rice with vegetables",
    iconWarning: "",
    warningH5: "",
    warningP: "",
    ingredient1: "400g chicken thighs, sliced",
    ingredient2: "1/2 cup teriyaki sauce",
    ingredient3: "2 cups cooked rice",
    ingredient4: "1 broccoli head, florets",
    ingredient5: "1 carrot, julienned",
    ingredient6: "Sesame seeds",
    ingredient7: "Green onions, sliced",
    ingredient8: "1 tablespoon sesame oil",
    ingredient9: "",
    instruction1:
      "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
    instruction2:
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
    instruction3: "Meanwhile, steam broccoli and carrots until tender-crisp.",
    instruction4: "Divide rice between bowls.",
    instruction5: "Top with teriyaki chicken and steamed vegetables.",
    instruction6: "Garnish with sesame seeds and green onions. Serve hot.",
    caloriesValue: "540 kcal",
    proteinValue: "42g",
    carbsValue: "58g",
    fatValue: "14g",
    fiberValue: "4g",
    sodiumValue: "1240mg",
    tip1: "Use chicken thighs for juicier meat",
    tip2: "Make homemade teriyaki sauce for better flavor control",
    tip3: "Add edamame for extra protein",
    tip4: "Meal prep by cooking rice and chicken ahead",
  },
  // 19
  {
    span1: "Intermediate",
    span2: "Asian",
    people: "4 people",
    cookTime: "25 min",
    prepTime: "15 min",
    star: "4.7",
    reviews: "(312 reviews)",
    mealImg: "images/photo-1455619452474-d2be8b1e70cd.avif",
    mealName: "Thai Green Curry",
    mealDec: "Vibrant and aromatic curry with vegetables and coconut milk",
    iconWarning: "",
    warningH5: "",
    warningP: "",
    ingredient1: "2 tablespoons green curry paste",
    ingredient2: "400ml coconut milk",
    ingredient3: "300g chicken breast, sliced",
    ingredient4: "1 red bell pepper, sliced",
    ingredient5: "100g green beans",
    ingredient6: "1 eggplant, cubed",
    ingredient7: "2 tablespoons fish sauce",
    ingredient8: "1 tablespoon palm sugar",
    ingredient9: "Fresh Thai basil leaves",
    instruction1:
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
    instruction2:
      "Add half the coconut milk and stir to combine with the curry paste.",
    instruction3:
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
    instruction4:
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
    instruction5:
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
    instruction6:
      "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
    caloriesValue: "420 kcal",
    proteinValue: "26g",
    carbsValue: "22g",
    fatValue: "26g",
    fiberValue: "5g",
    sodiumValue: "890mg",
    tip1: "Adjust spice level by using more or less curry paste",
    tip2: "Add vegetables in stages based on cooking time needed",
    tip3: "Fresh Thai basil is essential for authentic flavor",
    tip4: "Use full-fat coconut milk for richest, creamiest sauce",
  },
];


tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    
    tab1.classList.remove("active");
    tab2.classList.remove("active");
    tab3.classList.remove("active");
    tab4.classList.remove("active");

    tab.classList.add("active");

    contents.forEach(function (content) {
      content.style.display = "none";
      content.classList.remove("show", "active");
    });

    var tabName = tab.getAttribute("data-tab");
    var selectedContent = document.getElementById(tabName);

    selectedContent.style.display = "block";
    selectedContent.classList.add("show", "active");
  });
});

function displayMeal(meal) {
  span1.innerHTML = meal.span1;
  span2.innerHTML = meal.span2;

  people.innerHTML = meal.people;
  cookTime.innerHTML = meal.cookTime;
  prepTIME.innerHTML = meal.prepTime;

  star.innerHTML = meal.star;
  reviews.innerHTML = meal.reviews;

  mealImg.src = meal.mealImg;
  mealImg.alt = meal.mealName;

  mealName.innerHTML = meal.mealName;
  mealDec.innerHTML = meal.mealDec;

  iconWarning.innerHTML = meal.iconWarning;
  warningH5.innerHTML = meal.warningH5;
  warningP.innerHTML = meal.warningP;

  ingredient1.querySelector(".ingredient-text").textContent =
    meal.ingredient1 || "";
  ingredient2.querySelector(".ingredient-text").textContent =
    meal.ingredient2 || "";
  ingredient3.querySelector(".ingredient-text").textContent =
    meal.ingredient3 || "";
  ingredient4.querySelector(".ingredient-text").textContent =
    meal.ingredient4 || "";
  ingredient5.querySelector(".ingredient-text").textContent =
    meal.ingredient5 || "";
  ingredient6.querySelector(".ingredient-text").textContent =
    meal.ingredient6 || "";
  ingredient7.querySelector(".ingredient-text").textContent =
    meal.ingredient7 || "";
  ingredient8.querySelector(".ingredient-text").textContent =
    meal.ingredient8 || "";
  ingredient9.querySelector(".ingredient-text").textContent =
    meal.ingredient9 || "";

  instruction1.innerHTML = meal.instruction1;
  instruction2.innerHTML = meal.instruction2;
  instruction3.innerHTML = meal.instruction3;
  instruction4.innerHTML = meal.instruction4;
  instruction5.innerHTML = meal.instruction5;
  instruction6.innerHTML = meal.instruction6;

  caloriesValue.innerHTML = meal.caloriesValue;
  proteinValue.innerHTML = meal.proteinValue;
  carbsValue.innerHTML = meal.carbsValue;
  fatValue.innerHTML = meal.fatValue;
  fiberValue.innerHTML = meal.fiberValue;
  sodiumValue.innerHTML = meal.sodiumValue;

  tip1.innerHTML = meal.tip1 || "";
  tip2.innerHTML = meal.tip2 || "";
  tip3.innerHTML = meal.tip3 || "";
  tip4.innerHTML = meal.tip4 || "";

  ingredient1.querySelector(".ingredient-number").style.display =
    meal.ingredient1 ? "inline-flex" : "none";
  ingredient2.querySelector(".ingredient-number").style.display =
    meal.ingredient2 ? "inline-flex" : "none";
  ingredient3.querySelector(".ingredient-number").style.display =
    meal.ingredient3 ? "inline-flex" : "none";
  ingredient4.querySelector(".ingredient-number").style.display =
    meal.ingredient4 ? "inline-flex" : "none";
  ingredient5.querySelector(".ingredient-number").style.display =
    meal.ingredient5 ? "inline-flex" : "none";
  ingredient6.querySelector(".ingredient-number").style.display =
    meal.ingredient6 ? "inline-flex" : "none";
  ingredient7.querySelector(".ingredient-number").style.display =
    meal.ingredient7 ? "inline-flex" : "none";
  ingredient8.querySelector(".ingredient-number").style.display =
    meal.ingredient8 ? "inline-flex" : "none";
  ingredient9.querySelector(".ingredient-number").style.display =
    meal.ingredient9 ? "inline-flex" : "none";
  recipeDetails.querySelector(".warning").style.display = meal.iconWarning
    ? "d-flex"
    : "d-none";
  recipeDetails
    .querySelector(".warning")
    .classList.toggle("d-none", !meal.iconWarning);
}

function getRandomMeal() {
  var randomIndex = Math.floor(Math.random() * meals.length);
  var randomMeal = meals[randomIndex];

  displayMeal(randomMeal);
}

btnTry.addEventListener("click", function () {
  getRandomMeal();
});

getRandomMeal();
