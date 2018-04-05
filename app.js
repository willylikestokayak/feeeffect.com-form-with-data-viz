// let rateOfReturn = document.getElementById("feeEffectChart");

// let barChart = new Chart(rateOfReturn, {
// 	type: 'bar',
// 	data: {
// 		labels: ["Rate of Return", "Fee #1", "Fee #2", "Fee #3"],
// 		datasets: [{
// 			label: 'Balance by Year',
// 			data: [],
// 			backgroundColor: [],
// 			borderColor: [],
// 			borderWidth: 1
// 	}]
// },
// });

let buttonElement = document.getElementById("btn");

buttonElement.addEventListener('click', function(event){
	
	let testValue1 = parseInt(document.getElementById("test1").value, 10);
	let testValue2 = parseInt(document.getElementById("test2").value, 10);
	let testValue3 = parseInt(document.getElementById("test3").value, 10);
	let testValue4 = parseInt(document.getElementById("test4").value, 10);

	// newData = [testValue1, testValue2, testValue3, testValue4]

	let rateOfReturn = document.getElementById("feeEffectChart");

	let barChart = new Chart(rateOfReturn, {
		type: 'bar',
		data: {
			labels: ["Rate of Return", "Fee #1", "Fee #2", "Fee #3"],
			datasets: [{
				label: 'Balance by Year',
				data: [testValue1, testValue2, testValue3, testValue4],
				backgroundColor: [],
				borderColor: [],
				borderWidth: 1
		}]
	},
	
	});
	
});


//	barChart.destroy();
// function addData(data) {
// 	console.log(data);
// 	barChart.data.datasets.forEach((newData) => {
// 			dataset.data.push(newData);
// 			console.log(data);
// 	});
// 	barChart.update();
// }