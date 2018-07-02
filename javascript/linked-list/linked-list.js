var LinkedList = function() {
    this.first = null;
    this.last = null;
}
LinkedList.prototype.pop = function() {
    const popValue = this.last.value;
    // remove the node=reassign tail
    const curLast = this.last
    this.last = curLast.prev
    curLast.next = null
    return popValue
}
LinkedList.prototype.push = function(num) {
    // create first node
    if (this.first === null) {
        this.first = this.last = new Node(null, num, null);
    } else {
        //add to tail
        curLast = this.last;
        curLast.next = new Node(curLast, num, null)
        // update tail
        this.last = curLast.next
    }
}
LinkedList.prototype.shift = function() {
    const shiftValue = this.first.value;
    // remove the node= reassign head
    this.first= this.first.next
    return shiftValue
}
LinkedList.prototype.unshift = function(num) {
    // create first node
    if (this.first === null) {
        this.first = this.last = new Node(null, num, null);
    } else {
        //add to head
        const curFirst = this.first;
        this.first = new Node(null, num, curFirst)
        curFirst.prev = this.first
    }
}
LinkedList.prototype.count = function() {
    let count = 0;
    if ( this.first === null) { return 0;}
    let curPos = this.first;
    while (curPos !== null ) {
        count++;
        curPos = curPos.next
    }
    return count;
}

// delete a node in the list, can be middle or only node on the list
LinkedList.prototype.delete = function(num) {
    let curPos = this.first;
    
    // delete a middle node or only node
    while (curPos !== null ) {
        if ( curPos.value === num) {
            // delete this node
            if (curPos.prev === null && curPos.next === null) {
                // this is only node
                this.first = this.last  = null;
                break;  
            } else {
                // remove this node from list
                let prevNode = curPos.prev;
                prevNode.next = curPos.next
                break;  
            }
        } else {
            // it is not the node
            if (curPos.prev === null && curPos.next === null) {
                // this is only node
                this.first = this.last = null;
                break; 
            } else {
                curPos = curPos.next
            }
        }
    }
}

class Node {
    constructor(prev, value, next) {
        this.prev = prev
        this.value = value
        this.next = next
    }
}

module.exports = LinkedList;

