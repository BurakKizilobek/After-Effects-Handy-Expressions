// 



linear(value, rangeStart, rangeEnd, newRangeStart, newRangeEnd);

linear(time, 0, 10, -90, 90); // remap 0 -> 10 into something we can use as degrees, like -90 -> 90


linear(time, 0, 10, [0,0,0,0] , [1,1,1,1]); // Remapping time to a color siyahtan beyaza


linear(time, 0, 10, [0,0] , [20,20]);
