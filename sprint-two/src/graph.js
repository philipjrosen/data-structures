

var Graph = function(){
  this.nodes = [];


};

Graph.prototype.addNode = function(value){
  var node = { edges: [], value: value};
  this.nodes.push(node);
};

Graph.prototype.contains = function(target){
  return _.some(this.nodes, function(node){
    return node.value === target;
  });
};

Graph.prototype.removeNode = function(target){
  var del = this.nodes.indexOf(_.find(this.nodes, function(node){
      return node.value === target;
  }));
  if (del !== -1){
    this.nodes.splice(del, 1);
  }
};

Graph.prototype.hasEdge = function(fromNodeValue, toNodeValue){
  var origin = _.find(this.nodes, function(node){
      return node.value === fromNodeValue;
  });
  var destination = _.find(this.nodes, function(node){
    return node.value === toNodeValue;
  });
  return (origin.edges.indexOf(destination) >= 0) ? true : false;
};

Graph.prototype.addEdge = function(fromNodeValue, toNodeValue){
  var origin = _.find(this.nodes, function(node){
      return node.value === fromNodeValue;
    });
  var destination = _.find(this.nodes, function(node){
      return node.value === toNodeValue;
    });
  origin.edges.push(destination);
  destination.edges.push(origin);

};

Graph.prototype.removeEdge = function(fromNodeValue, toNodeValue){
  var origin = _.find(this.nodes, function(node){
      return node.value === fromNodeValue;
  });
  var destination = _.find(this.nodes, function(node){
    return node.value === toNodeValue;
  });
  var dIndex = origin.edges.indexOf(destination);
  var oIndex = destination.edges.indexOf(origin);
  origin.edges.splice(dIndex,1);
  destination.edges.splice(oIndex,1);
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(node){
    cb(node.value);
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */



