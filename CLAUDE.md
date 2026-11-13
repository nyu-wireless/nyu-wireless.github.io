# Instructions for Claude: NYU WIRELESS site

This repository is the source for <https://nyu-wireless.github.io>, a Jekyll
site published by GitHub Pages from the **`master`** branch.

The people editing it are staff, students and faculty. Many are **not
programmers**. They work in VS Code on a Mac or Windows computer and ask you
for changes in plain English. Their guide is in [guide/](guide/index.md).
Read it once so you know what they have been told to expect. Unless the user
is clearly technical, assume they have no coding background.

## How to talk to the user

- Use plain language. Don't use jargon such as "YAML", "front matter",
  "rebase" or "HEAD" unless the user does first. Say "the people list", not
  `_data/people.yml`. A file name in parentheses is fine.
- Before an edit, say in one or two sentences what you will change. After the
  edit, say what changed and how to see it.
- If the request is unclear (which photo? which event? which wording?), ask
  one short question before editing. Don't guess at names, titles, dates or
  links. Use exactly what the user gives you, and ask if something seems wrong
  (for example, a date that doesn't match the weekday).
- If something fails (a command, the build, a push), explain what happened in
  one sentence and what you will do about it. Don't paste long error logs.
- Non-technical users can't judge code diffs. Show them the result instead,
  either in the local preview or as a short before/after of the visible text.

## The workflow (always follow this)

Every change goes through a **branch and a pull request (PR)**. Never commit
or push directly to `master`.

1. **Start fresh.** At the start of a new task, run `git status`. If there
   are uncommitted changes from earlier work, tell the user and ask what to
   do. Never discard them silently. Then:
   `git checkout master && git pull`, followed by
   `git checkout -b <short-descriptive-branch>`, for example
   `add-faculty-jane-doe` or `update-open-house-agenda`.
   If the user is in the middle of a change and asks for more edits, stay on
   the current branch.
2. **Edit.** Keep the change limited to what the user asked for.
3. **Preview.** Offer to start the local preview (see below) and give the
   user the exact page address to open, for example
   `http://localhost:4000/people/`.
4. **Pull request.** When the user says it looks good, commit with a clear
   message, then `git push -u origin <branch>` and
   `gh pr create --base master` with a plain-English title and description.
   Give the user the PR link.
5. **Merge.** Users with write access may merge their own PRs for **routine
   content changes** (see the table below). For **structural changes**, tell
   the user the PR should be reviewed by Sundeep Rangan before merging, and
   don't merge it yourself. If the user asks you to merge a routine PR, use
   `gh pr merge --merge --delete-branch`, then
   `git checkout master && git pull`.
6. **Confirm it's live.** After a merge, GitHub Pages rebuilds in a few
   minutes. If the user asks whether it's live, check with
   `gh run list --limit 3` and look at the real page.

### Routine vs. structural changes

| Routine (the user may merge) | Structural (needs Sundeep's review) |
|---|---|
| Text on existing pages | Anything in `_layouts/`, `_includes/`, `assets/css/`, `assets/js/` |
| Adding, removing or editing people, affiliates, funders, projects, event details | `_config.yml`, `_data/navigation.yml`, `_data/areas.yml` |
| Adding or replacing images | A new kind of page or section (for example, a News section) |
| Fixing typos and links | Deleting pages, or changes to more than ~10 files |

If a routine request turns out to need a structural change, for example a
layout that doesn't support what the user wants, say so and offer to put it
in a PR for Sundeep's review.

### Never

- Push to `master`, force-push, rewrite history, or delete branches other
  than the one just merged.
- Run `git reset --hard`, `git clean`, or `git checkout -- <file>` on work
  you didn't create in this session without asking the user first.
- Commit `_site/`, `.jekyll-cache/`, `vendor/`, `Gemfile.lock` or `material/`.
  They are git-ignored, so don't force-add them.
- Make up facts, titles, affiliations, dates or links.
- Hotlink images. Always save them into the repo.

## Where content lives

| What the user calls it | File(s) |
|---|---|
| Home page (hero photo, intro, affiliates and funder logos) | `index.html`, `_data/affiliates.yml`, `_data/funding.yml` |
| People / faculty / leadership | `_data/people.yml`, photos in `assets/images/people/` |
| Industry affiliates | `_data/affiliates.yml`, logos in `assets/images/affiliates/` |
| Funding agencies | `_data/funding.yml`, logos in `assets/images/funding/` |
| Events page | `_pages/events.md`, images in `assets/images/events/` |
| Open House 2026 (dates, agenda, demos, posters) | `_data/open_house_2026.yml` (the pages under `_pages/events/open-house-2026/` read from it) |
| Research areas (six tiles) | `_data/areas.yml` (structural) |
| Projects | `_data/projects.yml`, `_projects/*.md`, images in `assets/images/projects/`. Follow [adding_projects.md](adding_projects.md) exactly. |
| Top menu | `_data/navigation.yml` (structural) |

Each data file has a comment block at the top that explains its fields. Read it
and copy the format of the neighboring entries. Keep the existing ordering
rules (for example, faculty are alphabetical by last name).

## Images

Users will usually give you a file path (often in `~/Downloads`) or drop a
file into the folder.

- Copy the file into the right `assets/images/...` folder and give it a
  lowercase, hyphenated name (`jane-doe.jpg`, `open-house-2026-demo.jpg`).
- Keep each image under ~500 KB and no more than ~1600 px on the long side.
  Headshots should be around 600 px. To resize, use `sips` on macOS (for
  example `sips -Z 1600 in.jpg --out out.jpg`). On Windows use ImageMagick or
  Python/Pillow if available. If you can't resize, tell the user.
- Always write meaningful `alt` text that describes the image.
- Headshots are cropped to a circle. If the face is off-center, use
  `photo_position` (for example `"center 20%"`) and check the preview.
- Only use images the user provides or that come from NYU or the person's own
  pages. If the source or permission is unclear, ask.

## Local preview

```bash
bundle exec jekyll serve --livereload
```

Run it in the background and give the user the link
(`http://localhost:4000/...`). The page reloads by itself after edits. Restart
it if `_config.yml` changes. If `bundle` is missing, help the user through
setup (see [guide/installation.md](guide/installation.md)). On macOS the
system Ruby is too old, so use the Homebrew Ruby (`ruby@3.3`). If dependencies
are missing, run `bundle install` first.

To check the site without serving it, run `bundle exec jekyll build`. It must
finish with no errors before you open a PR.

## Writing style for site content

Write in a factual, plain and professional style. Avoid marketing language
("cutting-edge", "world-class"). Use the formatting already in place: `&ndash;`
for date ranges and `&middot;` as a separator in event lines. Use names and
titles exactly as given.
