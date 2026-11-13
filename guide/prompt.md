# Using Claude

[← Back to the guide](index.md)

## Opening Claude

1. Open **VS Code**. It should open the **nyu-wireless.github.io** folder. If
   not, use **File → Open Recent**.
2. Click the **Claude icon** (orange spark) at the top right of the editor or
   in the left sidebar. A chat panel opens.
3. Type what you want in the box at the bottom and press **Return**.

**Start a new conversation for each new task.** Use the **+** or **New
conversation** button in the Claude panel. This keeps Claude focused on one
change at a time.

## When Claude asks permission

Before Claude edits a file or runs a command, it may show a prompt such as
*"Allow Claude to run `git push`?"* with options like **Yes**, **Yes, and
don't ask again**, and **No**.

**Usually safe to approve:**

- Editing or creating files in the website folder
- `git` commands (for example `git pull`, `git checkout`, `git commit`,
  `git push`)
- `gh` commands (GitHub, for example `gh pr create`)
- `bundle` or `jekyll` (the preview)
- `sips` (resizing images on a Mac)

**Say No, and ask Claude what it's for, if you see:**

- `sudo`, or anything that asks for your computer password, unless you are in
  the middle of [installation](installation.md)
- Deleting files outside the website folder
- Anything you don't understand. It's always fine to type *"What does that
  command do?"* first.

If you approve something by mistake, don't worry. Nothing goes live until you
merge a pull request (see [Reviewing and publishing](review.md)).

## Tips for good requests

1. **Say what and where.** *"On the Events page, change…"* works better than
   *"Change the date."*
2. **Give exact text, names and links.** Copy and paste them. Claude uses what
   you give it and won't guess at titles or dates.
3. **For images, say where the file is**, for example *"the photo is in my
   Downloads folder, called jane-doe.jpg"*. Claude copies it into the website
   and resizes it.
4. **One task per conversation.** Several small edits that belong together are
   fine, for example *"Add these three new affiliates."*
5. **Ask for a preview.** *"Show me the preview"* gives you a link to see the
   change in your browser.
6. **Iterate.** If something looks off, say so plainly: *"The photo is cropped
   too low. Move it up so her face is centered."*
7. **Ask questions.** *"Where on the site does the funding list appear?"* or
   *"What did you just change?"* are good questions.

## Example requests

### People

> Add Jane Doe to the faculty list. Title: "Assistant Professor, Electrical
> and Computer Engineering", campus: NYU Tandon. Web page:
> https://engineering.nyu.edu/faculty/jane-doe. Her headshot is in my
> Downloads folder (jane-doe.jpg).

> Change Michael Knox's title to "Industry Professor and Associate Chair,
> Electrical and Computer Engineering".

> Remove John Smith from the faculty list. He has left NYU.

> On the People page, Aziza's photo is cropped so her head is cut off. Can you
> fix it?

### Events

> On the Events page, update the Brooklyn 6G Summit dates to November 2–4,
> 2027, and change the theme to "Networks for the Physical AI Era".

> In the Open House agenda, move the lab tours from 2:00 to 2:30 pm and add
> a coffee break at 3:30 pm.

> Add these demos to the Open House demos page: [paste the list].

> Replace the Open House photo on the Events page with
> ~/Downloads/open-house-2026.jpg.

### Affiliates and funding

> Add Samsung as an industrial affiliate. Website: https://www.samsung.com/.
> The logo is in my Downloads folder (samsung-logo.png).

> Remove Sharp from the affiliates list.

### News

The site doesn't have a News section yet. It's coming soon. Once it's there,
you'll be able to say things like:

> Add a news item: "Elza Erkip gives keynote at IEEE ICC 2026", dated June 10,
> 2026, linking to https://example.com/article. Use the photo
> ~/Downloads/erkip-icc.jpg.

### Fixes and questions

> There's a typo on the home page: "acadmic" should be "academic".

> The link to Shivendra Panwar's page is broken. Please fix it. The correct
> link is https://engineering.nyu.edu/faculty/shivendra-panwar.

> Where does the text under "Industrial Affiliates" on the home page come
> from? I want to reword it.

### Bigger changes

These are possible. Claude will mark them for Sundeep to review before
they go live:

> Add a "Contact" link to the top menu that goes to a new page with our
> address and email.

## Starting and finishing

Each task follows the same pattern. Claude handles the details:

1. *"Start a new change: …"* Claude gets the latest version of the site and
   sets up a separate workspace (a "branch") for your change.
2. Claude makes the edits and shows you a preview.
3. *"Looks good, publish it."* Claude creates a pull request.
4. You merge the pull request on GitHub. The site updates in a few minutes.

Steps 2 to 4 are described in **[Reviewing and publishing →](review.md)**.
