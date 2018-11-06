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

// GROCERY LIST
//  Adding grocery list when you click submit button
$(document).on("click", "#addFoodItem", function(e) {
  // prevents refreshing the form (default bx) after we submit to the page
  e.preventDefault();
  console.log("test");
  var search = $("#foodItemInput").val().trim();
  console.log(search);
  $("#ingredients").empty();
  $("#addFoodItem").removeClass("active");
  $(this).addClass("active");

  // Constructing a queryURL for the grocery list

  var queryURL = "https://www.food2fork.com/api/search?key=" + "1fa04e31f9fa0c050b53d71088cd2683" + "&q=" + search + "&page=1";

  // Performing an AJAX request with the queryURL for recipe
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  
  // After data comes back from the request for image
    .then(function (response) {
    var results = JSON.parse(response);
    var recipeURL = results.recipes[0].source_url;
    var recipeId = results.recipes[0].recipe_id;
    console.log(results);
    console.log(recipeURL);
    console.log(recipeId);

  
    var queryURL = "https://www.food2fork.com/api/get?key=" + "1fa04e31f9fa0c050b53d71088cd2683" + "&rId=" + recipeId;

    var q = "Recipe: " + recipeURL
    $("#recipes").append(q);

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
  

// Display ingredients in HTML as a list
    // use a for loop to go through the array of ingredients
    var list = $("<ul>");

    for (var i = 0; i < ingredientList.length; i++) {
      var item = $("<li>");

    // take each item (child) of the array and append it to build a list (li tag)

    item.text(ingredientList[i]);
      list.append(item);
      $("#ingredients").append(list);
    }


        });
      });
    });
