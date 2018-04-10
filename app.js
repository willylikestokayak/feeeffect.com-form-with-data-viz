let buttonElement = document.getElementById("btn");

buttonElement.addEventListener('click', function(event){
	//form input elements
	let userInputPV = parseInt(document.getElementById("portfolioValue").value, 10);
	let userInputPR = parseInt(document.getElementById("portfolioReturn").value, 10);
	let userInputReturn = parseInt(document.getElementById("return").value, 10);
	let userInputCF = parseInt(document.getElementById("currentFee").value, 10);
	let userInputNF = parseInt(document.getElementById("negotiatedFee").value, 10);
	//variables need update with formulas to calculate savings data
	let year5;
	let year10;
	let year15;
	let year20;

	let rateOfReturn = document.getElementById("feeEffectChart");

	let barChart = new Chart(rateOfReturn, {
		type: 'bar',
		data: {
			labels: ["Year 5", "Year 10", "Year 15", "Year 20"],
			datasets: [{
				label: "FeeEffect Calculator",
				data: [userInputPV, userInputPR, userInputReturn, userInputCF, userInputNF],
				backgroundColor: [],
				borderColor: [],
				borderWidth: 1
		}]
	},
	
	});
	
});
