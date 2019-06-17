const isPrime = (number) => {
	let count = 0;
	for(let i = 2; i<number; i++){
		if(number%i===0)
			count++;
	}
	if(count===0)
		return true;
	return false;
}

const n = parseInt(prompt('Enter n : '));
	for(let i = 2; i <= n; i++){
		if(isPrime(i)===true)
			console.log(i);
}