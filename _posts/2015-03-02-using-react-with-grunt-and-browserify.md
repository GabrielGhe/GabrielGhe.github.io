---
layout: post
title: "Using React with Grunt and Browserify"
description: ""
category: javascript
tags: [grunt, reactjs, browserify]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

If we want to set up a fast way to develop React web apps, we have to be able to compile `jsx` files quickly. To accomplish this, we use `browserify` and `grunt`. Read the following posts before going further: [Setup Grunt](/javascript/2015/02/14/learn-node-part-3-grunt/), [Continuous NodeJS](/javascript/2015/03/02/continuous-development-in-nodejs/).

<br />
<!-- Step 1: Installation -->
<h3>Step 1: Installation</h3>

<!-- Code _______________________________________-->
{% highlight bash linenos %}
# ### in Terminal ###
npm install --save react

npm install --save-dev grunt
npm install --save-dev load-grunt-tasks

npm install --save-dev grunt-contrib-watch
npm install --save-dev grunt-contrib-clean
npm install --save-dev grunt-nodemon
npm install --save-dev grunt-concurrent

npm install --save-dev grunt-browserify
npm install --save-dev grunt-react

touch Gruntfile.js
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<br />
<!-- Step 2: Setup -->
<h3>Step 2: Setup</h3>

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in Gruntfile.js ###

module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        watch: {
            livereload: {
                tasks: ['clean', 'browserify'],
                options: {
                    livereload: true
                },
                files: [
                    './public/**/*.less',
                    './public/**/*.jsx',
                    './public/**/*.js',
                    './views/**/*.ejs'
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

        clean: {
            build: {
                src: ['./public/javascripts/build.min.js']
            }
        }, // End clean

        browserify: {
            options: {
                transform: [ require('grunt-react').browserify ]
            },
            files: {
                src: ['./public/javascripts/**/*.jsx', './public/javascripts/**/*.js'],
                dest: './public/javascripts/build.min.js'
            }
        } // End browserify
    });

    grunt.registerTask('default', ['clean', 'browserify', 'concurrent:dev']);
};
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

`watch`: Will watch changes and run clean, browserify and reload.

`nodemon`: Will restart the server when files change.

`concurrent`: Will run both watch and nodemon at the same time.

`clean`: Will remove the old build.min.js

`browserify`: Will concatinate all the js files and jsx files into 1.


<br />
<!-- Step 3: Dev -->
<h3>Step 3: Dev</h3>

With this setup, we can add jsx and js files. Your directory (at the beginning... it shouldn't look this way) will look like this. 

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
│   │   ├── build.min.js
│   │   ├── driver.jsx
│   │   └── test.jsx
│   └── stylesheets
│       ├── style.css
│       └── style.less
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.ejs
    └── index.ejs
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in test.jsx ###

/** @jsx React.DOM */

var React = require('react');
var Test = React.createClass({
    render: function(){
        return (
            <h1>Hello From React</h1>
        );
    }
});
module.exports = Test;
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in driver.jsx ###

/** @jsx React.DOM */

var React = require('react');
var Test = require('./test.jsx');

window.onload = function(){
    React.render(<Test />, document.body);
};
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

You have to make sure to require `build.min.js` in `index.ejs`.

Now you can simply call `grunt` and the server will start up. Any change you make to a jsx, js, less or ejs file will reload the server and the browser tab.