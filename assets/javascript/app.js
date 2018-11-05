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