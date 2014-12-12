var BinarySearchTree = function(value) {
  var tree = Object.create(bstMethods);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
};

var bstMethods = {
  insert: function(value) {
    var child = BinarySearchTree(value);
    if (this.value === value) {
      return;
    } else if (value < this.value ) {
      if (this.left === null) {
        this.left = child;
      } else {
        this.left.insert(child.value);
      }
    } else if (value > this.value ) {
      if (this.right === null) {
        this.right = child;
      } else {
        this.right.insert(child.value);
      }
    }
  },

  contains: function(target) {

    if (this.value === target) return true;
    if (target < this.value) {
      return this.left !== null && this.left.contains(target);
    } else {
      return this.right !== null && this.right.contains(target);
    }
  },

  depthFirstLog: function(cb) {
    cb(this.value);
    var children = [this.left, this.right];
    _.each(children, function(child) {
        child && child.depthFirstLog(cb);
    });
  },

  breadthFirstLog: function() {
   var queue = [];
   queue.push(this);
   while(queue.length!==0){
    console.log(queue[0].value);
    if(queue[0].left !== null){
      queue.push(queue[0].left);
    }
    if(queue[0].right !== null){
      queue.push(queue[0].right);
    }
    queue.splice(0,1);
   }
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 contains: O(log n)
 depthFirstLog: O(n)
 breadthFirstLog: O(n)
 */
