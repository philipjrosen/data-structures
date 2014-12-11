var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  var found = false;
  if (this.children.length === 0) {
    if (this.value === target) {
      found = true;
    }
  } else {
    found = _.some(this.children, function(child) {
      return child.value === target || child.contains(target);
    });
  }
  return found;
};


/*
 * Complexity: What is the time complexity of the above func
 addChild ~ O(1) ie constant time
 contains ~ O(n!) eg a tree with unbounded children, with unbounded depth, and for which each level has unbounded children
 */
