# Installation (one-time setup)

[← Back to the guide](index.md)

You do this once. Follow the steps in order. Each step has instructions for
**Mac** and **Windows**. Use the ones for your computer.

Some steps use the **Terminal**, a window where you type commands. Copy each
command exactly (the copy button on GitHub helps), paste it, and press
**Return** (or **Enter**). It's normal for commands to print a lot of text.

> **How to open the Terminal**
> - **Mac:** press **⌘ Space**, type **Terminal**, press Return.
> - **Windows:** press the **Windows key**, type **PowerShell**, press Enter.
>
> When a command asks for your **password** on a Mac, type your normal Mac
> login password. Nothing appears on screen as you type. That's normal. Press
> Return when done.

Once Claude is installed (step 6), it can help with the remaining steps. If
something goes wrong before then, email Sundeep.

---

## 1. Create a GitHub account

GitHub is where the website's files are stored.

1. Go to <https://github.com/signup> and create an account. Your NYU email is
   a good choice. Pick a professional username, for example `teresawang-nyu`.
2. GitHub will ask you to set up **two-factor authentication**. Follow the
   steps. An authenticator app on your phone works well.
3. Email Sundeep your **GitHub username** and ask for access to the
   `nyu-wireless/nyu-wireless.github.io` repository.
4. You'll get an email invitation from GitHub. Click **Accept invitation**.

## 2. Install VS Code

VS Code is the program you'll work in. You may already have it. If so, skip
this step.

- **Mac:** download from <https://code.visualstudio.com/>, open the downloaded
  file, and drag **Visual Studio Code** into your **Applications** folder.
- **Windows:** download from <https://code.visualstudio.com/> and run the
  installer. The default options are fine.

## 3. Install the basic tools (Git, and Homebrew on Mac)

**Git** keeps track of every version of the website's files.

### Mac

1. In the Terminal, run:

   ```bash
   xcode-select --install
   ```

   A window pops up. Click **Install** and wait until it finishes (5 to 15
   minutes). If it says the tools are *already installed*, that's fine.

2. Install **Homebrew**, which makes it easy to install the remaining tools.
   Run:

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

   Enter your password when asked, and press Return to confirm.
   **Important:** when it finishes, it prints a section called **Next steps**
   with two or three commands to copy and run. Run them. Then close the
   Terminal and open a new one.

3. Check that it worked:

   ```bash
   brew --version
   ```

   You should see a version number.

### Windows

1. Download Git from <https://git-scm.com/downloads/win> and run the
   installer. **Accept all the default options.** There are many screens. Just
   keep clicking **Next**.

## 4. Install the GitHub tool and sign in

The GitHub tool (`gh`) lets Claude publish your changes to GitHub for you.

- **Mac:**

  ```bash
  brew install gh
  ```

- **Windows:**

  ```powershell
  winget install --id GitHub.cli
  ```

  Then close PowerShell and open a new one.

Now sign in (Mac and Windows):

```bash
gh auth login
```

Answer the questions with the arrow keys and Return:

| Question | Answer |
|---|---|
| Where do you use GitHub? | **GitHub.com** |
| Preferred protocol for Git operations? | **HTTPS** |
| Authenticate Git with your GitHub credentials? | **Yes** |
| How would you like to authenticate? | **Login with a web browser** |

It shows a short code. Press Return, and your browser opens. Paste the code,
then click **Authorize**. Finally, check:

```bash
gh auth status
```

It should say you are logged in to github.com.

## 5. Download the website files

This copies the website's files to your computer. GitHub calls this
**cloning**.

- **Mac:**

  ```bash
  cd ~/Documents
  gh repo clone nyu-wireless/nyu-wireless.github.io
  ```

- **Windows:**

  ```powershell
  cd $HOME\Documents
  gh repo clone nyu-wireless/nyu-wireless.github.io
  ```

You now have a folder **Documents → nyu-wireless.github.io** with the
website in it.

Open it in VS Code: start VS Code, choose **File → Open Folder…** (on a Mac,
**File → Open…**), select the **nyu-wireless.github.io** folder, and click
**Open**. If VS Code asks *"Do you trust the authors of the files in this
folder?"*, click **Yes, I trust the authors**.

From now on, VS Code usually reopens this folder by itself. If not, use
**File → Open Recent**.

## 6. Install Claude in VS Code

1. In VS Code, click the **Extensions** icon in the left sidebar (four small
   squares), or press **⌘ Shift X** (Mac) / **Ctrl Shift X** (Windows).
2. Search for **Claude Code**. Pick the one published by **Anthropic** and
   click **Install**.
3. Open Claude by clicking the **Claude icon** (an orange spark) at the top
   right of the editor or in the left sidebar. If you can't find it, press
   **⌘ Shift P** (Mac) / **Ctrl Shift P** (Windows), type **Claude**, and
   choose the option to open Claude.
4. Sign in with your Claude account when asked.

Test it by typing into the Claude chat box:

> What is this website, and where is the list of people stored?

Claude should describe the site and mention the people list. You're connected.

## 7. Set up the preview

The preview lets you see your changes **on your own computer** before
anyone else sees them. It needs a program called **Ruby**.

### Mac

You can ask Claude to do this step for you:

> Please set up the local preview for this website on my Mac. Homebrew is
> already installed. Use Ruby 3.3.

Claude will run the commands and ask your permission for each one. If you'd
rather do it yourself, run these in the Terminal:

```bash
brew install ruby@3.3
echo 'export PATH="$(brew --prefix ruby@3.3)/bin:$PATH"' >> ~/.zshrc
```

Close the Terminal, open a new one, and run:

```bash
cd ~/Documents/nyu-wireless.github.io
bundle install
```

### Windows

1. Go to <https://rubyinstaller.org/downloads/> and download
   **Ruby+Devkit 3.3.x (x64)** (the newest 3.3 version).
2. Run the installer with the default options. On the last screen, leave
   **"Run 'ridk install'"** checked and click **Finish**.
3. A black window opens and asks which components to install. Press **Enter**
   to accept the default. When it finishes and asks again, press **Enter** once
   more to close it.
4. Open a **new** PowerShell and run:

   ```powershell
   cd $HOME\Documents\nyu-wireless.github.io
   bundle install
   ```

### Test the preview (Mac and Windows)

Ask Claude:

> Start the local preview.

Claude will start it and give you a link, usually <http://localhost:4000>.
Open the link in your browser. You should see the NYU WIRELESS website. It's
running on your computer, so only you can see it.

---

## You're done 🎉

Next: **[Using Claude →](prompt.md)**

### If something didn't work

| Problem | What to do |
|---|---|
| `command not found` (Mac) or `not recognized` (Windows) | Close the Terminal or PowerShell and open a new one, then try again. On a Mac, check that you ran Homebrew's "Next steps" commands. |
| `gh repo clone` says *not found* or *permission denied* | Your access invitation may not be accepted yet. Check your email, or ask Sundeep. |
| `bundle install` fails | Paste the last few lines of the error into Claude and ask it to fix the problem. |
| Anything else | Ask Claude, or email Sundeep with a screenshot. |
