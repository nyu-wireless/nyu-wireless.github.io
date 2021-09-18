---
title: "Team"
layout: gridlay
sitemap: false
permalink: /team/
---

## Faculties

{% for member in site.data.faculties %}
<div class="jumbotron">
<div class="row">
<div class="col-sm-3">
  <img src="{{ site.url }}/assets/images/people/{{ member.photo }}" width="100%" align="right" style="max-width:300px"/>
</div>
<div class="col-sm-9 col-xs-12">
  <h6>{{ member.name }}</h6>
  <h6>{{ member.info }}</h6>
  {% if member.email %}<a href="mailto:{{ member.email }}" target="_blank"><i class="fa fa-envelope-square fa-2x"></i></a> {% endif %}
  {% if member.cv %} <a href="{{ site.url }}{{ site.baseurl }}/{{ member.cv }}" target="_blank"><i class="ai ai-cv-square ai-3x"></i></a> {% endif %}
  {% if member.scholar %} <a href="{{ member.scholar }}" target="_blank"><i class="ai ai-google-scholar-square ai-3x"></i></a> {% endif %}
  {% if member.github %} <a href="{{ member.github }}" target="_blank"><i class="fab fa-fw fa-github fa-2x"></i></a> {% endif %}
  {% if member.researchgate %} <a href="{{ member.researchgate }}" target="_blank"><i class="ai ai-researchgate-square ai-3x"></i></a> {% endif %}
</div>
</div>
</div>
{% endfor %}

<br/>
<br/>

## Students

<div class="jumbotron">

{% assign number_printed = 0 %}
{% for member in site.data.students %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-2 col-xs-12">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/people/{{ member.photo }}" width="100%" align="right" style="max-width:300px"/>
</div>
<div class="col-sm-4 col-xs-12">
  <h5>{{ member.name }}</h5>
  <h6><i>{{ member.info }}<br></i></h6>
  {% if member.email %}<a href="mailto:{{ member.email }}" target="_blank"><i class="fa fa-envelope-square fa-2x"></i></a> {% endif %} {% if member.cv %} <a href="{{ site.url }}{{ site.baseurl }}/{{ member.cv }}" target="_blank"><i class="ai ai-cv-square ai-2x"></i></a> {% endif %} {% if member.scholar %} <a href="{{ member.scholar }}" target="_blank"><i class="ai ai-google-scholar-square ai-2x"></i></a> {% endif %} {% if member.github %} <a href="{{ member.github }}" target="_blank"><i class="fa fa-github-square fa-2x"></i></a> {% endif %} {% if member.researchgate %} <a href="{{ member.researchgate }}" target="_blank"><i class="ai ai-researchgate-square ai-2x"></i></a> {% endif %} {% if member.linkedin %} <a href="{{ member.linkedin }}" target="_blank"><i class="fa fa-linkedin-square fa-2x"></i></a> {% endif %}
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

</div>


<!-- <ul style="overflow: hidden"> -->
<!-- {% if member.education1 %} <li> {{ member.education1 | replace: "-","&#8211;"}} </li> {% endif %} -->
<!-- {% if member.education2 %} <li> {{ member.education2 | replace: "-","&#8211;"}} </li> {% endif %} -->
<!-- {% if member.education3 %} <li> {{ member.education3 | replace: "-","&#8211;"}} </li> {% endif %} -->
<!-- {% if member.education4 %} <li> {{ member.education4 | replace: "-","&#8211;"}} </li> {% endif %} -->
<!-- {% if member.education5 %} <li> {{ member.education5 | replace: "-","&#8211;"}} </li> {% endif %} -->
<!-- </ul> -->


<!-- ## Alumni -->

<!-- {% assign number_printed = 0 %} -->
<!-- {% for member in site.data.alumni_members %} -->

<!-- {% assign even_odd = number_printed | modulo: 2 %} -->

<!-- {% if even_odd == 0 %} -->
<!-- <div class="row"> -->
<!-- {% endif %} -->

<!-- <div class="col-sm-6 clearfix"> -->
<!--   <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" /> -->
<!--   <h4>{{ member.name }}</h4> -->
<!--   <i>{{ member.duration }} <br> Role: {{ member.info }}</i> -->
<!--   <ul style="overflow: hidden"> -->

<!--   </ul> -->
<!-- </div> -->

<!-- {% assign number_printed = number_printed | plus: 1 %} -->

<!-- {% if even_odd == 1 %} -->
<!-- </div> -->
<!-- {% endif %} -->

<!-- {% endfor %} -->

<!-- {% assign even_odd = number_printed | modulo: 2 %} -->
<!-- {% if even_odd == 1 %} -->
<!-- </div> -->
<!-- {% endif %} -->


<!-- {% if site.data.alumni_visitors %} -->
<!-- ## Former M.S./B.S Students, Visitors -->
<!-- <div class="row"> -->
<!-- <div class="col-sm-6 clearfix"> -->
<!-- {% for member in site.data.alumni_visitors %} -->
<!-- {{ member.name }} -->
<!-- {% endfor %} -->
<!-- </div> -->
<!-- </div> -->
<!-- {% endif %} -->



<!-- ## Administrative Support -->
<!-- <a href="exampleemail@gmail.com">Example staff</a> is helping us (and other groups) with administration. -->

