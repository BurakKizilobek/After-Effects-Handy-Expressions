// Boilerplate expression to trigger actions with markers

n = 0;
if (marker.numKeys > 0) {
    n = marker.nearestKey(time).index;
    if (marker.key(n).time > time) {
        n--;
    } if (n == 0) {
        value;
    } else {
        t = time - marker.key(n).time; //time since marker 
        //Do Stuff 
    }
} else {
    value;
}