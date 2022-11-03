

// "valueAtTime()" grabs the value of a property at a specific time, unlike "value" which grabs the value of a property as it is now.
// You specify time as a number inside the parenthesis.

valueAtTime(0)
// Creating a delay between layers
// In this example, there is no need to parent the layer itself to the main one. We're going to use an expression to grab its Position value.
// However, instead of using "value", we're gonna use "valueAtTime()", and instead of specifying a time in seconds, we're gonna use the current time and subtract the amount of delay we want (in seconds).

var delay = 0.2; // seconds
var parentPosition = // parent to the other layer's Position property

parentPosition.valueAtTime(time - delay)
// For the "parentPosition" variable value, use the Pickwhip tool to select the parent's Position property, like so:


