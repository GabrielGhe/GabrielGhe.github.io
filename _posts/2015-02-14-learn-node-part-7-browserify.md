---
layout: post
title: "Learn Node Part 7: Browserify"
description: ""
category: javascript
tags: [nodejs, grunt, bower, browserify]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

NodeJS has the most amazing package manager, npm that allows you to install modules easily. After installing a module, you can simply require it by doing require('moduleName'). Wouldn't it be great if you could do that on the client side too? Using browserify, you can.

You can find more information [here](https://github.com/GabrielGhe/NodePractice/tree/master/Server14Browserify).

<h3>Installation</h3>

Step 1

<!-- Code _______________________________________-->
{% highlight bash linenos %}
### Command Line ###

# Get the right packages
npm install -g grunt-cli

npm install --save-dev bower
npm install --save-dev debowerify

npm install --save-dev load-grunt-tasks
npm install --save-dev grunt
npm install --save-dev grunt-contrib-clean
npm install --save-dev grunt-browserify
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 2

<!-- Code _______________________________________-->
{% highlight bash linenos %}
### Command Line ###

# Create a Gruntfile.js
touch Gruntfile.js
touch bower.json
touch .bowerrc
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 3

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in bower.json ###
{
    "name": "Server14Browserify",
    "version": "0.0.1",
    "dependencies": {}
}

// ### in .bowerrc ###
{
    "directory": "public/bower_components"
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 4

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in package.json ###

// add the following
"browserify" : {
  "transform": ["debowerify"]
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 5

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in Gruntfile.js ###

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    // will clean
    clean: {
        build: {
            src: ['public/javascripts/build.js']
        }
    },

    // will browserify all the js files
    browserify: {
        client: {
            src: ['public/javascripts/**/*.js'],
            dest: 'public/javascripts/build.js'
        }
    }
  });

  grunt.registerTask('default', ['clean', 'browserify:client']);
};
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 6

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in public/javascripts/index.js ###

// you can now require node modules or bower modules, or even other js files
var unique = require('uniq');
var $ = require("jquery");

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log($("body").html());
console.log(unique(data));
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


Step 7

<!-- Code _______________________________________-->
{% highlight bash linenos %}
### in Command Line ###

# running this will generate a build.js file
# that contains all the js you need (jquery + uniq + index.js)
# to use it, simply make a script with that file as the src
grunt
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<h3>How to use</h3>

After installing the modules you want to use (using bower or npm), you simply require them in your file

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in public/javascripts/index.js ###

var unique = require('uniq');               // node module
var $ = require('jquery');                  // bower module
var sayMyName = require('./sayMyName');     // own module

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log("'Uniq' node module", unique(data));
console.log("'jQuery' bower module", $('body').html());
console.log("'sayMyName', own module", sayMyName());
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

To make your own file into a module, you use module.exports like you would in node

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in public/javascripts/sayMyName.js ###

module.exports = function(){
    return "This is sparta";
};
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->