pointer = thisComp.layer("Pointer"); 
hoverStart = 100; // The higher value, the larger zone of influence 
hoverEnd = 20; // The higher value, the smaller zone at which influence will stop 
maxValue = 5; // Multiplies the maximum value 
L = length(toComp(anchorPoint), pointer.toComp(pointer.anchorPoint)); 
C = clamp(hoverStart-L,0,hoverEnd); 
value + C*maxValue