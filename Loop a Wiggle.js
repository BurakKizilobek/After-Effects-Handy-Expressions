// Seamlessly loop a wiggle expression (in seconds)

frequency = 2; // wiggles per second
amplitude = 40; // amount of pixels to wiggle
secondsToLoop = 3; // time to loop in seconds
// --------
t = time % secondsToLoop;
wiggle1 = wiggle(frequency, amplitude, 1, 0.5, t);
wiggle2 = wiggle(frequency, amplitude, 1, 0.5, t - secondsToLoop);
linear(t, 0,  secondsToLoop, wiggle1, wiggle2)