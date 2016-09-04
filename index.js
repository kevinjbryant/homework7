// Steps to complete:
/*
1. Initialize Firebase
2. Create button for adding new trains - then update the html + update the database
3. Create a way to retrieve trains from the train database.
4. Create a way to calculate the next arriving train and minutes away.

*/
// 1. Initialize Firebase

var config = {
    apiKey: "AIzaSyDembwGMoQE3jAwOIj87AvtjLuw8W1J6Bk",
    authDomain: "train-time-bcb05.firebaseapp.com",
    databaseURL: "https://train-time-bcb05.firebaseio.com",
    storageBucket: "train-time-bcb05.appspot.com",
  };
  firebase.initializeApp(config);


var database = firebase.database();


// 2. Button for adding Trains
$("#addTrainBtn").on("click", function(){

	// Grabs user input
	var trainName = $("#trainNameInput").val().trim();
	var trainDestination = $("#destinationInput").val().trim();
	var trainTime = moment($("#timeInput").val().trim(), "HH:mm").format("X");
	var trainFrequency = $("#frequencyInput").val().trim();

	// Creates local "temporary" object for holding train data
	var newTrain = {
		name:  trainName,
		destination: trainDestination,
		time: trainTime,
		frequency: trainFrequency
	}

	// Uploads train data to the database
	database.ref().push(newTrain);

	// Logs everything to console
	console.log(newTrain.name);
	console.log(newTrain.destination);
	console.log(newTrain.time);
	console.log(newTrain.frequency);

	// Alert
	alert("Train successfully added");

	// Clears all of the text-boxes
	$("#trainNameInput").val("");
	$("#destinationInput").val("");
	$("#timeInput").val("");
	$("#frequencyInput").val("");

	// Prevents moving to new page
	return false;
});


// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var trainName = childSnapshot.val().name;
	var trainRole = childSnapshot.val().destination;
	var trainStart = childSnapshot.val().time;
	var trainRate = childSnapshot.val().frequency;

	// Train Info
	console.log(trainName);
	console.log(trainDestination);
	console.log(trainTime);
	console.log(trainFrequency);


	//trying to manupulate the code from an exercise to calculate the arival time and minutes away
	// First Time (pushed back 1 year to make sure it comes before current time)
		
		// Current Time
		var currentTime = moment();
		console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

		// Difference between the times
		var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
		console.log("DIFFERENCE IN TIME: " + diffTime);

		// Time apart (remainder)
		var tRemainder = diffTime % tFrequency;
		console.log(tRemainder);

		// Minute Until Train
		var MinutesAway = tFrequency - tRemainder;
		console.log("MINUTES TILL TRAIN: " + MinutesAway);

		// Next Train
		var nextArrival = moment().add(MinutesAway, "minutes")
		console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"))



	// Add each train's data into the table
	$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFrequency + "</td><td>" + nextArrival + "</td><td>" + MinutesAway + "</td></tr>");

});


// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case
// Assumptions


//		var tFrequency = 3;
//		var firstTime = "03:30"; // Time is 3:30 AM

		// First Time (pushed back 1 year to make sure it comes before current time)
//		var firstTimeConverted = moment(firstTime,"hh:mm").subtract(1, "years");
//		console.log(firstTimeConverted);

		// Current Time
//		var currentTime = moment();
//		console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

		// Difference between the times
//		var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
//		console.log("DIFFERENCE IN TIME: " + diffTime);

		// Time apart (remainder)
//		var tRemainder = diffTime % tFrequency;
//		console.log(tRemainder);

		// Minute Until Train
//		var tMinutesTillTrain = tFrequency - tRemainder;
//		console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

		// Next Train
//		var nextTrain = moment().add(tMinutesTillTrain, "minutes")
//		console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"))

		
