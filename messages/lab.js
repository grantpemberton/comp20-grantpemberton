var request = new XMLHttpRequest();

function parse(){
	//Step1: set up HTTP request. Three required arguments
		//...HTTP method (string), URL (string), asynch (boolean) -> this will be false very few times
	request.open("GET", "data.json", true);

	//Step2: set up callback functionto deal with HTTP response data
	request.onreadystatechange = function(){
		if(request.readyState == 4){//request is complete
			console.log ("RS is 4");
			data = request.responseText;
			chat = JSON.parse(data);
			elem = document.getElementById("convo");
			elem.innerHTML = chat[1,"content"] + chat[1, "username"] + "<br>" + chat[2,"content"] + chat[2, "username"];
		};
		//Step3: Trigger the HTTP request
		//The argument for send() - data that you want to send to teh web server
		request.send(null);
		//test
		
}

