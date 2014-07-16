describe("triangleSorter", function(){
  it("returns equilateral if all sides are equal", function() {
    triangleSorter(2,2,2).should.equal("equilateral");
  });
  it("returns iscoceles if 2 sides are equal", function() {
    triangleSorter(3,3,4).should.equal("iscoceles");
  });
  it("returns scalene if all sides are inequal", function(){
    triangleSorter(1,2,3).should.equal("scalene");
  });
  it("returns invalid if one side is greater than the other 2 sides combined", function() {
    triangleSorter(1,1,8).should.equal("invalid!");
  });
});
