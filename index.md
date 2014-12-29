---
layout: page
title: Gab's Blog
---
{% include JB/setup %}


<ul class="posts">
  {% for post in site.posts %}
    <li>
      <h3>
        <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
      </h3>
      <!-- Category -->
      <p>
        <b>Category</b>:

        <a href="{{ BASE_PATH }}/categories.html#{{ post.category }}-ref" class="label label-primary">
          <i class="icon-{{ post.category }}"></i>
            {{ post.category }}
        </a>
      </p>
      <!-- END Category -->
      <!-- Tags -->
      <p>
        {% if post.tags.size > 0 %}
          <b>Tags</b>:
          {% for tag in post.tags %}
            <a href="{{ BASE_PATH }}/tags.html#{{tag}}-ref" class="label label-success">{{ tag }}</a>
          {% endfor %}
        {% endif %}
      </p>
      <!-- END Tags -->
      <!-- Date -->
      <p>
        <small>{{ post.date | date: "%B %e, %Y" }}</small>
      </p>
      <!-- END Date -->
    </li>
  {% endfor %}
</ul>


