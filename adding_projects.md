# Adding your projects to the NYU WIRELESS research site

This guide is for NYU WIRELESS faculty (and the AI coding agents many of you
will use) who want to list projects on **https://nyu-wireless.github.io**.

The site is organized into six **research areas**. Each area page shows a
compact list of projects: thumbnail, title, PIs and a one-sentence summary.
Clicking a project opens its project page. A project can appear in several areas.

> **Tip: let an AI agent do the work.** Claude Code, Codex, Copilot and similar
> agents handle this well. Point the agent at this file and give it your
> project's URL, or a paper or proposal abstract, and the list of people
> involved. This document has everything the agent needs. Review what it
> writes before submitting.

---

## 1. Get access

Ask **Sundeep Rangan** (srangan@nyu.edu) to add your GitHub account as a
contributor to
[`nyu-wireless/nyu-wireless.github.io`](https://github.com/nyu-wireless/nyu-wireless.github.io).
Include your GitHub username in the email. Students may contribute on a
faculty member's behalf, but the faculty member should ask for their access.

Then clone the repository:

```bash
git clone https://github.com/nyu-wireless/nyu-wireless.github.io.git
cd nyu-wireless.github.io
git checkout -b add-<your-lastname>-projects
```

## 2. Choose an option for each project

| Option | When to use it | What you add |
|---|---|---|
| **A. Link to an existing page** | The project already has a good page (lab site, group site, GitHub Pages site) | One entry in `_data/projects.yml` and a thumbnail image |
| **B. Write a short page on this site** | The project has no page, or only an old one on wireless.engineering.nyu.edu | One entry in `_data/projects.yml`, one Markdown file in `_projects/`, and images |

You can mix options: for example, link to your lab's home page (A) and write
short pages for two projects that have no page of their own (B).

---

## 3. Option A: link to an existing page

### 3.1 Add a thumbnail

Save one image per project to `assets/images/projects/`, named
a short, unique name, prefixed with your lab or last name, for example
`alma-sensing.jpg`.

- **Size:** at least 600 px wide, under ~500 KB. JPG for photos, PNG or SVG for diagrams.
- **Shape:** it is cropped to a 5:3 landscape box. Photos and illustrations
  crop well. Diagrams that must not be cropped can use `image_fit: contain`
  (see below).
- **Rights:** only use images you have the right to publish: your own figures,
  photos and lab graphics. Do not use stock photos unless they are licensed for this use.

### 3.2 Add an entry to `_data/projects.yml`

Add one entry per project. The order in this file is the order on the area
pages, so keep your entries together, after the last existing entry.

```yaml
- title: "Quantum Sensing"
  pis: ["Aziza Almanakly"]
  summary: "Superconducting circuits and entangled sensor networks for detecting weak signals beyond classical precision limits."
  url: "https://alma.engineering.nyu.edu/research/#quantum-sensing"
  image: "/assets/images/projects/alma-sensing.jpg"
  areas: [circuits]
```

Field reference (applies to options A and B):

| Field | Required | Rules |
|---|---|---|
| `title` | yes | Project name as it appears on the project's own page. Quote it. |
| `pis` | yes | List of **NYU WIRELESS faculty** on the project, lead PI first, as `"First Last"`. List students and external collaborators on the project page itself, not here. |
| `summary` | yes | **One sentence, at most ~120 characters**, plain text, no Markdown. It is shown in full on the area page, so longer summaries make uneven rows. Say what the project does, not its background. |
| `url` | yes | Option A: the full `https://` address of the existing page (a `#section` anchor is fine). Option B: `/projects/<page-name>/`, matching the file name in `_projects/`. |
| `image` | recommended | Path starting with `/assets/images/projects/`. Without it, a plain violet block is shown. |
| `image_fit` | optional | `contain` to show the whole image without cropping (for diagrams). |
| `image_position` | optional | CSS `object-position` to move the crop, e.g. `"center 70%"` to show the lower part of a tall image. |
| `areas` | yes | One or more area slugs from the table below, in square brackets. |

Area slugs:

| Slug | Area |
|---|---|
| `wireless` | Wireless Communications & Sensing |
| `networking` | Networking, Edge Computing & Security |
| `circuits` | Circuits & Devices (including quantum) |
| `applications` | Applications |
| `ai-ml` | AI/ML in Wireless |
| `testbeds` | Testbeds & Prototypes |

Pick only the areas where the project is a central contribution; two or three
is typical.

---

## 4. Option B: write a short page on this site

Do everything in Option A, with `url: "/projects/<page-name>/"`, then add a
page file and its images.

### 4.1 Images

Create a folder `assets/images/projects/<page-name>/` and put the page's
images there:

- `banner.jpg`: the main image shown beside the overview, which can also be
  the thumbnail in `_data/projects.yml`.
- `pub1.png`, `pub2.png`, ...: optional, one small figure per publication
  (a key plot or system diagram from the paper, about 300 to 500 px wide).

### 4.2 Page file

Create `_projects/<page-name>.md`. Use a short, lowercase, hyphenated name,
for example `_projects/reliable-low-latency.md`, which is published at
`/projects/reliable-low-latency/`. Copy this template:

```markdown
---
title: "Reliable Broadband Low-Latency Communications"
image: "/assets/images/projects/reliable-low-latency/banner.jpg"
image_caption: "One sentence describing the image."
faculty:
  - name: "Shivendra Panwar"
    url: "https://engineering.nyu.edu/faculty/shivendra-panwar"
  - name: "Fraida Fund"
    url: "https://engineering.nyu.edu/faculty/fraida-fund"
students:
  - name: "Ufuk Usubütün"
    url: "https://engineering.nyu.edu/student/ufuk-usubutun"
  - name: "Soumyadeep Datta"          # url is optional
keywords: ["Low latency", "XR over 5G", "Multi-connectivity"]
publications:
  - title: "Do Switches Still Need to Deliver Packets in Sequence?"
    authors: "U. Usubütün, F. Fund, S. Panwar"
    venue: "IEEE HPSR, 2023"
    url: "https://ieeexplore.ieee.org/abstract/document/10147992"
    image: "/assets/images/projects/reliable-low-latency/pub1.png"
---

First paragraph: the problem and why it matters (2 to 4 sentences).

Second paragraph: what this project does and its main results or approach
(2 to 4 sentences). **Bold** one or two key phrases.
```

Field reference:

| Field | Required | Rules |
|---|---|---|
| `title` | yes | Must match `title` in `_data/projects.yml`. |
| `image` | recommended | The banner image beside the overview. Landscape works best. |
| `image_caption` | optional | One short sentence. |
| `faculty` | yes | NYU WIRELESS faculty, lead PI first. `url` is optional; use the faculty profile on engineering.nyu.edu or a lab page. |
| `students` | optional | Current students and postdocs, same format. Leave out `url` if there is no individual page. |
| `keywords` | optional | 3 to 6 short topic tags. |
| `publications` | optional | 3 to 8 representative papers, newest first. `authors` in "F. Last" form; `venue` as "Journal or conference, year"; `url` to the DOI, IEEE Xplore or arXiv page; `image` optional. |
| `sections` | optional | One full-width row per sub-project or topic: `title`, `text` (Markdown), one of `image`, `video` or `youtube` (a YouTube video ID), and an optional `caption`. Add `label` (for example `"Research area 1"` or `"Thrust 2"`) to show a small heading above the title; without it, no label is shown. |

The page body (below the second `---`) is the overview, written in Markdown.
**Keep it short: two paragraphs, about 120 to 200 words.** The page is a
summary that points readers to the papers, not a full report.

The page layout (title banner, area links, team, publications) is generated
automatically from these fields. Do not add HTML or styling to the page file.

---

## 5. Preview locally (recommended)

You need Ruby 3.x and Bundler (on Windows, the RubyInstaller "with Devkit"
build). Then, from the repository folder:

```bash
bundle install
bundle exec jekyll serve --livereload
```

Open http://localhost:4000, go to the area pages you tagged, and check that
your projects appear, the thumbnails crop well, and the links work. If you
change `_config.yml`, restart the server.

If you cannot run Jekyll locally, the pull request in step 6 is still
reviewed before going live.

## 6. Submit

```bash
git add _data/projects.yml _projects/ assets/images/projects/
git commit -m "Add <Lastname> projects"
git push -u origin add-<your-lastname>-projects
```

Then open a pull request against `master` (on GitHub, or with
`gh pr create --base master`) and mention which projects you added. Once it is
merged, GitHub Pages publishes the site within a few minutes.

---

## Instructions for AI agents

If you are an agent completing this task for a faculty member:

1. **Gather inputs first.** For each project you need: the title, NYU WIRELESS
   faculty, the areas, and either an existing URL (option A) or source text
   such as a project page, abstract or proposal summary (option B). If the user
   gives an existing project URL, fetch it and draft the summary, overview and
   publication list from it. Ask the user only for what you cannot find.
2. **Touch only these paths:** `_data/projects.yml` (add new entries; edit
   only entries for this faculty member's projects), `_projects/<page-name>.md`, and
   new files under `assets/images/projects/`. Do **not** edit layouts,
   includes, CSS, `_config.yml`, `_data/areas.yml`, or other faculty's entries.
   If something seems to need a template change, tell the user instead of
   making it.
3. **Follow the field rules exactly:** a summary of one sentence and at most
   ~120 characters; `areas` only from the six slugs; `url` either a full
   `https://` address or `/projects/<page-name>/` matching the file name;
   quoted YAML strings; image paths starting with `/assets/images/projects/`.
4. **Write in a factual, plain style.** No marketing language ("cutting-edge",
   "revolutionary"). Do not invent results, funding sources, collaborators or
   publications; use only what the sources say. Keep the overview to two
   paragraphs.
5. **Images:** download images only from the faculty member's own pages or
   from figures in their papers, keep each under ~500 KB, and do not
   hotlink: save the files into the repository.
6. **Check your work:** confirm the YAML parses; if Ruby is available, run
   `bundle exec jekyll build` and confirm it finishes with no errors and that
   `_site/research/<area>/index.html` contains each new project title.
7. **Submit as a pull request** on a branch, as in step 6. Do not push to `master` directly.
   Summarize in the PR description which projects were added, which option
   each uses, and anything the faculty member should double-check
   (for example, summaries you wrote or names you could not verify).

Questions: Sundeep Rangan, srangan@nyu.edu.
