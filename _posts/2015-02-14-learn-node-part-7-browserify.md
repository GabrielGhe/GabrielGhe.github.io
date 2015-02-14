---
layout: post
title: "Learn Node Part 7: Browserify"
description: ""
category: 
tags: []
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

NodeJS has the most amazing package manager, npm that allows you to install modules easily. After installing a module, you can simply require it by doing require('moduleName'). Wouldn't it be great if you could do that on the client side too? Using browserify, you can.


<h3>Installation</h3>
<p>Step 1</p>
```shell
### Command Line ###

# Get the right packages
npm install -g grunt-cli

npm install --save-dev bower
npm install --save-dev debowerify

npm install --save-dev load-grunt-tasks
npm install --save-dev grunt
npm install --save-dev grunt-contrib-clean
npm install --save-dev grunt-browserify
```

<p>Step 2</p>
```shell
### Command Line ###

# Create a Gruntfile.js
touch Gruntfile.js
touch bower.json
touch .bowerrc
```

<p>Step 3</p>
```javascript
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
```

<p>Step 4</p>
```javascript
// ### in package.json ###

// add the following
"browserify" : {
  "transform": ["debowerify"]
}
```

<p>Step 5</p>
```javascript
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
```

<p>Step 6</p>
```javascript
// ### in public/javascripts/index.js ###

// you can now require node modules or bower modules, or even other js files
var unique = require('uniq');
var $ = require("jquery");

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log($("body").html());
console.log(unique(data));
```


<p>Step 7</p>
```shell
### in Command Line ###

# running this will generate a build.js file
# that contains all the js you need (jquery + uniq + index.js)
# to use it, simply make a script with that file as the src
grunt
```

<h3>How to use</h3>

<p>After installing the modules you want to use (using bower or npm), you simply require them in your file</p>
```javascript

// ### in public/javascripts/index.js ###

var unique = require('uniq');               // node module
var $ = require('jquery');                  // bower module
var sayMyName = require('./sayMyName');     // own module

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log("'Uniq' node module", unique(data));
console.log("'jQuery' bower module", $('body').html());
console.log("'sayMyName', own module", sayMyName());
```

<p>To make your own file into a module, you use module.exports like you would in node</p>

```javascript

// ### in public/javascripts/sayMyName.js ###

module.exports = function(){
    return "This is sparta";
};
```