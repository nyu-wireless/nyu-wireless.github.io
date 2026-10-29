# NYU WIRELESS Research

Source for <https://nyu-wireless.github.io>, the research site of
NYU WIRELESS. It is a plain Jekyll
site built by GitHub Pages from the `master` branch, styled to match the NYU
WIRELESS faculty group sites.

**Faculty adding projects:** see [adding_projects.md](adding_projects.md).

## Local preview

```
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>.

## Layout

| Path | Contents |
| --- | --- |
| `index.html` | Home page: hero and the six research-area tiles |
| `_data/areas.yml` | The six research areas (title, summary, image, slug) |
| `_data/projects.yml` | All projects; each lists the area slugs it appears under |
| `_data/navigation.yml` | Top navigation bar |
| `_pages/research/` | One stub per area page; the `area` layout fills in its projects |
| `_pages/` | Other pages (People) |
| `_layouts/`, `_includes/` | Page templates |
| `assets/css/site.css` | All styling (NYU violet theme) |
