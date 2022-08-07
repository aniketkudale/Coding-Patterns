function minSubOP(k, arr) {
    let minLength = Infinity, winSum = 0, winStart = 0;
     for (let winEnd = 0; winEnd < arr.length; winEnd++) {
       winSum += arr[winEnd]
       while (winSum >= k) {
         minLength = Math.min(winEnd-winStart+1, minLength);
         winSum -= arr[winStart];
         winStart += 1;
       }
     }
     if(minLength === Infinity) {
       return 0;
     }
     return minLength;
   }
   
   console.log(minSubOP(7, [2,1,5,2,3,2]))
   
   // Time: O(N) or O(N+N)
   