var PrefixTree = function(){
  var tree = Object.create(prefixTreeMethods);
  tree.children = [];

  return tree;
};

var prefixTreeMethods = {
  hasChildren: function(){},

  findString: function(){},

  newNode: function() {},

  returnWord: function() {},

};
