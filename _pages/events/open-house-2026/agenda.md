---
title: "Agenda · Board Meeting and Open House 2026"
permalink: /events/open-house-2026/agenda/
layout: event
event: open_house_2026
heading: "Agenda"
---
{% assign ev = site.data.open_house_2026 %}
<p class="section-label">Tuesday, November 3 &middot; all times ET</p>
<ol class="agenda">
  {% for item in ev.agenda %}
  <li class="agenda-item agenda-{{ item.kind }}">
    <time>{{ item.time }}</time>
    <div>
      <h3>{{ item.title }}</h3>
      {% if item.speaker %}<p class="agenda-speaker">{{ item.speaker }}</p>{% endif %}
      {% if item.detail %}<p>{{ item.detail }}</p>{% endif %}
      {% if item.place %}<span class="agenda-place">{{ item.place }}</span>{% endif %}
    </div>
  </li>
  {% endfor %}
</ol>
<p class="credit">Unless noted, sessions are on the 12th floor of 370 Jay Street.</p>
