describe('doubleLinkedList', function() {
  var dLinkedList;

  beforeEach(function() {
    dLinkedList = DoubleLinkedList();
  });

  it('should have a head and tail', function() {
    expect(dLinkedList).to.have.property("head");
    expect(dLinkedList).to.have.property("tail");
  });

  it('should have methods named "addToHead", addToTail", "removeHead", "removeTail", and "contains"', function() {
    expect(dLinkedList.addToTail).to.be.a("function");
    expect(dLinkedList.removeHead).to.be.a("function");
    expect(dLinkedList.contains).to.be.a("function");
    expect(dLinkedList.addToHead).to.be.a("function");
    expect(dLinkedList.removeTail).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    dLinkedList.addToTail(4);
    expect(dLinkedList.tail.value).to.equal(4);
    dLinkedList.addToTail(5);
    expect(dLinkedList.tail.value).to.equal(5);
  });

  it('should remove the tail from the list when removeHead is called', function(){
    dLinkedList.addToTail(4);
    dLinkedList.addToTail(5);
    expect(dLinkedList.head.value).to.equal(4);
    dLinkedList.removeHead();
    expect(dLinkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    dLinkedList.addToTail(4);
    expect(dLinkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    dLinkedList.addToTail(4);
    dLinkedList.addToTail(5);
    expect(dLinkedList.contains(4)).to.equal(true);
    expect(dLinkedList.contains(5)).to.equal(true);
    expect(dLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    dLinkedList.addToTail(4);
    dLinkedList.addToTail(5);
    dLinkedList.removeHead();
    expect(dLinkedList.contains(4)).to.equal(false);
  });

  it('should designate a new head when new nodes are added', function(){
    dLinkedList.addToHead(4);
    expect(dLinkedList.head.value).to.equal(4);
    dLinkedList.addToHead(5);
    expect(dLinkedList.head.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    dLinkedList.addToTail(4);
    dLinkedList.addToTail(5);
    expect(dLinkedList.tail.value).to.equal(5);
    dLinkedList.removeHead();
    expect(dLinkedList.tail.value).to.equal(4);
  });



  // add more tests here to test the functionality of dLinkedList
});
