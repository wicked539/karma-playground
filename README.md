karma-playground
================

Playground project to try out new web toolchain:

* Webapp using require.js
* Jasmine for unit tests
* Karma as testrunner
* Phantom.js as headless browser
* Maven as build tool

Whats working so far
--------------------

[x] Dependency injection via require works for prod and test
[x] Tests are run with maven -> karma -> phantom.js
[x] Code coverage!

How to run
----------

* Install node and npm (and maven, obiviously)
* Run 'npm install karma' to install karma, use optional -g flag to make it available system-wide
* Run 'npm install karma-coverage' to install missing coverage plugin
* Done! Run 'karma start' for drive-by testing or 'mvn clean install' to build

