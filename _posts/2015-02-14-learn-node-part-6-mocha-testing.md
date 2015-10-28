---
layout: post
title: "Learn Node Part 6: Mocha Testing"
description: "On the client side, you have Karma for unit testing. On the server side, there's Mocha. This example project will demonstrate how to use mocha efficiently. You can find more information [here](https://github.com/GabrielGhe/NodePractice/tree/master/Server13MochaTesting)."
category: javascript
tags: [nodejs, mochajs, chai, supertest, grunt]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

On the client side, you have Karma for unit testing. On the server side, there's Mocha. This example project will demonstrate how to use mocha efficiently. You can find more information [here](https://github.com/GabrielGhe/NodePractice/tree/master/Server13MochaTesting).

<h3>Installation</h3>

Step 1

<!-- Code _______________________________________-->
{% highlight bash linenos %}
### Command Line ###

# Get the right packages
npm install -g grunt-cli

# Grunt modules
npm install --save-dev grunt
npm install --save-dev load-grunt-tasks
npm install --save-dev grunt-mocha-test

# Testing modules
npm install --save-dev chai
npm install --save-dev chai-as-promised
npm install --save-dev mocha
npm install --save-dev supertest
npm install --save-dev supertest-as-promised
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 2

<!-- Code _______________________________________-->
{% highlight bash linenos %}
### Command Line ###

# Create a Gruntfile.js
touch Gruntfile.js
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 3

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in Gruntfile.js ###

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
      mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/**/*.js']
            }
        }
  });
  
  // now "grunt" will run our tests
  grunt.registerTask('default', ['mochaTest']);
};
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 4

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in app.js ###

// At the end of the file add this line
module.exports = app;
// This will allow you to require the app to use with supertest
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 5

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in test/myTest.js ###

// Get the app and create a new supertest
var app = require('../app');
var agent = require('supertest-as-promised')(app);

// Require chai and if you want to test promises you can
// make it use 'chai-as-promised' or if you want to use chai's 'should'
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

describe('This is a test suite', function(){
    
    // has similar 'after' method
    before(function(done){
        // happens before the test suite runs
    });
    
    // has similar 'afterEach' method
    beforeEach(function(done){
        // happens before each test
    });

    it('should be a test', function(done){
        // use chai/supertest here
    });

    it('should be another test', function(done){
        // use chai/supertest here
    });
});
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 6

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in test/myTest.js ###

// A test would look like this
it('should not find the page (using supertest-as-promised)', function(done){
    agent
        .get('/gbeqwigbq')
        .expect(404)
        .then(function(res){
            "works".should.equal("works");
            "not works".should.not.equal("works");
        })
        .done(done);  // remember to call done
});
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->