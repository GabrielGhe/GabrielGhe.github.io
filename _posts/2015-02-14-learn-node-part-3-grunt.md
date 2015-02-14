---
layout: post
title: "Learn Node Part 3: Grunt"
description: ""
category: javascript
tags: [nodejs, npm, grunt]
---
{% include JB/setup %}

[Grunt](http://gruntjs.com) is amazing! It automates tasks for you in the most amazing way. It allows you to run tests, minify css/js files, combine js files and much much more.

In this project, I used 2 js files [index.js](https://github.com/GabrielGhe/NodePractice/blob/master/Server10Grunt/public/javascripts/index.js) and [index2.js](https://github.com/GabrielGhe/NodePractice/blob/master/Server10Grunt/public/javascripts/index2.js). I concatinated them and saved the result to [built.js](https://github.com/GabrielGhe/NodePractice/blob/master/Server10Grunt/public/javascripts/built.js) and then I uglified that file and saved the result to [built.min.js](https://github.com/GabrielGhe/NodePractice/blob/master/Server10Grunt/public/javascripts/built.min.js). I also minimized the css using cssmin.

<h3>Installation</h3>
Step 1

<!-- Code _______________________________________-->
{% highlight bash linenos %}
### Terminal ###

# Get the right packages
npm install -g grunt-cli

npm install --save-dev load-grunt-tasks
npm install --save-dev grunt-contrib-uglify
npm install --save-dev grunt-contrib-clean
npm install --save-dev grunt-contrib-concat
npm install --save-dev grunt-contrib-cssmin
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
    // ########## your tasks go here ##############
  });
  
  // now "grunt taskname" will run concat, uglify, some-other-task in that order
  grunt.registerTask('taskname', ['concat', 'uglify', 'some-other-task']);
};
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Step 4

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in Gruntfile.js ###

// The initConfig would look something like this
grunt.initConfig({
  concat: {
      dist: {
          src: ['public/javascripts/*.js'],
          dest: 'public/javascripts/built.js',
      },
  },// End concat
  clean: {
      build: {
          src: ["public/javascripts/built.js", "public/javascripts/built.min.js"]
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
              'public/javascripts/built.min.js': ["public/javascripts/built.js"]
          }
      }
  },// End uglify
  cssmin: {
      options: {
        files: [{
            expand: true,
            cwd: 'public/stylesheets/',
            src: ['style.css'],
            dest: 'public/stylesheets/',
            ext: '.min.css'
        }]
      }
  }// End cssmin
});
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->