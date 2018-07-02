var SpaceAge = function(seconds) {
    this.seconds = seconds;
}

SpaceAge.prototype.onEarth = function() {
    var age1 = age(1, this.seconds);
    return age1;
}
SpaceAge.prototype.onMercury = function() {
    // I can't have var age and function age, 
    // so I need to use var age1
    var age1 = age(0.2408467, this.seconds);
    return age1;
}
SpaceAge.prototype.onVenus = function() {
    var age1 = age(0.61519726, this.seconds);
    return age1;
}
SpaceAge.prototype.onMars = function() {
    var age1 = age(1.8808158, this.seconds);
    return age1;
}
SpaceAge.prototype.onJupiter = function() {
    var age1 = age(11.862615, this.seconds);
    return age1;
}
SpaceAge.prototype.onSaturn = function() {
    var age1 = age(29.447498, this.seconds);
    return age1;
}
SpaceAge.prototype.onUranus = function() {
    var age1 = age(84.016846, this.seconds);
    return age1;
}
SpaceAge.prototype.onNeptune = function() {
    var age1 = age(164.79132, this.seconds);
    return age1;
}

function age(orbital, seconds) {
    var year = orbital * 31557600;
    var age = +((seconds / year).toFixed(2));
    return age;
}

module.exports = SpaceAge;