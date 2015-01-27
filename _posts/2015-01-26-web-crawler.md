---
layout: post
title: "Web Crawler"
description: ""
category: python
tags: [python, beautifulsoup, requests, crawler, scraper]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

This post is about web crawling and scraping in python. The modules we will need are `requests` and `BeautifulSoup`. More information can be found [here for requests](http://docs.python-requests.org/en/latest/) and [here for BeautifulSoup](http://www.crummy.com/software/BeautifulSoup/).

{% highlight python linenos %}
# first we need the 2 modules
import requests
from bs4 import BeautifulSoup

def crawl():
    # retrieve google page
    source = requests.get("http://www.google.com");
    
    # get the source in text format
    plain_text = source.text
    soup = BeautifulSoup(plain_text)

    # get every link on the page and print it
    for link in soup.findAll('a'):
        print( link.get('href').text )

    # get the first table on the page and print all the table columns
    for tableColumn in soup.findAll('table')[0].findAll('td'):
        print( tableColumn.text )
{% endhighlight %}