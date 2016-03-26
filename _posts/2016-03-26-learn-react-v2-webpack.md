---
layout: post
title: "Learn React v2: Webpack"
description: "
I made several posts on react, but the web has changed a lot over the past year and I needed to make an updated post on how to Javascript. The two things that have changed Javascript are [Babel](https://babeljs.io/)(Lets you write [ES6](https://nodejs.org/en/docs/es6/) and ES7 code) and [Webpack](https://webpack.github.io/docs/what-is-webpack.html)(Which bundles modules and loads them for you at the right time). I'm going to go over how to use Babel and Webpack together with React. This post is just a short summary of [this amazing post](http://survivejs.com/webpack_react/webpack_and_react/).
"
category: javascript
tags: [react, webpack, babel, modules, bundle]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

{{ page.description }}

<!-- Content -->
<h3>Content</h3>

The end structure will look like this:

<!-- Code _______________________________________-->
{% highlight bash linenos=table %}
node_modules
app
    components
        App.jsx
        MyText.jsx
    index.css
    index.jsx
build
    bundle.js
    index.html
.babelrc
package.json
webpack.config.js

{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- package.json -->
<h4>package.json</h4>

You should start out with an empty `package.json` file.

<!-- Code _______________________________________-->
{% highlight javascript linenos=table %}
{
  "name": "my-package",
  "version": "1.0.0",
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

We have to load the necessary modules.

<!-- Code _______________________________________-->
{% highlight bash linenos=table %}
# install npm if you haven't already
curl -L https://www.npmjs.com/install.sh | sh

# babel-loader lets you work with babel and webpack nicely
npm i babel-{loader,core} --save-dev

npm i react react-dom --save
npm i webpack webpack-dev-server webpack-merge --save-dev

npm i css-loader style-loader --save-dev
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->




<!-- Webpack-->
<h4>Webpack</h4>

Now we have to configure Webpack to do things in `webpack.config.js`.

<!-- Code _______________________________________-->
{% highlight javascript linenos=table %}
'use strict';

const path = require('path');
const merge = require('webpack-merge');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    app: PATHS.app
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },

      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      }
    ]
  }
};

module.exports = merge(common, {});
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

We have to break down what each property does because that's a bunch of code.

- <b>entry</b>: This one is obvious. This is the app's entry point.

- <b>resolve</b>: This is amazing. It will let you just write `require('./myScript')` and it will look for a js file called myScript in the current working directory.

- <b>output</b>: Where to build the bundle file that gets generated.

- <b>module</b>: loaders will let you require .css and .jsx files.




<!-- Babel -->
<h4>Babel</h4>

Right now, babel isn't doing anything, we need a `.babelrc`. That's because we haven't told babel what to do. Babel runs on two types of plugins. There are syntax plugins and transform plugins. To make things easier for devs, babel supports presets (in our case, we want babel to be preset to developing react).

<!-- Code _______________________________________-->
{% highlight bash linenos=table %}
npm i babel-preset-{es2015,react} --save-dev
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->




<!-- Extra features -->
<h4>Extra features</h4>

We'll also add extra functionality from [this plugin](https://github.com/survivejs/babel-preset-survivejs-kanban).
We've added the following features.

- <b>[Property initializers](https://github.com/jeffmo/es-class-static-properties-and-fields)</b>: Allows us to use the syntax `myMethod = (arguments) => {}`

- <b>[Decorators](https://github.com/wycats/javascript-decorators)</b>: Gives us the ability to annotate classes to give them additional functionality using the syntax `@MyDecorator(DoThing)`. Decorators exists by default in other languages like python, c# and java. They're very powerful.

- <b>[Object rest/spread](https://github.com/sebmarkbage/ecmascript-rest-spread)</b>: Lets us do `let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };` and now `z = {a:3, b:4}`.


<!-- Code _______________________________________-->
{% highlight bash linenos=table %}
npm i babel-preset-survivejs-kanban --save-dev
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->




<!-- Loading the Babel Settings -->
<h4>Loading the Babel Settings</h4>

We load all these settings into our `.babelrc` file which will preset babel to work with reactjs.

<!-- Code _______________________________________-->
{% highlight javascript linenos=table %}
{
  "presets": [
    "es2015",
    "react",
    "survivejs-kanban"
  ]
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->




<!-- Creating the App class -->
<h4>Creating the App class</h4>

<b>`app/components/App.jsx`</b>

<!-- Code _______________________________________-->
{% highlight javascript linenos=table %}
import React from 'react';
import MyText from './MyText.jsx';

export default class App extends React.Component {
  render() {
    return <MyText />;
  }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->




<!-- Creating the MyText class -->
<h4>Creating the MyText class</h4>

<b>`app/components/MyText.jsx`</b>

<!-- Code _______________________________________-->
{% highlight javascript linenos=table %}
import React from 'react';

export default () => <div>My random note</div>;
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->




<!-- Entry point -->
<h4>Entry point</h4>

<b>app/index.jsx</b>

<!-- Code _______________________________________-->
{% highlight javascript linenos=table %}
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->




<!-- Index.html -->
<h4>Index.html</h4>

<!-- Code _______________________________________-->
{% highlight html linenos=table %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>React1</title>
  </head>
  <body>
    <div id="app"></div>

    <script src="./bundle.js"></script>
  </body>
</html>
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->





<!-- Index.css -->
<h4>Index.css</h4>

<!-- Code _______________________________________-->
{% highlight css linenos=table %}
body {
  background-color:lightgrey;
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->