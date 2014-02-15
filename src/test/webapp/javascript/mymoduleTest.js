define(['javascript/mymodule'], function(module) {
    describe("module", function() {
        describe("doStuff", function() {
            it("says hello world!", function() {
                expect(module.doStuff(2, 1)).toEqual("hello world!");
            });
            it("says foobar.", function() {
                expect(module.doStuff(1, 2)).toEqual("foobar.");
            });
        });
        describe("doStuffAsync", function() {
            it("says hello world!", function(done) {
                module.doStuffAsync(2, 1, function(res) {
                    expect(res).toEqual("hello world!");      
                    done();
                });
            });
            it("says foobar.", function(done) {
                module.doStuffAsync(1, 2, function(res) {
                    expect(res).toEqual("foobar.");
                    done();
                });
            });
        });
        describe("doStuffWithPromise", function() {
            it("says hello world!", function(done) {
                module.doStuffWithPromise(2, 1).done(function(res) {
                    expect(res).toEqual("hello world!");
                    done();
                });
            });
            it("says foobar.", function(done) {
                module.doStuffWithPromise(1, 2).done(function(res) {
                    expect(res).toEqual("foobar.");
                    done();
                });
            });
        });
    });
});
