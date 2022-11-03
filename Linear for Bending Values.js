// https://www.goodboy.ninja/expressionscheatsheet#linear

linear(t, itemA, itemB)

linear(0.5, 200, 400) // Result: 300

linear(0.5, [0,0], [500,500]); // Result: [250,250]

linear(time, 3, 8, 0, 360) // Rotation =>3. saniyeden 8. saniyeye kadar 360 derece doner https://uploads-ssl.webflow.com/5ceba72a8cdd0a84bd30dd90/60f0480d04e061e7cea5bb2d_compicon.svg

linear(time, 0, 10, 0, 360);
ease(time, 0, 10, 0, 360);


    // Blend Between Colors

var slider = slider;
var red = [1,0,0,0];
var blue = [0,0,1,0];
linear(slider * 0.01,red,blue)