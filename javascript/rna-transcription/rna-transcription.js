var DnaTranscription = function() {
}

DnaTranscription.prototype.toRna = function(str) {
    const len = str.length;
    let output = "";
    const DNA_RNA = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'};
    for (var i=0; i< len; i++) {
        char = str.charAt(i);
        if ( DNA_RNA[char]) {
            output += DNA_RNA[char];
        } else {
            throw new Error('Invalid input');
        }
    }
    return output;
}
 module.exports = DnaTranscription;