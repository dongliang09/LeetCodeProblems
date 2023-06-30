/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
        const I = 1;
        const  V = 5;
        const  X = 10;
        const L = 50;
        const C = 100;
        const  D = 500;
        const  M = 1000;
        var  sum = 0;
        var currentSum = 0;
        var temp = 0;
        var count = 0;
        var sArray = [];
        var sArrayNum = [];
    
    //split string and store into array
      s.split('').forEach(function(s) {
         sArray.push(s);
          count++;

      });
       
    //convert letters into number array    
        for (var i=0; i < count; i++) {
            
           switch (sArray[i]) {
                case "I":
                    sArrayNum.push(I);
                    break;
                case "V":
                    sArrayNum.push(V);
                    break;
                case "X":
                    sArrayNum.push(X);
                    break;
                case "L":
                    sArrayNum.push(L);
                    break;
                case "C":
                    sArrayNum.push(C);
                    break;
                case "D":
                    sArrayNum.push(D);
                    break;
                case "M":
                    sArrayNum.push(M);
                    break;
                default:
                    break;
            }
        }
    
    //Algorithm 
        for (var i=0; i < count; i++ ) {
            if (sArrayNum[i] === 1000) {
                temp = 1000;
            }
            if (sArrayNum[i] === 500) {
                temp = 500;
            }
            if (sArrayNum[i] === 100) {
                if ((sArrayNum[i + 1] === 100) || (sArrayNum[i + 1] === 50) || (sArrayNum[i + 1] === 5) || (sArrayNum[i + 1] === 10) || (sArrayNum[i + 1] === 1) || (i === count - 1)) {
                    temp = 100;
                }
                if (sArrayNum[i + 1] === 500) {
                    temp = 400;
                    i++;
                }
                if (sArrayNum[i + 1] === 1000) {
                    temp = 900;
                    i++;
                }  
            }
            if (sArrayNum[i] === 50) {
                temp = 50;
            }
            if (sArrayNum[i] === 10) {
                if ((sArrayNum[i + 1] === 10) || (sArrayNum[i + 1] === 5) || (sArrayNum[i + 1] === 1)  || (i === count - 1)){
                    temp = 10;
                }
                if (sArrayNum[i + 1] === 50) {
                    temp = 40;
                    i++;
                }
                if (sArrayNum[i + 1] === 100) {
                    temp = 90;
                    i++;
                }
            }
            if (sArrayNum[i] === 5) {
                temp = 5;
            }
            if (sArrayNum[i] === 1) {
                if ((sArrayNum[i + 1] === 1)  || (i === count - 1)) {
                    temp = 1;
                }
                if (sArrayNum[i + 1] === 5) {
                    temp = 4;
                    i++;
                }
                if (sArrayNum[i + 1] === 10) {
                    temp = 9;
                    i++;
                }
            }
            sum = temp + sum;
            temp = 0;
            
        }
        return sum;
    
};