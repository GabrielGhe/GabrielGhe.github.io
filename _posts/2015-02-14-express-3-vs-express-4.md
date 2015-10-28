---
layout: post
title: "Express 3 vs Express 4"
description: "This post is all about the differences between Express v3 and v4. You can find more information [here](http://expressjs.com/guide/migrating-4.html)."
category: javascript
tags: [expressjs, nodejs, web]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

This post is all about the differences between Express v3 and v4. You can find more information [here](http://expressjs.com/guide/migrating-4.html).



<!-- Package.json and server.js -->
<h3>Package.json and server.js</h3>

A lot of middleware was removed and placed into their own modules so that they can get worked on without impacting Express. I'll show you how you used to make an Express server in v3 and how you make one in v4.

<!-- Express 3-->
<h4>Express 3</h4>

<!-- Code -->
{% highlight javascript linenos %}
// package.json (Express 3.0)
{
  "name": "old-express",
  "main": "server.js",
  "dependencies": {
    "express": "~3.4.8"
  }
}
{% endhighlight %}
<!-- /Code -->

<!-- Code -->
{% highlight javascript linenos %}
// server.js (Express 3.0)
var express = require('express');
var app     = express();

app.configure(function() {
    app.use(express.static(__dirname + '/public'));   // set the static files location
    app.use(express.logger('dev'));                   // log every request to the console
    app.use(express.bodyParser());                    // pull information from html in POST
    app.use(express.methodOverride());                // simulate DELETE and PUT
});

app.listen(3000);   
console.log('Server started on port 3000');           // notify user
{% endhighlight %}
<!-- /Code -->

Here's a list of middleWare that was turned into separate modules.

| Express 3.0 Name | Express 4.0 Name                                                |
|------------------|-----------------------------------------------------------------|
| bodyParser       | [body-parser](https://github.com/expressjs/body-parser)         |
| compress         | [compression](https://github.com/expressjs/compression)         |
| cookieSession    | [cookie-session](https://github.com/expressjs/cookie-session)   |
| logger           | [morgan](https://github.com/expressjs/morgan)                   |
| cookieParser     | [cookie-parser](https://github.com/expressjs/cookie-parser)     |
| session          | [express-session](https://github.com/expressjs/session)         |
| favicon          | [static-favicon](https://github.com/expressjs/favicon)          |
| response-time    | [response-time](https://github.com/expressjs/response-time)     |
| error-handler    | [errorhandler](https://github.com/expressjs/errorhandler)       |
| method-override  | [method-override](https://github.com/expressjs/method-override) |
| timeout          | [connect-timeout](https://github.com/expressjs/timeout)         |
| vhost            | [vhost](https://github.com/expressjs/vhost)                     |
| csrf             | [csurf](https://github.com/expressjs/csurf)                     |

<!-- Express 4-->
<h4>Express 4</h4>

<!-- Code -->
{% highlight javascript linenos %}
// package.json (Express 4.0)
{
  "name": "new-express",
  "main": "server.js",
  "dependencies": {
    "express": "~4.0.0",
    "morgan": "~1.0.0",
    "body-parser": "~1.0.0",
    "method-override": "~1.0.0"
  }
}
{% endhighlight %}
<!-- /Code -->

<!-- Code -->
{% highlight javascript linenos %}
// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

app.use(express.static(__dirname + '/public'));     // set the static files location
app.use(morgan('dev'));                             // log every request to the console
app.use(bodyParser.urlencoded({ extended: false }));// parse application/x-www-form-urlencoded
app.use(bodyParser.json());                         // parse application/json
app.use(methodOverride());                          // simulate DELETE and PUT

app.listen(3000);   
console.log('Server started on port 3000');         // shoutout to the user
{% endhighlight %}
<!-- /Code -->



<!-- Routes -->
<h3>Routes</h3>

<!-- Express 3-->
<h4>Express 3</h4>
<!-- Code -->
{% highlight javascript linenos %}
// (Express 3.0)
app.get('/dogs', function(req, res, next) {
    // do stuff
});

app.post('/dogs', function(req, res, next) {
    // do stuff 
});
{% endhighlight %}
<!-- /Code -->

<!-- Express 4-->
<h4>Express 4</h4>
<!-- Code -->
{% highlight javascript linenos %}
// (Express 4.0)
app.route('/dogs')
    .get(function(req, res, next) {
        // do stuff 
    })
    .post(function(req, res, next) {
        // do stuff 
    });
{% endhighlight %}
<!-- /Code -->

