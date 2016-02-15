---
layout: post
title: "Scraping phone numbers from the clipboard"
description: "
If you ever had to extract a lot of content from a pdf or a website and wanted a faster way to do it, this is it. In this post, I'm going to use python's [pyperclip](https://pypi.python.org/pypi/pyperclip) and [re](https://docs.python.org/2/library/re.html) modules to extract the phone numbers from some text that I've copied to the clipboard.
"
category: python
tags: [regex, scraping, clipboard]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

 ![Clipboard]({{ ASSET_PATH }}/../images/2016-01-29-scraping-phone-numbers-from-the-clipboard.jpg)

{{ page.description }}

<!-- Content -->
<h3>Content</h3>

We first need to `pyperclip`. It can be installed with pip. If you don't have pip, open the terminal and run `sudo easy_install pip`. Then run `sudo pip install pyperclip`.

Now that we have the 2 modules we need, we can scrape!

<!-- Code _______________________________________-->
{% highlight python linenos=table %}
import re, pyperclip

# we need a regex that covers the following types
# (111) 111-1111, 222-222-2222, 333-3333

numberRegex = re.compile(r'''
(
    ((\(\d\d\d\))|(\d\d\d))?    # area code  (111) or 111
    (\s|-)                      # separator  " " or -
    \d\d\d                      # first 3 digits 222
    -                           # separator
    \d\d\d                      # last 4 digits
)
''', re.VERBOSE) 
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->

The `re.VERBOSE` flag allows you to write comments in the string. This is easier to understand and modify than having everything on one line. I added a group that surrounds the whole regex using `()`.


<!-- Code _______________________________________-->
{% highlight python linenos=table %}
# We get the text from the clipboard
text = pyperclip.paste()

allPhoneNumberGroups = numberRegex.findall(text)
phoneNumbers = [phone[0] for phone in allPhoneNumberGroups]
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->


The `findall` method returns a list of tuples. Each tuple represents a group in our regular expression. A group is assigned using `()`.

To get the phone numbers, I have to get the first group from the matches. The full code is below with an example. The code below assumes that we copied the string `(111) 111-1111, 222-222-2222, 333-3333`.


<!-- Code -->
<h3>Code</h3>

<!-- Code _______________________________________-->
{% highlight python linenos=table %}
#! python3
import re, pyperclip

# we need a regex that covers the following types
# (111) 111-1111, 222-222-2222, 333-3333

numberRegex = re.compile(r'''
(
    ((\(\d\d\d\))|(\d\d\d))?    # area code  (111) or 111
    (\s|-)                      # separator  " " or -
    \d\d\d                      # first 3 digits 222
    -                           # separator
    \d\d\d                      # last 4 digits
)
''', re.VERBOSE)

# We get the text from the clipboard
text = pyperclip.paste()

allPhoneNumberGroups = numberRegex.findall(text)
phoneNumbers = [phone[0] for phone in allPhoneNumberGroups]

# [('(111) 111-111', '(111)', '(111)', '', ' '),    (' 222-222', '', '', '', ' '),     (' 333-333', '', '', '', ' ')]
print(allPhoneNumberGroups)

# ['(111) 111-111', ' 222-222', ' 333-333']
print(phoneNumbers)
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->