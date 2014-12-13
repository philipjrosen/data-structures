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
    this.left && this.left.depthFirstLog(cb);
    cb(this.value);
    this.right && this.right.depthFirstLog(cb);
  },

  breadthFirstLog: function(cb) {
   var queue = [];
   queue.push(this);
   while(queue.length!==0){
    cb(queue[0].value);
    if(queue[0].left !== null){
      queue.push(queue[0].left);
    }
    if(queue[0].right !== null){
      queue.push(queue[0].right);
    }
    queue.splice(0,1);
   }
  },

  assignDepths: function(cb) {
   var currentDepth = 0;
   var queue = [];
   queue.push(this);
   while(queue.length!==0){
    cb(queue[0].value);
    queue[0][depth] = currentDepth;
    if(queue[0].left !== null){
      queue[0].left[depth] = q[0][depth]+1;
      queue.push(queue[0].left);
    }
    if(queue[0].right !== null){
      queue.push(queue[0].right);
      queue[0].right[depth] = q[0][depth]+1;
    }
    queue.splice(0,1);
   }
  },


  // breadthFirstMarkerV2: function(cb) {
  //  var currentDepth = 0;
  //  var currentNode = null;
  //  var queue = [];
  //  queue.push(this);
  //  while(queue.length!==0){
  //   currentNode = queue.pop();
  //   cb(currentNode.value);
  //   currentNode[depth] = currentDepth;
  //   currentDepth++;
  //   if(currentNode.left !== null){
  //     currentNode.left[depth] = currentDepth;
  //     queue.push(currentNode.left);
  //   }
  //   if(currentNode.right !== null){
  //     queue.push(currentNode.right);
  //     currentNode.right[depth] = currentDepth;
  //   }
  //  }
  // },
  checkMin: function(){},
  checkMax: function(){},
  rebalance: function(){}
}
/*
shallowest node depth is equal to min depth
deepest node depth = max depth
rebalance when max > min *2
*/
/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 contains: O(log n)
 depthFirstLog: O(n)
 breadthFirstLog: O(n)
 */
