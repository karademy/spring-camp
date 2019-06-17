const celsiusToFahrenheit = (c) => ((9/5)*c) + 32;
const fahrenheitToCelsius = (f) => ((5/9)*(f-32));

let sw = prompt('Do you want to enter celsius(c) or fahrenheit(f) : ');
sw = sw.toLowerCase();
if(sw === 'c'){
	const c = parseFloat(prompt('Enter temprature in celsius : '));
	console.log(typeof c);
	if(typeof c =='number'){
		console.log('F = ' + celsiusToFahrenheit(c));
	}else{
		alert('please enter a number');
	}
}else if(sw === 'f'){
	const f = parseFloat(prompt('Enter temprature in fahrenheit : '));
	if(typeof f =='number'){
		console.log('C = ' + fahrenheitToCelsius(f));
	}else{
		alert('please enter a number');
	}
}