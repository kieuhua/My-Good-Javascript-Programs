//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(years) {
    this.years = years;
};


Year.prototype.isLeap = function () {
    if ( this.years % 4 == 0 ) {
        if ( this.years % 100 == 0 ) {
            if ( this.years % 400 == 0 ) {
                return true;
            }
            else 
                return false;
        }
        else {
            return true;
        }
        return true;
    } else {
        return false;
    }
};

module.exports = Year;
