// Pos value

var x = thisLayer.index / (thisComp.numLayers+1) * thisComp.width;
[x, value[1]];




// Let's add some colors We are using the same technique of dividing the current index by the number of layers in this comp to get a value between 0 and 1.
// Once we have that value, we can use the linear() function to blend between our two arrays of colors progressively. How cool is that?

var blue = [0,0,1, 1];
var red = [1,0,0, 1];
var progress = thisLayer.index / (thisComp.numLayers + 1);
linear(progress, blue,red);
