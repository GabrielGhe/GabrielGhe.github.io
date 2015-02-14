---
layout: post
title: "Learn Node Part 10: AngularJS"
description: ""
category: javascript
tags: [nodejs, angularjs, bower]
---
{% include JB/setup %}

AngularJS is amazing but I realized that I don't actually have a guide on how to use it from scratch... So here we go.
You can find more information [here](https://github.com/GabrielGhe/NodePractice/tree/master/Server17Angular)


<h3>Installation</h3>

<!-- Code _______________________________________-->
{% highlight bash linenos %}
### in shell ###
express -e 
npm install -g bower
touch .bowerrc
touch bower.json
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// in .bowerrc
{
  //where do you want the bower components to be stored
  "directory" : "public/bower_components"
}

// in bower.json
{
  "name": "Server17Angular",
  "version": "0.0.1",
  "dependencies": {
  }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Install angular and it's dependencies

<!-- Code _______________________________________-->
{% highlight bash linenos %}
bower install --save angular
bower install --save angular-route
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

We add the files to the ejs view... add them in the head tag or at the end of the body tag. We also add the ng-app attribute to the body (or anywhere else) and the ng-view attribute to allow us to use partials.

<!-- Code _______________________________________-->
{% highlight html linenos %}
<!-- ### in views/index.ejs ### -->
<head>
  <script type="text/javascript" src="/bower_components/angular/angular.min.js"></script>
  <script type="text/javascript" src="/bower_components/angular-route/angular-route.min.js"></script>
  <script type="text/javascript" src="/javascripts/index.js"></script>
</head>
<body ng-app="MyApp">
  <div ng-view=""></div>
</body>
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

We now need to start our angular app in javascript.

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in public/javascripts/index.js ###

// create angular app
var MyApp = angular.module("MyApp", ["ngRoute"]);

// Add routes
MyApp.config(["$routeProvider", "$locationProvider",
  function($routeProvider, $locationProvider) {
    $routeProvider
      
      .when("/", {
        templateUrl: "partials/home.html",
        controller: "homeCtrl"
      })
      
      .otherwise({
        redirectTo: "/"
      });

    $locationProvider.html5Mode(true);
  }
]);

// add controllers
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

We now need to add controllers that will handle what happens when someone goes to one of those routes

<!-- Code _______________________________________-->
{% highlight javascript linenos %}
// ### in public/javascripts/index.js ###

//at the bottom of the file add...
MyApp.controller("homeCtrl", ["$scope", function($scope) {
  // do stuff
}]);
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Ok we have everything set up, but we don't have a partial to display, what's in home.html?

<!-- Code _______________________________________-->
{% highlight html linenos %}
<!-- ### in public/partials/home.html ### -->

<p>This is the home partial that will display for the home route '/'</p>
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

Done!