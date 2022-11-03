// Fade a layer in and out using markers to set the duration
fadeFrames = 6; m = 0; t=time;
if(marker.numKeys > 0) {
	m = marker.nearestKey(time).index;
	tag = marker.key(m).comment;
	if(tag == 'Highlight'){
		tMin = marker.key(m).time;
		tMax = tMin + marker.key(m).duration;
		
		if(t < tMin){
			linear(time, tMin - framesToTime(fadeFrames), tMin, 0, value);
		} else {
			linear(time, tMax - framesToTime(fadeFrames), tMax, value, 0);
		}
	} else {
		value;
	}
} else {value}