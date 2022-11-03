layerDuration = thisLayer.source.duration;
if (marker.numKeys > 0) {
    m = marker.nearestKey(time).index;
    if (marker.key(m).time > time);
    if (m > 0) {
        markerTime = marker.key(m).time;
        if (time < markerTime + layerDuration) {
            linear(time, markerTime, markerTime + layerDuration, 0, layerDuration);
        } else 0
    } else 0
} else value;