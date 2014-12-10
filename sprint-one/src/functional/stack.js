var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function(){
    if (counter > 0) {
    var popped = storage[--counter];
    delete storage[counter];
    return popped;
    }
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
