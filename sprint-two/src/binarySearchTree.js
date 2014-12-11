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
    var found = false;
    if (this.value === target) {
      found = true;
    } else if (target < this.value) {
      found = this.left !== null && this.left.contains(target);
    } else {
      found = this.right !== null && this.right.contains(target);
    }
    return found;
  },

  depthFirstLog: function() {

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
