function maxSubBF(k, arr) {
    let maxSum = 0, winSum = 0;
     for (let i = 0; i < arr.length - k + 1; i++) {
       winSum = 0;
       for (let j = i; j < i+k; j++) {
         winSum += arr[j]
       }
       maxSum = Math.max(maxSum, winSum);
     }
     return maxSum;
   }
   
   console.log(maxSubBF(3, [2,1,5,1,3,2]))
   
   // Time: O(NxK)
   
   function maxSubOP(k, arr) {
    let maxSum = 0, winSum = 0, winStart = 0;
     for (let winEnd = 0; winEnd < arr.length; winEnd++) {
       winSum += arr[winEnd]
       if(winEnd >= k - 1) {
         maxSum = Math.max(winSum, maxSum);
         winSum -= arr[winStart];
         winStart += 1;
       }
     }
     return maxSum;
   }
   
   console.log(maxSubBF(3, [2,1,5,1,3,2]))
   
   // Time: O(N)