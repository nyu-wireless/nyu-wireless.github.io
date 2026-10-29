---
title: "Visiting · Board Meeting and Open House 2026"
permalink: /events/open-house-2026/visiting/
layout: event
event: open_house_2026
heading: "Visiting"
---
{% assign ev = site.data.open_house_2026 %}
<div class="two-col visit-intro">
  <div>
    <p class="section-label">Where</p>
    <h2>370 Jay Street, Brooklyn</h2>
    <p>NYU WIRELESS is at 370 Jay Street in Downtown Brooklyn, part of the NYU Tandon School of Engineering. The board meeting is on the 12th floor and the open house is on the 9th floor.</p>
    <div class="btn-row">
      <a class="btn btn-primary" href="https://www.google.com/maps/dir/?api=1&amp;destination=370+Jay+St,+Brooklyn,+NY+11201">Get directions &#8599;</a>
    </div>
  </div>
  <figure class="figure-card map-card">
    <iframe src="https://www.google.com/maps?q=370+Jay+St,+Brooklyn,+NY+11201&amp;z=16&amp;output=embed" title="Map of 370 Jay Street, Brooklyn" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </figure>
</div>

<p class="section-label section-gap">Getting there</p>
<div class="pill-list">
  <div class="pill">
    <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 21l-2-4M15 21l2-4"/><circle cx="9" cy="14" r=".5"/><circle cx="15" cy="14" r=".5"/></svg></span>
    <div>
      <h3>Subway</h3>
      <p>Jay St&ndash;MetroTech (A, C, F, R) is next to the building. Borough Hall (2, 3, 4, 5) and DeKalb Av (B, Q, R) are a short walk away.</p>
    </div>
  </div>
  <div class="pill">
    <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17h18M5 17V9l7-5 7 5v8"/><path d="M9 17v-5h6v5"/></svg></span>
    <div>
      <h3>From the airports</h3>
      <p>From JFK, take the AirTrain to Jamaica and the E to Jay St&ndash;MetroTech, or a taxi (about 45 minutes). From LaGuardia, a taxi takes about 30 to 40 minutes.</p>
    </div>
  </div>
  <div class="pill">
    <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M6 21V8l6-4 6 4v13"/><path d="M10 21v-4h4v4M10 11h.01M14 11h.01"/></svg></span>
    <div>
      <h3>Staying nearby</h3>
      <p>Downtown Brooklyn and DUMBO have many hotels within walking distance, and Manhattan is a few subway stops away.</p>
    </div>
  </div>
</div>

<p class="section-label section-gap">The neighborhood</p>
{% if ev.gallery.size > 0 %}
<div class="gallery">
  {% for g in ev.gallery %}
  <figure>
    <a href="{{ g.src | relative_url }}"><img src="{{ g.src | relative_url }}" alt="{{ g.caption | escape }}" loading="lazy"></a>
    {% if g.caption %}<figcaption>{{ g.caption }}</figcaption>{% endif %}
  </figure>
  {% endfor %}
</div>
{% else %}
<p>Downtown Brooklyn is a short walk from the Brooklyn Bridge, Brooklyn Bridge Park and the waterfront in DUMBO, with views of the Manhattan skyline. Photos of the area are coming soon.</p>
{% endif %}
