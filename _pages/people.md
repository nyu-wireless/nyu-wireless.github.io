---
title: "People"
permalink: /people/
eyebrow: "NYU WIRELESS"
intro: "The faculty, researchers and students of NYU WIRELESS."
wide: true
---

## Leadership

<div class="member-grid">
  {% for p in site.data.people.leadership %}{% include person-card.html person=p %}{% endfor %}
</div>

## Faculty

<div class="member-grid">
  {% for p in site.data.people.faculty %}{% include person-card.html person=p %}{% endfor %}
</div>
