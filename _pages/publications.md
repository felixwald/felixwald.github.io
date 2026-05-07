---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

A curated publication list for this site is being prepared. For a complete and up-to-date record, please use Felix Wald's external research profiles.

- [Google Scholar](https://scholar.google.com/citations?user=N-l6y4MAAAAJ&hl=en)
- [ORCID](https://orcid.org/0000-0001-5811-878X)

{% include base_path %}

{% if site.publications.size > 0 %}
{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
{% endif %}
