---
layout: post
title: "Web automation with Selenium"
description: "
Web automation is a powerful tool. You can do pretty much anything you can think of with it, but I'll let you think of the applications. I will show you how to actually automate a web browser in python using [Selenium](http://www.seleniumhq.org/projects/webdriver/).
"
category: python
tags: [web, script, automation, scraper]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

{{ page.description }}

<!-- Content -->
<h3>Content</h3>

You can navigate to [the selenium page](http://selenium-python.readthedocs.org/getting-started.html) for more information on the API.  

For this post, I will be using OSX. Let me know if you would like a guide for mac or linux.

Before we begin, we have to install a few things. We need python and pip. 

Python is already installed on your machine so that's done.
To install pip, open your terminal and enter `sudo easy_install pip`.

Once you have pip, install selenium, which is the module used to automate the browser.

We also need the chome webdriver to actually connect to chrome and automate it. You can easily install it with homebrew using `brew install chromedriver`.