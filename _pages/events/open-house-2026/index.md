---
title: "Board Meeting and Open House 2026"
permalink: /events/open-house-2026/
layout: event
event: open_house_2026
hero_photo: true
description: "The NYU WIRELESS board meeting and open house, November 3, 2026, at 370 Jay Street, Brooklyn."
---
{% assign ev = site.data.open_house_2026 %}
<p class="section-label">The day</p>
<div class="thrusts">
  {% for s in ev.sessions %}
  <article class="thrust">
    <span class="thrust-num">{{ s.audience }}</span>
    <h3>{{ s.name }}</h3>
    <p>{{ s.text }}</p>
    <ul class="subthrusts">
      <li><span>Time</span><span>{{ s.time }}</span></li>
      <li><span>Where</span><span>{{ s.place }}</span></li>
      <li><span>Register by</span><span>{{ ev.register_by }}</span></li>
    </ul>
    {% if s.note %}<p class="credit">{{ s.note }}</p>{% endif %}
    <div class="btn-row event-card-btn"><a class="btn btn-primary" href="{{ s.rsvp_url }}">{{ s.rsvp_label }} &#8599;</a></div>
  </article>
  {% endfor %}
</div>

<p class="section-label section-gap">Plan your visit</p>
<div class="project-grid project-grid-4">
  <a class="project-card" href="{{ '/events/open-house-2026/agenda/' | relative_url }}">
    <div class="project-body">
      <span class="tag">Agenda</span>
      <h3>Schedule for the day</h3>
      <p>From the morning welcome and affiliate introductions to the research project presentations and the open house.</p>
      <span class="more">See the agenda &rarr;</span>
    </div>
  </a>
  <a class="project-card" href="{{ '/events/open-house-2026/posters/' | relative_url }}">
    <div class="project-body">
      <span class="tag">Posters</span>
      <h3>Student poster session</h3>
      <p>Research from across the center, from circuits and devices to sensing and networking.</p>
      <span class="more">Browse the posters &rarr;</span>
    </div>
  </a>
  <a class="project-card" href="{{ '/events/open-house-2026/demos/' | relative_url }}">
    <div class="project-body">
      <span class="tag">Demos</span>
      <h3>Live lab demonstrations</h3>
      <p>Videos of the demos you can see in our labs at the open house.</p>
      <span class="more">Watch the demos &rarr;</span>
    </div>
  </a>
  <a class="project-card" href="{{ '/events/open-house-2026/visiting/' | relative_url }}">
    <div class="project-body">
      <span class="tag">Visiting</span>
      <h3>Getting to 370 Jay St</h3>
      <p>Directions, transit and a guide to the neighborhood in Downtown Brooklyn.</p>
      <span class="more">Plan your trip &rarr;</span>
    </div>
  </a>
</div>

<p class="section-label section-gap">Our industrial affiliates</p>
<div class="affiliate-card">
  <ul class="affiliate-grid">
    {% for a in site.data.affiliates %}
    <li><a href="{{ a.url }}" title="{{ a.name }}"><img src="{{ a.logo | relative_url }}" alt="{{ a.name }}"></a></li>
    {% endfor %}
  </ul>
</div>
