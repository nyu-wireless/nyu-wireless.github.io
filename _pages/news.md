---
title: "News"
permalink: /news/
eyebrow: "NYU WIRELESS"
intro: "Announcements, events and research highlights from the center."
wide: true
---

{% if site.posts.size > 0 %}
<div class="project-grid">
  {% for post in site.posts %}
  {% include news-card.html post=post %}
  {% endfor %}
</div>
{% else %}
<div class="empty-state"><p>News coming soon.</p></div>
{% endif %}
