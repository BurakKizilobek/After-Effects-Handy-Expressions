// 

slider = effect("Slider Control")("Slider")

sec = slider % 60;
min = Math.floor(slider / 60) % 60;
hour = Math.floor(slider / 3600);

function addZero(n) {
    if (n < 10) { return "0" + n } else { return n };
}

addZero(hour) + ":" + addZero(min) + ":" + addZero(sec)




// Use this if you wanna leave the mili second part:

slider = effect("Slider Control")("Slider");

sec = slider % 60;
min = Math.floor(slider / 60) % 60;
hour = Math.floor(slider / 3600);

function addZero(n) {
    if (n < 10) { return "0" + n } else { return n };
}
addZero(Math.floor(hour)) + ":" + addZero(Math.floor(min))