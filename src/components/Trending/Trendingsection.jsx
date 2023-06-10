import React from "react";
import RecipeCard from "../Card/RecipeCard";
import "./Trendingsection.css";

function Trendingsection() {
  const blueberry_pancakes = "https://www.allrecipes.com/thmb/ecb0XKvcrE7OyxBLX3OVEd30TbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/686460-todds-famous-blueberry-pancakes-Dianne-1x1-1-9bd040b975634bce884847ce2090de16.jpg";
  const tandoori_chicken =
    "https://therecipecritic.com/wp-content/uploads/2020/02/tandoorichicken-500x375.jpg";

  const masala_dosa =
    "https://media-cdn2.greatbritishchefs.com/media/cqfbszpf/pali-hill0064-selects.jpg";
  return (
    <>
      <div className="first-half">
        <svg
          width="312"
          height="5"
          viewBox="0 0 312 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 4H311.5" stroke="white" stroke-width="7" />
        </svg>

        <p id="ht">Trending recipes</p>
        <svg
          width="312"
          height="5"
          viewBox="0 0 312 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 4H311.5" stroke="white" stroke-width="7" />
        </svg>
      </div>
      <div className="second-half">
      
      </div>
      

      <div className="contain">
        <RecipeCard
          title="Pancakes with blueberries"
          imageUrl={blueberry_pancakes}
          reqtime="20"
          ingredients="10"
          key= "1"
          procedure={"3/4 cup milk, 2 tablespoon white vinegar, 1 cup flour, 2 tablespoon sugar, 1 teaspoon baking powder, 1/2 teaspoon baking soda, 1/2 teaspoon salt, 1 egg, 2 tablespoon melted butter, 1+ cup fresh blueberries, more butter for the pan"}
          description={"1) Mix the milk and vinegar and let it sit for a minute or two (you’re making “buttermilk” here).2) Whisk the dry ingredients together. Whisk the egg, milk, and melted butter into the dry ingredients until just combined.3) Heat a nonstick pan over medium heat. Melt a little smear of butter in the pan (essential for giving a yummy golden brown crust).4) Pour about 1/3 cup of batter into the hot skillet and spread it flat-like (it will be pretty thick). Arrange a few blueberries on top. Cook until you see little bubbles on top and the edges starting to firm up. Flip and cook for another 1-2 minutes until the pancakes are sky-high fluffy and cooked through.5)Serve with butter and maple syrup. "}
        />
        <RecipeCard
          title="Tandoori chicken"
          imageUrl={tandoori_chicken}
          reqtime = "45"
          ingredients="30"
          key= "2"
          procedure={"Chicken, Yogurt, Lemon juice, Ginger-garlic paste, Tandoori masala, Red chili powder, Garam masala, Salt, Vegetable oil, Fresh coriander leaves (cilantro)"}
          description={"To make tandoori chicken, start by making a marinade by combining yogurt, lemon juice, ginger-garlic paste, tandoori masala, red chili powder, garam masala, and salt in a bowl. Mix well until all the ingredients are thoroughly combined. Add the chicken pieces to the marinade and coat them evenly. Allow the chicken to marinate for at least 2 hours, or preferably overnight in the refrigerator. When ready to cook, preheat the grill or oven to medium-high heat. If grilling, oil the grill grates to prevent sticking. Place the marinated chicken on the grill or in a baking dish if using the oven. Cook the chicken, turning occasionally, until it is cooked through and has a slightly charred and smoky flavor, usually around 20-25 minutes on the grill or 25-30 minutes in the oven at 400°F (200°C). Use a meat thermometer to ensure the internal temperature of the chicken reaches 165°F (74°C). Once cooked, remove the chicken from the heat and let it rest for a few minutes. Garnish with fresh coriander leaves (cilantro) if desired. Serve the tandoori chicken hot and enjoy!"}
        />
        <RecipeCard
          title="masala dosa"
          imageUrl={masala_dosa}
          reqtime="40"
          ingredients="10"
          key= "3"
          procedure={"Dosa Batter, Potatoes, Onion, Green Chilies, Ginger, Mustard Seeds, Curry Leaves, Turmeric Powder, Vegetable Oil, Salt"}
          description={"To make masala dosa, start by preparing the potato filling. Heat some vegetable oil in a pan and add mustard seeds. Once they start spluttering, add curry leaves, chopped onions, green chilies, and grated ginger. Sauté until the onions turn translucent. Then, add turmeric powder and mashed potatoes to the pan, mixing everything well. Season with salt to taste and cook for a few minutes until the flavors are well combined. Set the potato filling aside. Heat a non-stick dosa tawa or a flat pan on medium-high heat. Pour a ladleful of dosa batter onto the hot tawa and spread it in a circular motion to make a thin dosa. Drizzle some oil around the edges and cook until the dosa turns golden brown and crisp. Place a portion of the prepared potato filling in the center of the dosa and fold it over to form a roll or a semi-circle. Repeat the process to make more dosas. Serve hot with coconut chutney, sambar, or any other desired accompaniments. Enjoy the delicious masala dosa!"}
        />
      </div>
   
    </>
  );
}

export default Trendingsection;
