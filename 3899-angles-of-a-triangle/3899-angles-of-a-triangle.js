/**
 * @param {number[]} sides
 * @return {number[]}
 */
var internalAngles = function(sides) {

    // check if the triangle is valid
    //if valid, Using law of cosine to find the angles

    let a = sides[0], b = sides[1], c = sides[2]
    let output = []

    if (a+b>c && a+c>b && b+c>a) {
        // formula result are in Radien
        let angleA = Math.acos((b**2+c**2-a**2) / (2*b*c)) 
        let angleB = Math.acos((a**2+c**2-b**2) / (2*a*c))
        let angleC = Math.acos((a**2+b**2-c**2) / (2*a*b))

        // convert to degree
        angleA *= (180 / Math.PI);
        angleB *= (180 / Math.PI);
        angleC *= (180 / Math.PI);
        output = [angleA, angleB, angleC]
    }

    return output.sort((a,b)=>a-b)
    
};