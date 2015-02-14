---
layout: post
title: "Learn React Part 6: using Node"
description: ""
category: javascript
tags: [react, nodejs, browserify, reactify, watchify, less, express]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>


We're going to set up a React server using browserify, EJS, Express and Less.

<!-- Part 1: Install -->
<br /><br />
<h4>Install</h4>

<!-- Code -->
{% highlight bash linenos %}
### in terminal ###
npm install -g express@3.4.8
express -e -c less
npm install
{% endhighlight %}
<!-- /Code -->

On `line 2`, we set the express version to 3.4.8. This is because the express generator for later versions is horrible. On `line 3`, we set the template engine to EJS using `-e` and the css engine to less using `-c less`.

Next, we're going to install all our fun modules.

<!-- Code -->
{% highlight bash linenos %}
### in terminal ###
npm install --save browserify reactify socket.io uglify-js
{% endhighlight %}
<!-- /Code -->

You can find out more about each module or try to look it up on this site. This is what your `package.json` should look like.

<!-- Code -->
{% highlight javascript linenos %}
{
  "name": "application-name",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "watch": "watchify client.js -o public/javascripts/build.min.js -v",
    "browserify": "browserify client.js | uglifyjs > public/javascripts/build.min.js",
    "build": "npm run browserify",
    "start": "npm run watch & nodemon app.js"
  },
  "dependencies": {
    "express": "3.4.8",
    "ejs": "*",
    "less-middleware": "*",
    "browserify": "~8.1.3",
    "reactify": "~1.0.0",
    "socket.io": "~1.3.4",
    "uglify-js": "~2.4.16",
    "watchify": "~2.3.0",
    "react": "~0.12.2"
  },
  "browserify": {
    "transform": [
      [
        "reactify"
      ]
    ]
  }
}

{% endhighlight %}
<!-- /Code -->

`npm run watch` – Running this command starts a watchify watch, so when we edit our js files, they get browserified on save.

`npm run build` – Running this command builds our build.min.js and minifies it for production

`npm start` – Running this command sets up a watch and runs our app via nodemon


<br /><br />

<!-- Part 2: Setup -->
<h4>Setup</h4>

Now that we have everything we need, we have to set up react. Lets set up `./views/index.ejs`.

<!-- Code -->
{% highlight html linenos %}
<!DOCTYPE html>
<html>
  <head>
    <title>MyApp</title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1>MyApp</h1>
    <section id="my-app"></section>
    <script type="text/javascript" src="/javascripts/build.min.js"></script>
  </body>
</html>
{% endhighlight %}
<!-- Code -->


Next we have to setup `./client.js` that will be transformed into `build.min.js`.


<!-- Code -->
{% highlight javascript linenos %}
/** @jsx React.DOM */

var React = require('react');
var MyApp = require('./components/MyApp.react');
React.render(<MyApp />, document.getElementById('my-app'));
{% endhighlight %}
<!-- /Code -->

We're still missing our `MyApp` component. Let's build it.

<!-- Code -->
{% highlight javascript linenos %}
/** @jsx React.DOM */

var React = require('react');
module.exports = MyApp = React.createClass({
  render: function(){
    return (
      <h1>Hello from the MyApp component</h1>
    )
  }
});
{% endhighlight %}
<!-- /Code -->