// what is the last value alerted by this code?

let i = 3;

while(i) {
	alert( i-- );
}

// 3, 2, 1 - then stops 

let i = 0;
while (++i < 5) alert(i);

let i = 0;
while(i++ < 5) alert(i);

//is the output the same? the task demonstrates how postfix/prefix forms can lead to 
//different results when used in comparisons

//1. from 1 to 4

// the first value is i = 1, because ++1 first increments i and then returns the new value.
// so the first comparison is 1 < 5, and the alert shows 1;

// then follow 2, 3, 4... - the values show up one after another. the comparison always
// uses the incremented value, because ++ is before the variable.

// finally, i = 4 is incremented to 5, the comparison while (5 < 5) fails, and the loop
// stops, so 5 is not shown.

// 2. from 1 to 5

// the first value is again i = 1; the postfix form of i++ increments i and then returns the old value
// so the comparison i++ < 5 will use i = 0 (contrary to ++i < 5).

// but the alert call is separate, it's another statment which executes after the increment and the comparison
// so it gets the current i = 1;

// then follow 2, 3, 4...

// let's stop on i = 4. The prefix form ++i would increment it and use 5 in the comparison. But here
// we have the postfix form i++. So it increments i to 5, but returns the old value. Hence the comparison is still
// actually while(4 < 5) - true and the control goes on to alert.

// The value i = 5 is the last one because the next step while(5 < 5) is false.

//which values get shown by the for loop?

1. for (let i = 0; i < 5; i++) alert(i);
2. for (let i = 0; i < 5; ++i) alert(i);

//because the increment is separeted from the condition check, both will return 1 to 4
//the value returned by ++i or i++ is not used 

//use for loop to output even numbers

for (let i = 2; i <= 10; i=i+2) {
	alert(i)
}

// replace for with while in the code below:

for (let i = 0; i < 3; i++) {
	console.log(`number ${i}!`);
}

let i = 0;
while(i < 3){
	console.log(`number ${i}!`);
	i++;
}

//write a loop which prompts for a number greater than 100 repeatedly - until canceled

let number = false;
while(number <= 100) {
	number = prompt("Enter a number higher than 100", '')
	if(number == null || number == '') {
		alert("Operation canceled");
		number = 101;
	}
}

also can be done easier:

let num;
do {
	num = prompt("Enter a number greater than 100?", '')
} while (num <= 100 && num);

// && num checks if num is not empty string or null (both false in boolean)
// output prime numbers

let n = prompt("pick a natural number", 'like 4, 47 or 102, for example');
for (i=1;i<=n;i++){
	for (j=1;j<=n;j++){
		x = i%j;
		if(x == 0){
			alert(x);
		}
	}
}

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {
	for (let j = 2; j < i; j++) {
		console.log('value of i is: '+ i + '\n' + 'value of j is: ' + j + '\n')
		if(i % j == 0) { console.log(i%j + '\n'); continue nextPrime };
	}

	console.log("prime detected: " + i);
}