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

  depthFirstLog: function() {

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
