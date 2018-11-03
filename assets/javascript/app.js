// Initialize Firebase

//   <!-- Firebase JavaScript Link -->

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB3cDJ2hSq1v4MQkdBGTg9Mcdd3XAwcTj4",
  authDomain: "fullstackeats.firebaseapp.com",
  databaseURL: "https://fullstackeats.firebaseio.com",
  projectId: "fullstackeats",
  storageBucket: "fullstackeats.appspot.com",
  messagingSenderId: "994105971812"
};
firebase.initializeApp(config);
<<<<<<< HEAD
=======

// GROCERY LIST
//  Adding grocery list when you click submit button
$(document).on("click", "#addFoodItem", function(e) {
  // prevents refreshing the form (default bx) after we submit to the page
  e.preventDefault();
  console.log("test");
  $("#ingredients").empty();
  $("#addFoodItem").removeClass("active");
  $(this).addClass("active");

  // Constructing a queryURL for the grocery list
  // q = user input
  // var q =

  var queryURL = "https://www.food2fork.com/api/search?key=" + "49cc1738002fe76fe04ce3c453546e88" + "&q=" + "lasagna" + "&page=1";

  // Performing an AJAX request with the queryURL for recipe
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  
  // After data comes back from the request for image
    .then(function (response) {
    var results = JSON.parse(response);
    var image = results.recipes[0].image_url;
    var recipeId = results.recipes[0].recipe_id;
    console.log(results);
    console.log(image);
    console.log(recipeId);
  
    var queryURL = "https://www.food2fork.com/api/get?key=49cc1738002fe76fe04ce3c453546e88&rId=" + recipeId;

    // 2nd query url AJAX request for ingredients 
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    .then(function (response) {
      var ingResults = JSON.parse(response);
      var ingredientList = ingResults.recipe.ingredients;
    console.log("--------------");
    console.log(ingredientList);
  });

// Display ingredients in HTML as a list 
    var grocery = $("<div class=\"style\">");
    var p = $("<p>").text("Groceries you need to buy: " + ingredientList);

    grocery.append(p);
    $("#ingredients").prepend(grocery);

      });
    });

>>>>>>> fdc1f9e... add latest files with working api data grab
