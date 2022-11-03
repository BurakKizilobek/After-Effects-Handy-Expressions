// variable e - controls the elasticity of the bounce
// variable g - controls the gravity acting on your object
// variable nMax - the maximum amount of bounces that are allowed



e = .7; //elasticity
g = 5000; //gravity
nMax = 9; //number of bounces allowed

n = 0;
if (numKeys > 0){
 n = nearestKey(time).index;
 if (key(n).time > time) n--;
}
if (n > 0){
 t = time - key(n).time;
 v = -velocityAtTime(key(n).time - .001)*e;
 vl = length(v);
 if (value instanceof Array){
   vu = (vl > 0) ? normalize(v) : [0,0,0];
}else{
   vu = (v < 0) ? -1 : 1;
 }
 tCur = 0;
 segDur = 2*vl/g;
 tNext = segDur;
 nb = 1; // number of bounces
 while (tNext < t && nb <= nMax){
   vl *= e;
   segDur *= e;
   tCur = tNext;
   tNext += segDur;
   nb++
 }
 if(nb <= nMax){
   delta = t - tCur;
   value +  vu*delta*(vl - g*delta/2);
 }else{
   value
 }
}else
 value



//   What Does Elasticity Mean? 
// For elasticity, imagine you have a bungee chord attached to your object. The lower the number you give for e the more stiff the bounce will look. If you're looking for a bounce that feels loose, just raise this value.

// The example below bounces better than a Mega Bounce XTR which is the Rolls Royce of bouncy balls, but I personally prefer like a Wham-O Superball because it has a similar coefficient of restitution for a better price... but I digress.


// High elasticity values and a low amount of gravity https://assets-global.website-files.com/61406347b8db463e379e2732/61796bb9e03f6e1d9a70c58a_High_Elasticity_and_Low_Gravity.gif
// What is Gravity in the Bounce Expression? 
// In the bounce expression gravity works just how you would think gravity should work, the higher the gravity the heavier the object will feel. If you increase the gravity value you will make the object seem heavier. Once your object completes its initial contact it will start to finish the remainder of your bounce quicker and quicker.


// Low elastic and High Gravity https://assets-global.website-files.com/61406347b8db463e379e2732/61796bd435cb0f296773f168_Low_Elasticity_and_High_Gravity.gif
// ‍