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
    
    text = text.replaceAll("&amp;", "&")
    
    return text
};

/*
=============== test case ==========

"&amp;gt;"

*/