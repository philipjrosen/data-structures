var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.removeFromParent = function() {
  var index = this.parent.children.indexOf(this);
  this.parent.children.splice(index, 1);
  this.parent = null;
};


treeMethods.contains = function(target){
  if (this.value === target) return true;
  return _.some(this.children, function(child) {
    return child.contains(target);
  });
};

treeMethods.traverse = function(cb) {
  cb(this.value);
  _.each(this.children, function(child) {
    child.traverse(cb);
  });
};


/*
 * Complexity: What is the time complexity of the above func
 addChild ~ O(1) ie constant time
 contains ~ O(n!) eg a tree with unbounded children, with unbounded depth, and for which each level has unbounded children
 */
