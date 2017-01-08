var url = 'http://api.openweathermap.org/data/2.5/weather?';
var key = 'fa7d80c48643dfadde2cced1b1be6ca1';


document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
	
	document.getElementById("zipSubmit").addEventListener("click", function (event) {
		var req = new XMLHttpRequest();
		var zip = document.getElementById("zipInput").value;
		url = url + 'zip=' + zip + ',us&units=imperial&appid=' + key;
		req.open("GET", url, true);
		req.addEventListener('load',function(){
			if(req.status >= 200 && req.status < 400){
				var response = JSON.parse(req.responseText);
				document.getElementById('cityText').innerHTML = response.name;
                document.getElementById('tempText').textContent = response.main.temp;
                document.getElementById('humidityText').textContent = response.main.humidity;
			} else {
        console.log("Error in network request: " + req.statusText);
      }});
	  req.send(null);
	  event.preventdefault();
	});
	
	document.getElementById("cityStateSubmit").addEventListener("click", function (event) {
		var req = new XMLHttpRequest();
		var city = document.getElementById("cityInput").value;
		var state = document.getElementById("stateInput").value;
		url = url + 'q=' + city + ',' + state + ',us&units=imperial&appid=' + key;
		req.open("GET", url, true);
		req.addEventListener('load',function(){
			if(req.status >= 200 && req.status < 400){
				var response = JSON.parse(req.responseText);
				document.getElementById('cityText').innerHTML = response.name;
                document.getElementById('tempText').textContent = response.main.temp;
                document.getElementById('humidityText').textContent = response.main.humidity;
			} else {
        console.log("Error in network request: " + req.statusText);
      }});
	  req.send(null);
	  event.preventdefault();
	});
	
	document.getElementById("postSubmit").addEventListener("click", function (event) {
		var req = new XMLHttpRequest();
		req.open("POST", 'http://httpbin.org/post', true);
		req.setRequestHeader('Content-Type', 'application/json');
		
		req.addEventListener('load',function(){
			if(req.status >= 200 && req.status < 400){
				var response = JSON.parse(req.responseText);
				
				document.getElementById('httbinReturn').innerHTML = response.data;
			} else {
        console.log("Error in network request: " + req.statusText);
      }});
	  req.send(JSON.stringify(document.getElementById('postInput').value));
	  event.preventdefault();
	});
}