const chai = require("chai")
const balancer = require("../lib/balanced")

describe("Balanced", () => {
  it("should return true for '()'", () => {
    var string = "'()'"
    chai.expect(balancer.balanced(string)).to.eql(true)
  })

  it("should return false for '('", () => {
    var string = "'('"
    chai.expect(balancer.balanced(string)).to.eql(false)
  })

  it("should return true for '(())'", () => {
    var string = "'(())'"
    chai.expect(balancer.balanced(string)).to.eql(true)
  })

  it("should return false for ')('", () => {
    var string = "')('"
    chai.expect(balancer.balanced(string)).to.eql(false)
  })

  it("should return true for '[](){}'", () => {
    var string = "'[](){}'"
    chai.expect(balancer.balanced(string)).to.eql(true)
  })

  it("should return true for '[({})]'", () => {
    var string = "'[({})]'"
    chai.expect(balancer.balanced(string)).to.eql(true)
  })

  it("should return false for '[(]{)}'", () => {
    var string = "'[(]{)}'"
    chai.expect(balancer.balanced(string)).to.eql(false)
  })

  it("should return false for '][)(}{'", () => {
    var string = "'][)(}{'"
    chai.expect(balancer.balanced(string)).to.eql(false)
  })

  it("should return true for 'var greeting = { sayHello: hello() }'", () => {
    var string = "'var greeting = { sayHello: hello() }'"
    chai.expect(balancer.balanced(string)).to.eql(true)
  })

  it("should return false for 'var sayGoodbye = function() { goodbye();'", () => {
    var string = "'var sayGoodbye = function() { goodbye();'"
    chai.expect(balancer.balanced(string)).to.eql(false)
  })
})
