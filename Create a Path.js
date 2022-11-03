// https://www.goodboy.ninja/expressionscheatsheet#createpath


createPath(points = [[0,0], [100,0], [100,100], [0,100]], inTangents = [], outTangents = [], isClosed = true)





// Creating a Square
var thePoints = [ [0,0], [100,0], [100,100], [0, 100] ];
createPath(thePoints);


// Dynamic Square
var r = 400;
var thePoints = [ [0,0], [r,0], [r,r], [0, r] ];
createPath(thePoints);


// Opening the square
var r = 400;
var thePoints = [ [0,0], [r,0], [r,r], [0, r] ];
createPath(thePoints, [], [], false);


// Tangents
var thePoints = [ [0,0], [300,300] ];
var InHandles = [ [800,-800], [600,700] ];
var OutHandles = [ [-600,700], [-500,-100] ];
createPath(thePoints, InHandles, OutHandles);


//        Creating a circle without tangents
// createPath() gives us an inconceivable amount of power.
// One thing we can do is use Math.sin() and Math.cos() to create a circle.
// You can read more about the relationship between those functions and a circle here, but in the meantime let's just apply this expression to our path:

// Properties you can easily change
var segments = 50;
var theRadius = 250;
var finalPoints = [];


// Create the circle
for (var i=0; i<segments; i++) {
	var progress = i /segments;
	var x = Math.sin(progress * Math.PI * 2);
	var y = Math.cos(progress * Math.PI * 2);
	var finalPoint = [x,y] * theRadius;
	finalPoints.push(finalPoint);
}

createPath(finalPoints);

// How did we do that?
// We are using a for loop to run a block of code multiple times. Each time we are calculating the position of the new point using Math.sin() and Math.cos(), and push it to an array of points.
// Finally, we give this array of points to the createPath() function, which creates the circle.
// It's a cool method although somewhat expensive. In order to get a smooth circle, you'd have to crank the number of segments to a pretty high value.
// But hey! It works.