
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

//var database = firebase.database();


$(document).ready(function () {

  $(document).on("click", "recipeInstructions", function () {
    $("#recipeInstructions").empty();

    //var recipe = $(this).attr("data-type");
    var queryURL = "https://www.food2fork.com/api/get?key=49cc1738002fe76fe04ce3c453546e88";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    });

  })
});

