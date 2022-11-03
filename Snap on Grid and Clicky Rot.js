//// Snapping Position https://uploads-ssl.webflow.com/5ceba72a8cdd0a84bd30dd90/60f0480d04e061e7cea5bb2d_compicon.svg

// properties you can edit
var stepSize = 20; // Will stick to 20 pixels incremenets

// run
var x = Math.round(value[0] / stepSize) * stepSize;
var y = Math.round(value[1] / stepSize) * stepSize;
[x, y];






//// Snapping Rotation (or other 1 dimensional properties) https://uploads-ssl.webflow.com/5ceba72a8cdd0a84bd30dd90/60f0480d04e061e7cea5bb2d_compicon.svg

// properties you can edit
var stepSize = 20;

// run
var result = Math.round(value / stepSize) * stepSize;
result;






//// Bonus: Creating a snap function that can be applied to both kinds of properties
function snap(theValue, theStepSize) {
	
	if (Array.isArray(theValue)) {
		// if the value is an array (like a Position value) apply to each dimension
		var result = [];
		for (var i=0; i<theValue.length; i++) {
				result.push(Math.round(theValue[i] / theStepSize) * theStepSize);
		}
		return result
	}
	
	// otherwise, apply to the value
	return Math.round(theValue / theStepSize) * theStepSize;
	
};

snap(value, 20);

// In this example we created a function that snaps a value to a specific increment just like before.
//Additionaly, we can use the power of JavaScript to automatically check if the value given to the function is an array, and if it is to snap each value independently and return the result as an array as well.