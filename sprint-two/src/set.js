var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  // return typeof _.find(this._storage, function(value) {
  //   return value === item;
  // }) === 'string';
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item){
  var removed = this._storage[item];
  delete this._storage[item];
  return removed;
};

/*
 * Complexity: What is the time complexity of the above functions?
    O(1) ~ it's a hash table!
 */
