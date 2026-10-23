---
title: "Research"
permalink: /research/
eyebrow: "NYU WIRELESS"
intro: "Our research spans the wireless stack, from circuits and antennas, through communication and sensing theory, to networks, AI-native systems, testbeds and applications. Bringing these areas together in one center lets faculty and students with diverse expertise work on problems no single discipline can solve alone."
wide: true
---

<p class="section-label">Research areas</p>
<div class="project-grid">
  {% for a in site.data.areas %}
    {% include area-card.html area=a %}
  {% endfor %}
</div>
