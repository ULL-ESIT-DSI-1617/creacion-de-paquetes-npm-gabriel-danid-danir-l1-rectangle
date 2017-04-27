var Rectangle = require("../lib/rectangle.js");

describe("area Rectangle", function() {
  it("debe calcular el area de un rectángulo correctamente", function() {
    var a = new Rectangle({ width: 20, height: 30 });
    var result = a.area();
     result.should.equal(600);
  })
});