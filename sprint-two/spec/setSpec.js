describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should add arrays to a set', function(){
    var a = [1,2];
    var b = ["a","b"];
    var c = [1,2]
    set.add(a);
    set.add(b);
    expect(set.contains(a)).to.equal(true);
    expect(set.contains(b)).to.equal(true);
    expect(set.contains([1,2])).to.equal(false);
  });

});
