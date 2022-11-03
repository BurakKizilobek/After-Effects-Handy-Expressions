// https://creativecow.net/forums/thread/tutorial-rolling-circles-onto-the-screen/


// Paste the code onto the position expression of a circle you made.

// Use the rotation of the circle to roll the circle onto the screen.

// The radius is half the bounding box size

r = (thisLayer.sourceRectAtTime().width)/2;

// Scale compensation
s = thisLayer.transform.scale[0];
compensation = (s-100)*.01;

// compensated radius

cr = r + compensation * r;

// Number of pixels to roll, is circumference/360

circumference = 2*Math.PI*cr;

[value[0]+(circumference/360)*thisLayer.transform.rotation,value[1]]



