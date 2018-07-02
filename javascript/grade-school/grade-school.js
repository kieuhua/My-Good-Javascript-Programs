var School = function() {
    this.Db = {}
}
School.prototype.add = function(name, grade) {
    if (this.Db[grade] === undefined) {
        this.Db[grade] = [name];
    } else {
        this.Db[grade].push(name);
    }
}

School.prototype.roster = function() {
    let keys = Object.keys(this.Db);
    keys.sort((a,b)=> this.Db[a] - this.Db[b])
    sortedHash = {}
    // also sort students in each grade
    keys.forEach( (k) => sortedHash[k] = this.Db[k].sort())

    return sortedHash
}

School.prototype.grade = function(grade) {
   var students = (this.Db[grade]) ? this.Db[grade].sort() : []
    return students;
}

module.exports = School;

