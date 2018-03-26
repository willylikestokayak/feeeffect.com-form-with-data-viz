var rateOfReturn = document.getElementById("feeEffectChart");
console.log(rateOfReturn);
var barChart = new Chart(rateOfReturn, {
		type: 'bar',
		data: {
			labels: ["Rate of Return", "Fee #1", "Fee #2", "Fee #3"],
			datasets: [{
				label: 'Balance by Year',
				data: [.07, .001, .002, .015],
				backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
		}]
	},
});