---
layout: post
title: "Continuous Development in Node.js"
description: "This post is all about continuous development using NodeJS and Express 4. I'm going to be basing this post off of [this blog post](http://ponyfoo.com/articles/continuous-development-in-nodejs)."
category: javascript
tags: [nodejs, watch, livereload, express]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

This post is all about continuous development using NodeJS and Express 4. I'm going to be basing this post off of [this blog post](http://ponyfoo.com/articles/continuous-development-in-nodejs).

<br />
<!-- Step 1: Installation -->
<h3>Step 1: Installation</h3>

<!-- Code _______________________________________-->
{% highlight bash linenos %}
# global
npm install -g express
npm install -g express-generator
npm install -g grunt-cli

# create express app with EJS for template, Less for css and a .gitignore file
express -e -c less --git
touch Gruntfile.js

# dev
npm install --save-dev grunt
npm install --save-dev load-grunt-tasks
npm install --save-dev grunt-contrib-watch
npm install --save-dev grunt-nodemon
npm install --save-dev grunt-concurrent
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<h4><b>Explanation</b></h4>

`load-grunt-tasks`: will be used to load all the grunt tasks right away.

`grunt-contrib-watch`: will allow us to watch for file changes and execute grunt tasks.

`grunt-nodemon`: we will use it to reload the server when a file changes.

`grunt-concurrent`: watch has livereload built in, so we want to be able to reload the page and restart server automatically.

<br />
<h4><b>Structure</b></h4>

The directory should look like this:

<!-- Code _______________________________________-->
{% highlight bash linenos %}
.
├── Gruntfile.js
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.less
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.ejs
    └── index.ejs
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<br />
<!-- Step 2: Setup -->
<h3>Step 2: Setup</h3>

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in Gruntfile.js ###
'use strict';

module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        
        watch: {
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'public/**/*.{less,js}',
                    'views/**/*.ejs'
                ]
          }
        }, // End watch

        nodemon: {
            dev: {
                options: {
                    nodeArgs: ['--debug'],
                    file: '--debug ./bin/www'
                }
            }
        }, //End nodemon

        concurrent: {
            dev: {
                options: {
                    logConcurrentOutput: true
                },
                tasks: ['watch', 'nodemon:dev']
            }
        }, // End concurrent

    });

    grunt.registerTask('default', ['concurrent:dev']);
};
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<br />
<!-- Step 3: Dev -->
<h3>Step 3: Dev</h3>

Now you can simply call `grunt` and the server will start up. When you make a change to a file and save, it will refresh the page.