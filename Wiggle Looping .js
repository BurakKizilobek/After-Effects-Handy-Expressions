// 

function loopingWiggle(frequency, amplitude, loopDuration){
	var t = time % loopDuration;
	var wiggle1 = wiggle(frequency, amplitude, 1, 0.5, t);
	var wiggle2 = wiggle(frequency, amplitude, 1, 0.5, t - loopDuration);
	return linear(t, 0,  loopDuration, wiggle1, wiggle2)
};

loopingWiggle(2,5,10); // calling the function