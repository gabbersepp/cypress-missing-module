import Module1 from "./../modules/Module1";

describe('My First Test', function() {
  it('Does not do much!', function() {
    new Module1();
    const m1 = __webpack_require__("./cypress/modules/Module1.js").default;
    expect(new m1().test).to.equal("module1");

    expect(window.asd).to.equal("asd");
    
    const m2 = __webpack_require__("./cypress/modules/Module2.js").default;
    expect(new m2().test).to.equal("module1");

  })
})