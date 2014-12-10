var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.counter = 0;
  return instance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.counter++] = value;
  },
  pop: function(){
    if (this.counter > 0){
      var removed = this.storage[--this.counter];
      delete this.storage[this.counter];
      return removed;
    }
  },
  size: function(){
      return this.counter;
  }
};
