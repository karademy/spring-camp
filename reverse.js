const number = parseInt(prompt('Enter a number : '));

let tmp = number;
let reverse = 0;
while(tmp!=0){
	reverse = (reverse * 10) + (tmp % 10);
	tmp = Math.floor(tmp / 10);
}
alert(reverse);