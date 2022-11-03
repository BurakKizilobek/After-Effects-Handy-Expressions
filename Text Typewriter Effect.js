// We can cap the value of a text layer to a maximum character using time itself, how cool is that?




    // Using the value of an existing Text Layer
    // All we need to do is to remap time to the number of letters in our text. Apply the following expression to a Text Layer "Source Text" property

// properties you can change
var startAt = 0; 
var endAt = 9;

// trim the text
var maxLetters = Math.floor(linear(time, startAt, endAt, 0, value.length)); // number
var result = value.substring(0, maxLetters); // trim 
result







    // From global time to layer time
    // The effects seem to work just fine. However. the range we set with startAt and endAt is referring to the global comp time and ignores the layer start time. If the layer starts / ends outside the range we set in the expression head, you might not see the effect because it's taking place when the layer is not visible.
    // To fix this we can use "inPoint" in our expression to make up for the difference, like so:


// properties you can change
var startAt = 0; 
var endAt = 10;

// trim the text
var maxLetters = Math.floor(linear(time, inPoint + startAt, inPoint + endAt, 0, value.length)); // number
var result = value.substring(0, maxLetters); // trim 
result

// inPoint is the time in seconds in which the layers start in the timeline. Adding it to our range will make the range relative to the layer itself. COOL!



