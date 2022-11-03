var targetLayer = thisLayer;
var markerComment = targetLayer.marker.nearestKey(time).comment;
var markerTime = targetLayer.marker.nearestKey(time).time;
var animDur = (1 / 30) * 6;


if (markerComment == "") { linear(time, markerTime, (markerTime + animDur), 0, 100) }
else { value = 0 }




// with two linear expression 
// when time is equal to marker time it will return 100
var targetLayer = thisLayer;
var markerComment = targetLayer.marker.nearestKey(time).comment;
var markerTime = targetLayer.marker.nearestKey(time).time;

var inAnimDur = (1 / 30) * 3; // 3 frames
var outAnimDur = (1 / 30) * 5; // 5 frames

var inAnimFirstValue = 0; // first value of in animation on marker time - inAnimDur
var inAnimLastValue = 100; // on marker time

var outAnimFirstValue = 100; // on marker time
var outAnimLastValue = 0; // last value of out animation on marker time + outAnimDur

var inAnim = linear(time, (markerTime - inAnimDur), markerTime, inAnimFirstValue, inAnimLastValue); // in animation
var outAnim = linear(time, markerTime, (markerTime + outAnimDur), outAnimFirstValue, outAnimLastValue); // out animation


if (markerComment == "") { linear(time, (markerTime - inAnimDur), (markerTime + outAnimDur), inAnim, outAnim) }
else { value = 0 }



// for scale array
var targetLayer = thisLayer;
var markerComment = targetLayer.marker.nearestKey(time).comment;
var markerTime = targetLayer.marker.nearestKey(time).time;

var inAnimDur = (1 / 30) * 2; // 2 frames
var outAnimDur = (1 / 30) * 2; // 2 frames

var inAnimFirstValue = 21; // first value of in animation on marker time - inAnimDur
var inAnimLastValue = 22; // on marker time

var outAnimFirstValue = 22; // on marker time
var outAnimLastValue = 21; // last value of out animation on marker time + outAnimDur

var inAnim = linear(time, (markerTime - inAnimDur), markerTime, inAnimFirstValue, inAnimLastValue); // in animation
var outAnim = linear(time, markerTime, (markerTime + outAnimDur), outAnimFirstValue, outAnimLastValue); // out animation


if (markerComment == "") { s = linear(time, (markerTime - inAnimDur), (markerTime + outAnimDur), inAnim, outAnim) }
else { value = 0 }

[s, s] // to flip it = [s,-s]