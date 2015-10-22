var request = new XMLHttpRequest();

function parse() {
	//Step1: set up HTTP request. Three required arguments
	//...HTTP method (string), URL (string), asynch (boolean) -> this will be false very few times
	request.open("GET", "data.json", true); 

	//Step2: set up callback functionto deal with HTTP response data
	request.onreadystatechange = function(){
		
		if (request.readyState==4){
			console.log("request complete!");
			data = request.responseText;
			//console.log(data);
			chat = JSON.parse(data);
			elem = document.getElementById("id");
			elem.innerHTML = "<p>" chat[1, "content"] + chat [1,"username"] + "</p>";
		}
	};


	//Step3: Trigger the HTTP request
	//The argument for send() - data that you want to send to teh web server
	request.send(null);

	//Got executed 3 times -> readystate = a number between 0 and 4, this means that for each value we have a new return for
} 
