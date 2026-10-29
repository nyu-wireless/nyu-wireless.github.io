---
title: "Demos · Board Meeting and Open House 2026"
permalink: /events/open-house-2026/demos/
layout: event
event: open_house_2026
heading: "Demos"
---
{% assign ev = site.data.open_house_2026 %}
<p class="section-intro">At the open house our students show their work at a poster session and run live demonstrations in the NYU WIRELESS labs on the 9th floor of 370 Jay Street. Here is a preview of some of the demos.</p>

{% if ev.demos.size > 0 %}
<div class="demo-grid">
  {% for d in ev.demos %}
  <article class="demo-card">
    <button class="yt-lite" type="button" data-id="{{ d.youtube }}" aria-label="Play video: {{ d.title | escape }}">
      <img src="https://i.ytimg.com/vi/{{ d.youtube }}/hqdefault.jpg" alt="" loading="lazy">
      <span class="yt-play" aria-hidden="true"><svg viewBox="0 0 68 48"><path d="M66.5 7.7a8.6 8.6 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.6a8.6 8.6 0 0 0-6 6C0 13 0 24 0 24s0 11 1.5 16.3a8.6 8.6 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.6a8.6 8.6 0 0 0 6-6C68 35 68 24 68 24s0-11-1.5-16.3z"/><path d="M45 24 27 14v20" fill="#fff"/></svg></span>
    </button>
    <div class="demo-body">
      <h3>{{ d.title }}</h3>
      {% if d.people %}<p class="demo-people">{{ d.people }}</p>{% endif %}
      {% if d.text %}<p>{{ d.text }}</p>{% endif %}
      {% if d.url %}<a class="more" href="{{ d.url | relative_url }}">Project page &rarr;</a>{% endif %}
    </div>
  </article>
  {% endfor %}
</div>
{% else %}
<div class="empty-state">
  <h3>Demo videos coming soon</h3>
  <p>We are putting together videos of this year's demos. Check back before the open house.</p>
</div>
{% endif %}
