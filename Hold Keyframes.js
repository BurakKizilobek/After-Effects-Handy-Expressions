// 



var nearest = nearestKey(time); // get the key closest to the current time
var isInThePast = nearest.time <= time; // ask: is it in the past? true / false
isInThePast ? nearest : key(nearest.index-1); // if it is use it, otherwise get the one before it