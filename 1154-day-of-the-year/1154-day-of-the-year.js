/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const convertDate = new Date(date);
    
    //const day = convertDate.getDate();
    //const month = convertDate.getMonth();
    const year = convertDate.getYear()- 100 + 2000;
    const newString = year.toString() + "-01-01";
    const firstDayOfYear = new Date(newString);
    const DateDiff = (convertDate - firstDayOfYear) / (60*60*24*1000) + 1;
    //console.log(convertDate, year, newString, firstDayOfYear, DateDiff)

    
    return DateDiff;
    
};