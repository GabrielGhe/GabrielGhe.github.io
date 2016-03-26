---
layout: post
title: "Learn React v2: Webpack"
description: "
I made several posts on react, but the web has changed a lot over the past year and I needed to make an updated post on how to Javascript. The two things that have changed Javascript are [Babel](https://babeljs.io/)(Lets you write [ES6](https://nodejs.org/en/docs/es6/) and ES7 code) and [Webpack](https://webpack.github.io/docs/what-is-webpack.html)(Which bundles modules and loads them for you at the right time). I'm going to go over how to use Babel and Webpack together with React.
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

We can start with loading the necessary modules.

<!-- Code _______________________________________-->
{% highlight bash linenos=table %}
# install npm if you haven't already
curl -L https://www.npmjs.com/install.sh | sh

# babel-loader lets you work with babel and webpack nicely
npm i babel-loader babel-core --save-dev
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Now we have to configure Webpack to do things in `webpack.config.js`.

<!-- Code _______________________________________-->
{% highlight javascript linenos=table %}
'use strict';

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
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

We have to break down what each property does because that's a bunch of code.

- entry: This one is obvious. This is the app's entry point
- resolve: This is amazing. It will let you just write `require('./myScript')` and it will look for a js file called myScript in the current working directory.
- output: Where to build the bundle file that gets generated.
- module: loaders will let you require .css and .jsx files

