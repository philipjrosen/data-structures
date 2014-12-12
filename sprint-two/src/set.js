var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];

  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.push(item);
};

setPrototype.contains = function(item){
  return this._storage.indexOf(item) >= 0;
};

setPrototype.remove = function(item){
  var index = this._storage.indexOf(item);
  var removed = this._storage[index];
  this._storage.splice(index,1);
  return removed;
};

/*
 * Complexity: What is the time complexity of the above functions?
    O(1) ~ it's a hash table!
 */
