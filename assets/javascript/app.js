// Initialize Firebase
<<<<<<< HEAD
=======

//   <!-- Firebase JavaScript Link -->

// Initialize Firebase
>>>>>>> 7f0fa85b0acd2668a8005007c2872e7bace03a52
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
 // Adding food images when submit button is clicked
$(document).on("click", "#addFoodItem", function (e) {

  // Prevents refreshing the form (default box) after we submit to the page
  e.preventDefault();
  $("#foodImages").empty();
  $("#addFoodItem").removeClass("active");
  $(this).addClass("active");

  // create variable for food item input
  var foodItem = $("#foodItemInput").val().trim();

  // Constructing a queryURL for the food images with contextual webseach API
  var queryURL = "https://contextualwebsearch-websearch-v1.p.mashape.com/api/Search/ImageSearchAPI?autoCorrect=true&count=3&q=" 
  + foodItem + "&api_key=qXDvBYCbBzmshEGKNakJSw7HJfwap1MPOYJjsn4Jfmm67nP9ud";

  $.ajax({
      url: queryURL,
      method: "GET"
  })

  //After data comes back from the request for food image
  .then(function (response) {
    console.log(queryURL);
    console.log(response);
  
  var results = response.data; 
  


  });




});
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
>>>>>>> 7f0fa85b0acd2668a8005007c2872e7bace03a52
