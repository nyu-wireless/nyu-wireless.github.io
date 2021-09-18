---
title: "Team"
layout: single
sitemap: false
permalink: /team/
---

## Faculties

{% for member in site.data.faculties %}
<div class="jumbotron">
<div class="row">
<div class="col-sm-3">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/people/{{ member.photo }}" width="100%" align="right" style="max-width:190px; max-height:180px"/>
</div>
<div class="col-sm-9 col-xs-12">
  <h5 style="font-size:16px;">{{ member.name }}</h5>
  <h5 style="font-size:16px;">{{ member.info }}</h5>
  {% if member.email %}<a href="mailto:{{ member.email }}" target="_blank"><i class="fas fa-envelope-square fa-2x"></i></a> {% endif %}
  {% if member.scholar %} <a href="{{ member.scholar }}" target="_blank"><i class="fas fa-graduation-cap fa-2x"></i></a> {% endif %}
  {% if member.github %} <a href="{{ member.github }}" target="_blank"><i class="fab fa-fw fa-github-square fa-2x"></i></a> {% endif %}
  {% if member.linkedin %} <a href="{{ member.linkedin }}" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a> {% endif %}
  {% if member.cv %} <a href="{{ site.url }}{{ site.baseurl }}/{{ member.cv }}" target="_blank"><i class="fas fa-id-card fa-2x" style="position:relative; left:8px;"></i></a> {% endif %}
</div>
</div>
</div>
<br/>
<br/>
<br/>
<br/>
{% endfor %}


## Students

<div class="jumbotron">

{% assign number_printed = 0 %}
{% for member in site.data.students %}

{% assign even_odd = number_printed | modulo: 2 %}

<div class="row">

<div class="col-sm-1 col-xs-12">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/people/{{ member.photo }}" width="100%" align="right" style="max-width:190px; max-height:180px"/>
</div>
<div class="col-sm-4 col-xs-12">
  <h5 style="font-size:16px;">{{ member.name }}</h5>
  <h5 style="font-size:16px;"><i>{{ member.info }}<br></i></h5>
  {% if member.email %}<a href="mailto:{{ member.email }}" target="_blank"><i class="fas fa-envelope-square fa-2x"></i></a> {% endif %}
  {% if member.scholar %} <a href="{{ member.scholar }}" target="_blank"><i class="fas fa-graduation-cap fa-2x"></i></a> {% endif %} 
  {% if member.github %} <a href="{{ member.github }}" target="_blank"><i class="fab fa-fw fa-github-square fa-2x"></i></a> {% endif %} 
  {% if member.linkedin %} <a href="{{ member.linkedin }}" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a> {% endif %}
  {% if member.cv %} <a href="{{ site.url }}{{ site.baseurl }}/{{ member.cv }}" target="_blank"><i class="fas fa-id-card fa-2x" style="position:relative; left:8px;"></i></a> {% endif %} 
</div>
{% assign number_printed = number_printed | plus: 1 %}

</div>
<br/>
<br/>
<br/>
{% endfor %}

</div>

