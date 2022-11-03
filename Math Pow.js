/* Rotate faster, then faster and faster and faster...
Try applying this to a Rotation property:

time * time * time * time

Press play. At first, your layer will rotate very very slow, but keep going! It will accelerate and start rotating faster and faster until it's almost too fast for your eye to register to motion properly.
What a cool simple trick right? We are literally multiplying the current time by itself 4 times. By the 2 seconds mark the result is 16 degrees, which is not that impressive. But this increases exponentially, and by the time the timeline hits 10 seconds, we are already at 10,000 degrees! Holy cow.

The exact same expression can also be written down this way:

Math.pow(time, 4)
Math.pow stands for power. We ask our friend, Math.pow() to check for us the result of the current time to the power of 4, which is the same as multiplying time by itself 4 times. Neat!


*/

time * time * time * time


// same thing as above, but written in a more compact way
Math.pow(time, 4)