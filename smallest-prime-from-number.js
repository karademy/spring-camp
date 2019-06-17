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

const number = parseInt(prompt('Enter number : '));

for(let i = number + 1; i <= Number.MAX_SAFE_INTEGER; i++){
	if(isPrime(i)===true){
		alert(i);
		break;
	}
}