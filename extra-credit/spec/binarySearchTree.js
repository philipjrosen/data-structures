/* global binarySearchTree, describe, it, expect, should */

describe('BinarySearchTree()', function () {
  var binarySearchTree;


  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  describe('insert()', function () {

    it('should insert values at the correct location in the tree', function(){
      binarySearchTree.insert(2);
      binarySearchTree.insert(3);
      binarySearchTree.insert(7);
      binarySearchTree.insert(6);
      expect(binarySearchTree.left.right.value).to.equal(3);
      expect(binarySearchTree.right.left.value).to.equal(6);
    });

  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    console.log(array);
    expect(array).to.eql([2,3,5]);
  });

  it('should return a sorted array of tree values from "depthFirstLog"', function(){
    var arr = [];
    binarySearchTree.insert(6);
    binarySearchTree.insert(3);
    binarySearchTree.insert(9);
    binarySearchTree.insert(7);
    binarySearchTree.insert(10);
    binarySearchTree.insert(8);
    binarySearchTree.insert(11);
    binarySearchTree.depthFirstLog(function(x){
      arr.push(x);
    });
    expect(arr).to.eql([3,5,6,7,8,9,10,11]);
  });

  it('should log every value in a tree using "breadthFirstLog"', function(){
    var arr = [];
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(1);
    binarySearchTree.insert(6);
    binarySearchTree.insert(9);
    binarySearchTree.breadthFirstLog(function(x){
      arr.push(x);
    });
    binarySearchTree.breadthFirstLog(function(x){
      console.log(x);
    });
    expect(arr).to.eql([5,2,7,1,6,9]);
  });

  it('should have methods "checkMin, checkMax, rebalance', function(){
    expect(binarySearchTree.checkMin).to.be.a("function");
    expect(binarySearchTree.checkMax).to.be.a("function");
    expect(binarySearchTree.rebalance).to.be.a("function");
  });

  describe('checkMin()', function () {

    it('should keep track of minimum depth using "checkMin" ', function(){
      binarySearchTree.insert(2);
      expect(binarySearchTree.checkMin()).to.equal(1);
      binarySearchTree.insert(7);
      binarySearchTree.insert(1);
      binarySearchTree.insert(6);
      binarySearchTree.insert(9);
      expect(binarySearchTree.checkMin()).to.equal(2);
    });

    it('should track minimum depth of a linear tree ', function(){
      binarySearchTree.insert(4);
      binarySearchTree.insert(3);
      binarySearchTree.insert(2);
      binarySearchTree.insert(1);
      expect(binarySearchTree.checkMin()).to.equal(4);
    });


    it('should return 0 when tree has no children', function(){
      expect(binarySearchTree.checkMin()).to.equal(0);
    });

    it('should return the right level with multiple shallow nodes', function(){
      binarySearchTree.insert(3);
      binarySearchTree.insert(4);
      binarySearchTree.insert(2);
      binarySearchTree.insert(8);
      binarySearchTree.insert(6);
      binarySearchTree.insert(9);
      binarySearchTree.insert(10);
      expect(binarySearchTree.checkMin()).to.equal(2);
    });

    it('', function(){
    });

    it('', function(){
    });

    it('', function(){
    });

  });
  describe('checkMax()', function () {
    it('(inc)should return the right level with multiple shallow nodes', function(){

      expect(binarySearchTree.checkMin()).to.equal(2);
    });

    it('(inc)should return a result equal to checkMin when the tree is linear', function(){
      binarySearchTree.insert(4);
      binarySearchTree.insert(3);
      binarySearchTree.insert(2);
      binarySearchTree.insert(1);
      //inc
    });

  });
  // Add more assertions here

  //reBalance testTree:
  /*
        binarySearchTree.insert(3);///1
      binarySearchTree.insert(4);///2
      binarySearchTree.insert(2);///2
      binarySearchTree.insert(8);//1
      binarySearchTree.insert(6);///2
      binarySearchTree.insert(9);//2
      binarySearchTree.insert(10);//3
      binarySearchTree.insert(20);//4
      binarySearchTree.insert(25);//5
      binarySearchTree.insert(24);
      binarySearchTree.insert(30);//6
      binarySearchTree.insert(27);//7
      binarySearchTree.insert(31);//7
      binarySearchTree.insert(23);//7
      binarySearchTree.insert(22);//7
  */
});
