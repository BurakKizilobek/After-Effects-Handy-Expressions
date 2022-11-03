// Use a slider control to delay keyframe animation by a defined amount of seconds. Works like a marker trigger, but simpler. Useful for MOGRTs

delay = thisComp.layer("Controls").effect("Delay")("Slider"); // pickwhip to your Delay Slider (in seconds) 
valueAtTime(time-delay)