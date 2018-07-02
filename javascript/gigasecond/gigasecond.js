
/* It converts UTC to epoch time, then add 10^9 secs, 
finallly converts back to UTC time 
*/

var Gigasecond = function(inputDate) {
    this.inputDate = inputDate;
}

Gigasecond.prototype.date = function() {
    var d = new Date (this.inputDate);
    // getTime() Returns the number of milliseconds since midnight Jan 1 1970, 
    // and a specified date, epoch time
    var dateMillis = d.getTime() ; 
    // now add 10**9 secs * 1000 => milliseconds
    var epochMillis = dateMillis + (10**9*1000)
    
    // convert epoch time to utc
    var date1 = new Date(epochMillis)
    return date1
}

module.exports = Gigasecond;

