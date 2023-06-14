/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    text = text.replaceAll("&quot;", '"')
    text = text.replaceAll("&apos;", "'") 
    text = text.replaceAll("&gt;", ">")
    text = text.replaceAll("&lt;", "<")
    text = text.replaceAll("&frasl;", "/")
    
    // have to put this one last, because it could cause combination
    text = text.replaceAll("&amp;", "&")
    
    return text
};

/*

Rank 154,629
Date: 06/14/2023
Runtime: 98 ms, faster than 34.78%  
Memory Usage: 49.7 MB, less than 65.22% 

=============== test case ==========

"&amp;gt;"

*/