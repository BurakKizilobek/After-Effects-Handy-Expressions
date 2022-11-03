
 // Apply this code to a Position property:


 var loopDuration = 5;
 var circleRadius = 25;
 var flip = false;
 
 // move
 var flipper = flip ? 1 : -1;
 var waveLogic = time * 2 * Math.PI / loopDuration * flipper;
 var x =  Math.sin(waveLogic) * circleRadius;
 var y =  Math.cos(waveLogic) * circleRadius;
 value + [x,y];

