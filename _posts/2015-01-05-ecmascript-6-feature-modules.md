---
layout: post
title: "EcmaScript 6 feature: modules"
description: ""
category: javascript
tags: [es6, module, export]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

Javascript's new version (EcmaScript 6) has some amazing new features. The feature discussed in this post is the modules feature.
Modules allow you to load functions from other js files and use them. In NodeJS, we use `modules.exports` to make a function or variable available to other files. The other files can then use `require('moduleName')` to access them.
More information can be found [here](http://wiki.ecmascript.org/doku.php?id=harmony:modules).

<!-- Details -->
<h3>Details</h3>

Lets start out by creating a module `cat` that has 2 functions it exports: `bite(victim)` and `lookCute()`

<b>cat.js</b>

{% highlight javascript linenos %}
function bite(victim){
  return `*cat bit ${victim}*`;
  // notice the use of backtick and ${} for string templating
}

function distract(){
  return 'awww, that kitten is so cute';
}

// you can expose the function as is, or change the name
export { bite, distract as lookCute }
{% endhighlight %}

<b>app1.js</b>

{% highlight javascript linenos %}
import { lookCute } from 'cat';
console.log( lookCute() );
{% endhighlight %}

<b>app2.js</b>

{% highlight javascript linenos %}
import { bite, lookCute } from 'cat';
console.log( lookCute() );  // "awww, that kitten is so cute"
console.log( bite('Tom') ); // "*cat bit Tom*"
{% endhighlight %}

<h3>Examples</h3>

<b>exporter1.js</b>

{% highlight javascript linenos %}
export function blah(){
  return 'blah';
}

var aFunc = function(){
  console.log('does nothing');
}
export { aFunc }
{% endhighlight %}

<b>importer1.js</b>

{% highlight javascript linenos %}
import { blah, aFunc } from 'exporter1';
aFunc();
console.log( blah() );
{% endhighlight %}

<br /><br />

<b>exporter2.js</b>

{% highlight javascript linenos %}
export default function(){
  return "this is all I'm exporting";
}
{% endhighlight %}

<b>importer2.js</b>

{% highlight javascript linenos %}
import randomName from 'exporter2';
randomName(); // when you import a default function, you choose the name
{% endhighlight %}

More examples of es6 modules can be found [here](http://wiki.ecmascript.org/doku.php?id=harmony:modules_examples).