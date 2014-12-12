var DoubleLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var node = Node(value);
    list.head.prev = node;
    node.next = list.head;
    list.head = node;
  };

  list.addToTail = function(value){
    var node = Node(value);
    if (list.head === null){
      list.tail = node;
      list.head = node;
    } else {
      list.tail.next = node;
      node.prev = list.tail;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var result = list.head.value;
    if (list.head.next === null){
      list.head = null;
      return result;
    }
    list.head.next.prev = null;
    list.head = list.head.next;
    return result;
    };

  list.removeTail = function() {
    list.tail.prev.next = null;
    list.tail = list.tail.prev;
  };

  list.contains = function(target){
    var result = false;
    var currentNode =list.head;
    while(currentNode !== null){
      if (currentNode.value === target){
        result = true;
      }
      currentNode = currentNode.next;
    }
    return result;
  };
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
