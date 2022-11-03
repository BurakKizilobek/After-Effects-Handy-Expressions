// scale



maxDev = 13; // max deviation in pixels
spd = 30;  //speed of oscillation
decay = 1.0; //how fast it slows down

t = time - inPoint;
x = scale[0] + maxDev*Math.sin(spd*t)/Math.exp(decay*t);
y = scale[0]*scale[1]/x;
[x,y]
