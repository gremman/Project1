# Project1

Project Title: Fullstack Eats: The beauty and brains of cooking

Team members: Eli Bresler, Glory Avina, Rudy Rodriguez

Project description: 
    User is able to look up a specific food dish (e.g., lasagna, pot roast), and it brings back two things:
    1) from the pinterest API, examples of how to display the food in a chic way, provides recipe, and ingredients to buy
    2) from the recipe-food-nutrition API, nutritional value and price breakdown
    This way the user is able to see both how the dish can look and details of the dish (price, nutrition)

Sketch of final product:
    Banner with instructions for how to use the app 
    Search bar for user to input food dish
    Pinterest board bank where the boards will populate (6)
        redirected to pinterest page
    Recipe-Food-Nutrition will display the meal snapshot of the general price to make the dish and nutrition
    Use Firebase to store what meal was just looked up and create a button so that the user can go back to it

APIs to use:
    Recipe-Food-Nutrition: https://market.mashape.com/spoonacular/recipe-food-nutrition
    Pinterest: https://market.mashape.com/ismaelc/pinterest-1#show-user-pins

Breakdown of tasks/features:
    Front-end:
        Display
            Banner/Instructions
            Form/User input
            Div for Pinterest API data
            Div for Food API
                General Price 
                General Nutritional data
            Button bank for search queries
            Overall styling

    Back-end:
        Firebase
        API querying
            AJAX calls to 
                Pinterest
                Recipe-Food-Nutrition
        Page deployment to GitHub
        Troubleshooting

    Next steps:
        Register and get API keys (Rudy)
        Become familiar with APIs (All)
        Project skeleton (Eli)
            html/css/js/images/links:BS,JQ
        Webpage outline (Glory)
            Header, container, divs
        Firebase and enter the code (Glory)

If there's time...
    Timer element? Something pops up if you're on the page for a while
    GoogleMaps...local market closest to user
