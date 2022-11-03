// Delay property by certain number of frames

delay = 5; //number of frames to delay
d = delay*thisComp.frameDuration*(index - 1);
thisComp.layer(1).rotation.valueAtTime(time - d)