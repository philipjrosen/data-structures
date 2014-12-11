var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//REFACTOR:
//Handling hash conflicts: store conflicting key-value
//pairs in sub-arrays within this._storage.storage

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage.get(i))){
    this._storage.get(i).push(v);
  } else {
    var subStorage = [];
    subStorage.push(v);
    this._storage.set(i,subStorage);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(i);
  return result === undefined ? null : result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(element, index, storage){
    if(i===index){
      delete storage[index];
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
