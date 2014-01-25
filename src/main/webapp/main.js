require.config({
	baseUrl: 'javascript',
    paths: {
        jquery: '../lib/jquery'
    }
});

require(['mymodule'], function(mymodule) {
	console.log("init main");
        
        mymodule.doStuffWithPromise(1,2).done(function(result) {
            console.log("doStuffWithPromise: " + result);
        });
        
});