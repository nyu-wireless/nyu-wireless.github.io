# Managing the NYU WIRELESS website with Claude

This guide is for anyone (staff, students, or faculty) who wishes to directly
update the website <https://nyu-wireless.github.io>. **You don't need to know
how to code.**

## The idea

The website is a folder of text files and images. To change the site, someone
edits the files and uploads them, and the site updates itself a few minutes
later.

You won't edit those files yourself. You'll use **Claude**, an AI assistant
that runs inside a program called **VS Code**, and describe what you want in
plain English:

> Add Jane Doe to the faculty list. She is an Assistant Professor of Electrical
> and Computer Engineering at NYU Tandon. Her photo is in my Downloads folder
> (jane-doe.jpg), and her web page is https://example.edu/jane.

Claude finds the right files, makes the change, shows you a preview, and
prepares it for publishing. You check that it looks right and approve it.

Claude has been given instructions about this website: where everything is,
how to name images, and how to publish changes safely. So you can describe
what you want the way you'd describe it to a colleague.

## What you can do

- Add or update **people**: names, titles, photos, links.
- Update the **Events** page and the **Open House** pages: dates, agenda,
  demos, posters, photos.
- Add or remove **industry affiliates** and **funding agencies**, with logos.
- Change wording, fix typos, update links, and swap photos anywhere on the
  site.
- Add **research projects**, usually with the faculty member's help.

Larger changes, such as a new section like "News" or a change to the site's
design, are possible too. Claude will mark these for Sundeep to review before
they go live.

## Requirements

| You need | Notes |
|---|---|
| A Mac or Windows computer | This guide covers both. |
| A **GitHub account** | Free. GitHub is where the website's files are stored. |
| **Access to the website on GitHub** | Sundeep adds your account after you send him your username. |
| A **Claude account** with Claude Code | Claude Pro or a Team seat. Ask Sundeep which to use. |
| About **an hour** for the first setup | You only do this once. |

## Steps

1. **[Installation](installation.md):** install VS Code, Git, the GitHub
   tools, Claude, and the website preview. You do this once.
2. **[Using Claude](prompt.md):** how to open Claude in VS Code and ask it for
   changes, with example requests.
3. **[Reviewing and publishing](review.md):** how to preview your change, what
   a "pull request" is, and how to publish.

## What a typical change looks like

Once you're set up, a typical change takes 5 to 10 minutes:

1. Open VS Code (the website folder opens with it).
2. Open Claude and say what you want.
3. Look at the preview in your web browser. Ask Claude to fix anything that's off.
4. Say *"Looks good, publish it."* Claude creates a **pull request**, which is
   a proposed change waiting for approval.
5. Open the link Claude gives you, look it over, and click **Merge**. The live
   site updates a few minutes later.

## You can't break the website

- Nothing goes live until you merge a pull request.
- Every past version of the site is saved, so any change can be undone. Just
  ask Claude: *"Undo the change I published this morning."*
- If you're unsure, ask Claude to explain, or ask Sundeep.

## Getting help

- **Ask Claude first.** It can explain error messages, tell you what's going
  on, and fix most problems. For example: *"I see a red error. What does it
  mean?"* or *"I'm confused, what state are things in right now?"*
- **Ask Sundeep** (srangan@nyu.edu) about access, accounts, or anything that
  feels wrong.

---

*Note for AI agents: your operating instructions are in
[CLAUDE.md](../CLAUDE.md) at the root of the repository.*
