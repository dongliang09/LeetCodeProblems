function strongPasswordCheckerII(password: string): boolean {

    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const digits = "0123456789"
    const special = "!@#$%^&*()-+"
    
    let lowercaseCheck = false
    let uppercaseCheck = false
    let digitCheck = false
    let specialCheck = false
    let adjCheck = true
    
    if (password.length < 8) return false
    
    for (let i = 0; i < password.length; i++) {
        if ( !lowercaseCheck && lowercase.includes(password[i]) ) {
            lowercaseCheck = true
        } else if ( !uppercaseCheck && uppercase.includes(password[i]) ) {
            uppercaseCheck = true
        } else if ( !digitCheck && digits.includes(password[i]) ) {
            digitCheck = true
        } else if ( !specialCheck && special.includes(password[i]) ) {
            specialCheck = true
        }
        
        if (i !== 0 && password[i] === password[i - 1]) {
            adjCheck = false
        }
    }
    
    if (lowercaseCheck && uppercaseCheck && digitCheck && specialCheck && adjCheck)
        return true
    else 
        return false
};

/*
# Rank 126,232
# Date 07/25/2023
# Runtime: 62 ms, faster than 61.54%
# Memory Usage: 42.1 MB, less than 100.00%
*/