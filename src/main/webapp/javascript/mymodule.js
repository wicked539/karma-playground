define(['jquery'], function($) {
    return {
        doStuff: function(a, b) {
            if (a > b) {
                return "hello world!";
            }
            else {
                return "foobar.";
            }
        },
        
        doStuffAsync: function(a, b, callback) {

            if (a > b) {
                setTimeout(callback("hello world!"), 5);
            }
            else {
                setTimeout(callback("foobar."), 5);
            }
        },
        
        doStuffWithPromise: function(a, b) {
            
            var deferred = $.Deferred();
            
            if (a > b) {
                setTimeout(function() {
                    deferred.resolve("hello world!");
                }, 5);
            }
            else {
                setTimeout(function() {
                    deferred.resolve("foobar.");
                }, 5);
            }
            
            return deferred.promise();
        },
        
        doUntestedStuff: function() {
            return "i am untested!";
        }
    };
});