
function parse() {
	var request = new XMLHttpRequest();

	//Step1: set up HTTP request. Three required arguments
	//...HTTP method (string), URL (string), asynch (boolean) -> this will be false very few times
	request.open("GET", "data.json", true); 

	//Step2: set up callback functionto deal with HTTP response data
	request.onreadystatechange = function(){
		
		if (request.readyState==4){
			data = request.responseText;
			elem = document.getElementById("chat");
			data = JSON.parse(data);
			//loop through chat window
			for (i = 0; i < data.length; i++) {
				elem.innerHTML +=  data[i]["content"] + " " + data[i]["username"] + "</p>";
			}
		}
	};


	//Step3: Trigger the HTTP request
	//The argument for send() - data that you want to send to teh web server
	request.send(null);

	//Got executed 3 times -> readystate = a number between 0 and 4, this means that for each value we have a new return for
} 
