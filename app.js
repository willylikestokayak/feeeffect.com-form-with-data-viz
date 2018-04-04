let rateOfReturn = document.getElementById("feeEffectChart");
console.log(rateOfReturn);

let barChart = new Chart(rateOfReturn, {
	type: 'bar',
	data: {
		labels: ["Rate of Return", "Fee #1", "Fee #2", "Fee #3"],
		datasets: [{
			label: 'Balance by Year',
			data: [],
			backgroundColor: [],
			borderColor: [],
			borderWidth: 1
	}]
},
});

let buttonElement = document.getElementById("btn");

buttonElement.addEventListener('click', function(event){

	let testValue1 = parseInt(document.getElementById("test1").value, 10);
	let testValue2 = parseInt(document.getElementById("test2").value, 10);
	let testValue3 = parseInt(document.getElementById("test3").value, 10);
	let testValue4 = parseInt(document.getElementById("test4").value, 10);

	data = [testValue1, testValue2, testValue3, testValue4]
	
	function addData(data) {
		chart.data.labels.push(label);
		chart.data.datasets.forEach((dataset) => {
				dataset.data.push(data);
		});
		chart.update();
	}
	
});
// console.log(data);
// function addData(data) {
// 	chart.data.labels.push(label);
// 	chart.data.datasets.forEach((dataset) => {
// 			dataset.data.push(data);
// 	});
// 	chart.update();
// }



// First Name: <input type="text" id="myText" value="Mickey">

// <p>Click the button to display the value of the value attribute of the text field.</p>

// <button onclick="myFunction()">Try it</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
//     var x = document.getElementById("myText").value;
//     document.getElementById("demo").innerHTML = x;
// }
// </script>