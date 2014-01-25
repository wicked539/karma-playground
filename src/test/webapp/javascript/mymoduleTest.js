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
            it("says hello world!", function() {
                
                var result = undefined;
                
                runs(function() {
                    module.doStuffAsync(2, 1, function(res) {
                        result = res;
                    });
                });
                
                waitsFor(function() {
                   return result; 
                }, 50);
                
                runs(function() {
                    expect(result).toEqual("hello world!");
                });
            });
            it("says foobar.", function() {
                var result = undefined;
                
                runs(function() {
                    module.doStuffAsync(1, 2, function(res) {
                        result = res;
                    });
                });
                
                waitsFor(function() {
                   return result; 
                }, 50);
                
                runs(function() {
                    expect(result).toEqual("foobar.");
                });
            });
        });
        describe("doStuffWithPromise", function() {
            it("says hello world!", function() {
                
                var result = undefined;
                
                runs(function() {
                    module.doStuffWithPromise(2, 1).done(function(res) {
                        result = res;
                    });
                });
                
                waitsFor(function() {
                   return result; 
                }, 50);
                
                runs(function() {
                    expect(result).toEqual("hello world!");
                });
            });
            it("says foobar.", function() {
                
                var result = undefined;
                
                runs(function() {
                    module.doStuffWithPromise(1, 2).done(function(res) {
                        result = res;
                    });
                });
                
                waitsFor(function() {
                   return result; 
                }, 50);
                
                runs(function() {
                    expect(result).toEqual("foobar.");
                });
            });
        });
    });
});
