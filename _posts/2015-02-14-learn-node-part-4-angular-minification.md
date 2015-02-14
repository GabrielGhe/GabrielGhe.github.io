---
layout: post
title: "Learn Node Part 4: Angular Minification"
description: ""
category: javascript
tags: [nodejs, angularjs, minification]
---
{% include JB/setup %}

NodeJS with Angular Minification
============

<!-- Overview -->
<h3>Overview</h3>

Angularjs is a great framework. The problem is that minification is a bit more complicated because of angular's dependency injection. This project shows how you can minify an angular app.


<h4>Installation</h4>

Step 1

<!-- Code _______________________________________-->
{% highlight bash linenos %}
### Command Line ###

# Get the dependencies
npm install -g grunt-cli

npm install --save-dev load-grunt-tasks
npm install --save-dev grunt-contrib-clean
npm install --save-dev grunt-contrib-uglify
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


Step 2

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in public/javascripts/index.js ###

// Make sure that your angular syntax is like this
MyApp.controller("ThingController", ["$scope",
    function($scope){
        $scope.something = "Minification of angular apps works!";
    }
]);
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 3

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in Gruntfile.js ###
"use strict";

module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            build: {
                src: ["public/javascripts/index.min.js"]
            }
        },// End clean
        
        uglify: {
            options: {
                mangle: {
                    toplevel: true
                },
                compress: true
            },
            my_target: {
                files: {
                    'public/javascripts/index.min.js': ["public/javascripts/index.js"]
                }
            }
        },// End uglify
    });

    grunt.registerTask("default", ["clean", "uglify"]);
};
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 4

<!-- Code _______________________________________-->
{% highlight bash linenos %}
### Command Line ###
$ grunt
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
