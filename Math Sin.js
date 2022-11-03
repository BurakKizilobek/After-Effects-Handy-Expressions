// Waves
// The sine wave function is a friend of yours that gives you back a number between -1 and 1.

Math.sin() // a number between -1 and 1
// The exact results depends on you. Unfortunately, it expects you to give it a number between 0 and 6.2831.
// Wait a minute. That's very specific. 6.2831?
// Well it turns out 6.2831 is exactly 2PI, which is the point in which the sine wave results in exactly one lap.




    // Rotation


 45 * Math.sin(Math.PI * 2  * time) // gets a number between 0 and 1, then multiplies it by 45 degrees;‍ https://uploads-ssl.webflow.com/5ceba72a8cdd0a84bd30dd90/60f0480d04e061e7cea5bb2d_compicon.svg

// With a single line of code, we got your layer to rotate 45 degrees back and forth every second. How cool is that?

// We are multiplying 2PI with the current time.
// When the time is 0 seconds, we are 0 laps into our sine wave. When time is 1 second, we are 1 exactly one lap into our sine wave. And this goes on forever.
// This helped us get a number that fluctuates between 0 and 1 repeatedly. We then multiplied it by 45 and got a number between -45 and 45. That's awesome!
// The Rotation property expects a number, and a number between -45 and 45 is a number, so we did a good job on that!

// For our final expression, we can do something like this: https://uploads-ssl.webflow.com/5ceba72a8cdd0a84bd30dd90/60f0480d04e061e7cea5bb2d_compicon.svg

var loopDuration = 5; // every 5 seconds, or however many seconds you decide
var degrees = 45; // or however many degrees you want
degrees * Math.sin(  Math.PI * 2  * time / loopDuration);

// Now we can easily change the value of"loopDuration" in order to determine the duration of one, full lap. This makes for an easy and comfortable sine wave experience!

