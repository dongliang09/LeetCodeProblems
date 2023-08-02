function isEmpty(obj: Record<string, any> | any[]): boolean {
    
    if (typeof(obj) === "object") {
        if (Object.keys(obj).length === 0) return true
        else return false
    }
    
    return false
};