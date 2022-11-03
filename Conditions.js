// https://www.goodboy.ninja/expressionscheatsheet#conditions

if (true) {
    // do this
} else {
    // do that
}



A == B	// A is equal to B
A === B	// A is equal value and equal type B
A != B	// A is not equal B
A !== B	// A is not equal value or not equal type B
A > B //A is greater than B
A < B	//A is less than B
A >= B	//A is greater than or equal to B
A <= B	//A is less than or equal to B

time == 10 // will be true only when the current time is 10 seconds


10 == 10 && 0 == 0 // true, because both are true
10 == 10 && 0 == 10 // false, because the second statement is false
10 == 10 || 0 == 10 // true, because at least one of the statements are true (the first one)


// && // and
// || // or




// Rotation 
var checkbox = //pickwhip to your checkbox
if (checkbox.value) {
    time * 360;
} else {
    value
}



// Position
var checkbox = //pickwhip to your checkbox
if (checkbox.value) {
    var x = random(-15, 15);
    var y = random(-15, 15);
    value + [x, y];
} else {
    value
}



// Rotate, but only if time is bigger than 5 seconds
if (time >= 5) {
    90
} else {
    -90
}


// Rotate, but only every other second
if (Math.floor(time) % 2 == 0) {
    -90
} else {
    90
}




        // ternary
// As it turns out, there are other ways to ask a question in JavaScript and do something based on the answer.
// The ternary operation is a more compact form of an if-else statement:

 condition ? doThisIfTrue : otherwiseDoThis
// We ask a question followed by a question mark and a colon. If the answer is true, do what's after the question mark, otherwise do what's after the colon.
// For example, we can convert some of our expressions from before into one liners:

time >= 5 ? 90 : -90
Math.floor(time)%2 == 0 ? 90 : -90
// As you can see, we are asking the same questions we did in the previous if-else statements we covered. The result should be the same.