var baseURL = "http://pajitnov.inseng.net/"

function startGame(){
	$.ajax({
		url: baseURL,
		method: "POST",
		dataType: "json",
		data: {
			"seats": 1,
			"turns": 10,
			"initial_garbage": 0
		},
		success: function(data, status, jqxhr){
			console.log("Success!");
		},
		error: function(jqxhr, status, error){
			console.log("Critical Error. RIP.");
		}
	});
}

function getGame(){
	$.ajax({
		url: baseURL,
		method: "GET",
		dataType: "json",
		/*data: {
			"seats": 1,
			"turns": 10,
			"initial_garbage": 0
		},*/
		success: function(data, status, jqxhr){
			console.log("Success!");
		},
		error: function(jqxhr, status, error){
			console.log("Critical Error. RIP.");
		}
	});
}

var newGame = {
	"seats": 1,
	"turns": 10,
	"initial_garbage": 0
}

var xhr = new XMLHttpRequest();
xhr.open("POST", baseURL, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.send($.param(newGame));
