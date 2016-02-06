---
layout: post
title: "Web automation with Selenium"
description: "
Web automation is a powerful tool. You can do UI testing with it, but there are a ton of other applications! In this post, I'll be showing you how to automate your chrome browser in python using [Selenium](http://www.seleniumhq.org/projects/webdriver/).
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

<!-- Setup -->
<h4>Setup</h4>

You can navigate to [the selenium page](http://selenium-python.readthedocs.org/getting-started.html) for more information on the API.  

For this post, I will be using OSX (if you bug me, I'll make one for windows and linux).

1. Install pip by opening your terminal and entering `sudo easy_install pip`.

2. Install selenium by typing `pip install selenium` in the terminal.

3. We also need the chome webdriver to actually connect to chrome and automate it. You can easily install it with [homebrew](http://brew.sh/) typing `brew install chromedriver` in the terminal.


<!-- Plan -->
<h4>Plan</h4>

1. Go to `www.google.com`
2. Type `GabrielGhe` in the searchbox
3. Go to `GabrielGhe.github.io`
4. Type `java` in the searchbox

This is how what it should look like at the end.
![Plan]({{ ASSET_PATH }}/../images/2016-02-04-web-automation-with-selenium.gif)


<!-- Code -->
<h3>Code</h3>

We can code now that we know what we want to achieve. The gist below does what's being displayed in the gif above. Run it yourself to see it live in action!

<!-- Code _______________________________________-->
{% highlight python linenos=table %}
import time
from selenium import webdriver

WAIT_TIME = 3

# Create the webdriver
driver = webdriver.Chrome()  

# Open Chrome and go to google.com
driver.get('http://www.google.com/xhtml');

# Wait for 3 seconds so that you can see what's going on
time.sleep(WAIT_TIME)

# Grab the search box and type in  'GabrielGhe'
search_box = driver.find_element_by_name('q')
search_box.send_keys('GabrielGhe')
search_box.submit()
time.sleep(WAIT_TIME)

# go to another url
driver.get('http://gabrielghe.github.io');
time.sleep(WAIT_TIME)
gabrielghe_search_box = driver.find_element_by_id('q')
gabrielghe_search_box.send_keys('java')
time.sleep(WAIT_TIME)

# Quit after 3 seconds
time.sleep(WAIT_TIME)
driver.quit()
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
