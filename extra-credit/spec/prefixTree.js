//working code
/* global binarySearchTree, describe, it, expect, should */
describe('PrefixTree()', function () {
  var prefixTree;
  beforeEach(function() {
    prefixTree = PrefixTree();
  });

  it('should have a hasChildren, findString, returnWord function', function() {
    expect(prefixTree.hasChildren).to.be.a("function");
    expect(prefixTree.newNode).to.be.a("function");
    expect(prefixTree.findString).to.be.a("function");
    expect(prefixTree.returnWord).to.be.a("function");
  });

  it('should have a property: children array', function() {
    expect(prefixTree.children).to.be.instanceof(Array);
  });


  it('should have a parentNode', function() {
    expect(prefixTree.hasChildren).to.be.a("function");
  });

it('should have a parentNode', function() {
    expect(prefixTree.hasChildren).to.be.a("function");
  });

});
