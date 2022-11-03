// Seamlessly loop keyframes on a Path Property for shape layers or masks.

// loop path keyframes. Behaves like loopOut('cycle')
if (numKeys >1 && time > key(numKeys).time) {
    t1 = key(1).time;
    t2 = key(numKeys).time;
    span = t2 - t1;
    delta = time - t2;
    t = delta%span;
    valueAtTime(t1 + t)
   } else {
       value
   }