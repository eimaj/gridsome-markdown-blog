---
title: '`git cherry-pick`'
date: 2019-04-23 00:00:00
description: "Here's how to move some commits from one branch to another."
slug: git-cherry-pick
tags: git
length: 4 minute read
---

If you ever have a commit in one branch and you need it in another you might want to use `git cherry-pick`.

A common use-case for this command is if I have made a change in a feature branch, but need a part of it merged into another branch before the entire feature is complete.

_Aside: This is another reason for keeping your commits smaller and contextual._

Here is the is result of `git log --oneline --no-decorate` on my feature branch. (See [this post](/git-log) for more about `git log`)

```
$ git log --oneline --no-decorate

dedee6f (HEAD -> feature/new-about-page) Adds About page component (that I don't want added to my project yet)
7d5f979 Updates global.scss to include About page styles
15db5ca Updates favicon.png (that I want to update on master immediately)
```

In this example I want to move the favicon.png commit to `master`, but I want to leave the other changes until the are complete. The id of the commit is `15db5ca`.

```
$ git checkout master
$ git cherry-pick 15db5ca
```

And that's it. This command simply copies the changes from the chosen commit to your current branch as a new commit. The old commit remains in the feature branch so there is no impact on your history.

I sometimes like using the `-x` flag. It appends "(cherry picked from commit 15db5ca)" commit message to the newly created commit.

```
$ git cherry-pick -x 15db5ca
```

If you want to write your own commit message you'll use the `-e` flag (e for edit).

```
$ git cherry-pick -e 15db5ca
```

## Learn more

If you want to learn more about `git cherry-pick` I recommend taking a look at the docs [here](https://git-scm.com/docs/git-cherry-pick).
