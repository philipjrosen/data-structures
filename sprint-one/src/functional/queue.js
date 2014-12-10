var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //fifo
  var counter = 0;
  var first = 0;
  var last = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[last++] = value;
    counter++;
  };

  someInstance.dequeue = function(){
    if(counter>0){
      var removed = storage[first];
      delete storage[first++];
      counter--;
      return removed;

    }
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
