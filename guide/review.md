# Reviewing and publishing

[← Back to the guide](index.md)

A change goes through three stages before it reaches the live site:

```
 Your computer             GitHub                    Live site
 ─────────────             ──────                    ─────────
 1. Claude edits    ──▶   2. Pull request   ──▶     3. Merged → site
    + you preview            (you review,               updates in a
                              then Merge)                few minutes
```

Claude does the technical work at every stage. You **look** at the change and
**decide** whether to publish it.

---

## A few words you'll see

| Word | What it means |
|---|---|
| **Repository** ("repo") | The folder of website files, stored on GitHub. You have a copy on your computer. |
| **`master`** | The official version of the site. Whatever is in `master` is what the world sees. |
| **Branch** | A separate copy where a change is prepared without touching `master`. Each task gets its own branch. |
| **Commit** | A saved snapshot of a change, with a short description. |
| **Push** | Uploading your commits from your computer to GitHub. |
| **Pull request (PR)** | A proposal to add a branch's changes into `master`. It shows exactly what will change and has a **Merge** button. |
| **Merge** | Accepting a pull request. The change goes into `master` and the live site updates. |

## What is a pull request?

A pull request is a change **waiting for approval**. It works like tracked
changes in Word: you can see what's being added and removed before you accept
it.

Each pull request has its own page on GitHub with:

- A **title and description** that Claude writes in plain English
- A **Files changed** tab that shows every line added (green) or removed (red)
- A **Merge pull request** button

**We publish every change through a pull request, even small ones.** It
takes about 30 seconds and has three benefits:

- **Nothing goes live by accident.** You always get one last look first.
- **Every change is recorded** with a description, so it's easy to see later
  what changed and when, and to undo it.
- **Bigger changes can get a second pair of eyes.** For changes to the
  design or structure of the site, Claude will say that Sundeep should review
  before merging.

You can merge your own pull requests for everyday content: people, events,
affiliates, images, text and links.

---

## Step 1: Preview on your computer

After Claude makes a change, ask:

> Show me the preview.

Claude starts the preview (if it isn't already running) and gives you a link
such as **http://localhost:4000/people/**. Open it in your browser.

- The preview runs **only on your computer**. Nobody else can see it.
- It **updates by itself** when Claude makes more edits. Just reload the page.
- Check the things that matter: names spelled correctly, photos cropped well,
  links working (click them), dates right.

If something's wrong, tell Claude:

> The photo is too small, and the link under her name goes to the wrong page.
> It should be https://…

Repeat until you're happy.

## Step 2: Create the pull request

When the preview looks right:

> Looks good. Please create a pull request.

Claude will:

1. Save the change (commit)
2. Upload it to GitHub (push)
3. Create the pull request
4. Give you a link to it

Claude may ask permission for commands like `git commit`, `git push` and
`gh pr create`. These are safe to approve.

## Step 3: Review and merge on GitHub

Open the link Claude gave you. On the pull request page:

1. Read the **description** at the top. Does it match what you asked for?
2. Optionally click **Files changed** to see exactly what changed. Green
   lines are added and red lines are removed. You don't need to understand
   every line, but this is a good place to spot a misspelled name.
3. Scroll down and click the green **Merge pull request** button, then
   **Confirm merge**.
4. Click **Delete branch** if GitHub offers it. That just tidies up.

Or ask Claude to do it:

> Merge the pull request.

Claude will merge routine changes. For structural changes, it will tell you to
wait for Sundeep's review.

**If Claude says a change needs Sundeep's review**, don't merge it. Send
Sundeep the pull request link, or just tell him there's one waiting. He'll
review it and merge it, or comment with questions.

## Step 4: Check the live site

GitHub rebuilds the site **2 to 5 minutes** after a merge. Then open
<https://nyu-wireless.github.io> and look at the page you changed. If you
still see the old version, try a **hard reload**: **⌘ Shift R** (Mac) or
**Ctrl Shift R** (Windows).

Not showing up after 10 minutes? Ask Claude:

> I merged the pull request but the site hasn't changed. Can you check
> whether it was published?

---

## Example: a complete change

Here is what a whole conversation might look like:

> **You:** Start a new change. Add Samsung as an industrial affiliate,
> website https://www.samsung.com/. The logo is in my Downloads folder,
> samsung.png.
>
> **Claude:** I'll add Samsung to the affiliates list on the home page, in
> alphabetical order, and save the logo with the other affiliate logos. Done.
> Want to see the preview?
>
> **You:** Yes.
>
> **Claude:** The preview is running. Open http://localhost:4000/ and scroll
> down to "Industrial Affiliates".
>
> **You:** The logo looks much bigger than the others.
>
> **Claude:** The image had a lot of empty space around it. I've trimmed it, so
> it should now match the other logos. Reload the page to check.
>
> **You:** Perfect. Create a pull request.
>
> **Claude:** Done. Here's the pull request: https://github.com/nyu-wireless/…
> This is a routine change, so you can merge it yourself.
>
> **You:** Merge it.
>
> **Claude:** Merged. The live site will update in a few minutes.

## Undoing a change

Everything can be undone. Ask:

> Undo the change I published that added Samsung as an affiliate.

Claude will create a **new** pull request that reverses it. You review and
merge it the same way.

## Useful things to ask

| You want to… | Ask Claude |
|---|---|
| Know where things stand | *"What's the current state? Do I have unpublished changes?"* |
| See your open pull requests | *"Do I have any open pull requests?"* |
| Drop a change you no longer want | *"Abandon this change. I don't want to publish it."* |
| Continue an unfinished change | *"I was working on the Open House agenda yesterday. Let's continue."* |
| Stop the preview | *"Stop the preview."* |

[← Back to the guide](index.md)
