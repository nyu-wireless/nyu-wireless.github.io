---
title: "Posters · Board Meeting and Open House 2026"
permalink: /events/open-house-2026/posters/
layout: event
event: open_house_2026
heading: "Posters"
---
{% assign ev = site.data.open_house_2026 %}
{% assign count = 0 %}{% for t in ev.poster_topics %}{% assign count = count | plus: t.posters.size %}{% endfor %}
<p class="section-intro">At the open house, {{ count }} students and researchers from across NYU WIRELESS present their work, from circuits and quantum devices to channel measurements, sensing and networking. Posters are on the 9th floor of 370 Jay Street from 3:00pm.</p>

<div class="poster-tools">
  <div class="poster-filters" role="group" aria-label="Filter posters by topic">
    <button type="button" class="active" data-topic="all">All <span>{{ count }}</span></button>
    {% for t in ev.poster_topics %}<button type="button" data-topic="{{ t.slug }}">{{ t.title }} <span>{{ t.posters.size }}</span></button>{% endfor %}
  </div>
  <input class="poster-search" type="search" placeholder="Search titles and names" aria-label="Search posters">
</div>

{% for t in ev.poster_topics %}
<section class="poster-topic" data-topic="{{ t.slug }}">
  <p class="section-label project-group-label">{{ t.title }}</p>
  <div class="poster-grid">
    {% for p in t.posters %}
    <article class="poster-card">
      <h3>{{ p.title }}</h3>
      <p class="poster-authors"><strong>{{ p.presenter }}</strong>{% if p.authors != "" %}, {{ p.authors }}{% endif %}</p>
    </article>
    {% endfor %}
  </div>
</section>
{% endfor %}
<p class="poster-empty" hidden>No posters match your search.</p>
