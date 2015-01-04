---
layout: post
title: "EcmaScript 6 feature: class"
description: ""
category: javascript
tags: [es6, class, oop]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Javascript's new version (EcmaScript 6) has some amazing new features. The one discussed in this post is the new class syntax.
More information can be found [here](http://code.tutsplus.com/articles/use-ecmascript-6-today--net-31582#class).

<!-- Details -->
<h3>Details</h3>

{% highlight javascript linenos %}
// OLD CLASS
var MyObject = function(params){
  this.p1 = params.p1;
  this.p2 = params.p2;
};
// I will go over the new string interpolation in another post
MyObject.prototype.summary = function(){
  return "p1:" + this.p1 + " p2:" + this.p2;
};


// NEW CLASS
class MyObject {
  constructor(p1, p2){
    this.p1 = p1;
    this.p2 = p2;
  }
  summary() {
    return "p1:" + this.p1 + " p2:" + this.p2;
  }
}
{% endhighlight %}

<!-- Examples -->
<h3>Examples</h3>

{% highlight javascript linenos %}
// Getters and Setters
class Person {
  constructor(name){
    this._name = name;
  }
  get name(){
    return this._name;
  }
  set name(newName){
    if (newName) {
      this._name = newName;
    }
  }
}

let guy = new Person("Tom");
console.log(guy.name);  // GET - Tom
guy.name = "Steve";     // SET
console.log(guy.name);  // GET - Steve


// Inheritance
class Dev extends Person {
  static allDevs = []
  constructor(name, preferredLang) {
    super(name);
    this.lang = preferredLang;
    Dev.allDevs.push(name);
  }
  static numDevs() {
    return Dev.allDevs.length;
  }
}
{% endhighlight %}