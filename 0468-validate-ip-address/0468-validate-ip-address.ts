function validIPAddress(queryIP: string): string {
    
    const notA2F = 'ghijklmnopqrstuvwxyzGHIJKLMNOPQRSTUVWXYZ';
    const A2F = 'abcdefABCDEF';
    const digits = '0123456789';
    
    // can't have both "." and ":"
    if (queryIP.includes(".") && queryIP.includes(":")) return "Neither"
    
    // if it contains other letters besides A-F, return "Neither"
    for (let i = 0; i < queryIP.length; i++) {
        if (notA2F.includes(queryIP[i])) return "Neither"
    }
    
    // IPv4 will split the by ".", IPv6 will split the by ":"
    if (queryIP.includes(".")) {
        let IP4Split : string[] = queryIP.split(".");
        if (IP4Split.length === 4) {
            // if element has leading zero when the length is greater than 1 and start with 0
            // if element contains character other than a-F and 0-9, it is not valid
            for (let i = 0; i < 4; i++) {
                if (IP4Split[i].length > 1 && IP4Split[i][0] === "0") return "Neither"
                
                if (IP4Split[i] === "")  return "Neither"
                for(let j = 0; j < IP4Split[i].length; j++) {
                    let currentNum : number = Number(IP4Split[i])
                    if ((A2F.includes(IP4Split[i][j]) || notA2F.includes(IP4Split[i][j]))  || 
                        currentNum < 0 || currentNum > 255 )    
                    {
                        return "Neither"
                    }
                }
            }
        } else return "Neither"
        
        return "IPv4"
        
    } else if (queryIP.includes(":")) {
        let IP6Split : string[] = queryIP.split(":");
        if (IP6Split.length === 8) {
            for (let i = 0; i < 8; i++) {

                if (IP6Split[i].length === 0 || IP6Split[i].length > 4) return "Neither"
                
                for(let j = 0; j < IP6Split[i].length; j++) {
                    if (!A2F.includes(IP6Split[i][j]) && !digits.includes(IP6Split[i][j])) {
                        return "Neither"
                    }
                }
            }
        } else return "Neither"
        
        return "IPv6"
    }
    
    return "Neither"

};

/*

=========== test case ==========

"20.91:0db8:85a3:87.65:9.6:8a2e:370:73.34"
"02001:0db8:85a3:0000:0000:8a2e:0370:7334"
"2001:0db8:85a3::8A2E:037j:7334"
"2001:0db8:85a3:0000:0000:8a2e:0370:7334"
"2001:db8:85a3:0:0:8A2E:0370:7334"
"1e1.4.5.6"
"1.0.1."
*/