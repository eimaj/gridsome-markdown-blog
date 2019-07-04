---
title: 'Netlify FTW 🎉'
date: 2019-06-30 00:00:00
description: 'And why Netlify is my favourite hosting tool out there (at the moment).'
slug: netlify-ftw
tags: javascript, netlify
length: 2 minute read
---

For background, I've been a Rails developer for more than 10 years. Deploying and hosting a Rails app has never been all that easy. Services like [Heroku](https://www.heroku.com/) and [Digital Ocean](https://www.digitalocean.com/) are _miles_ ahead of what we used to have to do to launch a website. But that is different discussion.

My current day job is all JavaScript. Even so, up until tonight, I've been building and hosting things on my Digital Ocean droplet with lessons learned from hosting Rails apps. Navigating nginx, setting up SSL certs taking the whole thing down with one accidental syntax error. All the fun stuff.

This blog, for example, was initially built locally and `scp`'d up to my Digtal Ocean droplet. Because who has time to set up git hooks and other tooling when you have a three year old at home? Not me.

## Netlify to the rescue!

To host a static site (standard HTML, CSS and JavaScript) on Netlify using their web GUI all you need is a project hosted on one of GitHub, GitLab or Bitbucket. Nothing else.

For my [Mastermind.js](https://mastermind.eimaj.dev/) and [Spell & Speak](https://spell-and-speak.eimaj.dev/) apps here's what I had to do:

1. Log into Netlify,
2. Select/connect my git provider,
3. Select the repo I would like to deploy,
4. Select what branch I would like to be deployed,
5. Click the 'Deploy site' button.

These apps were especially easy because there is no `build` required. They are just plain JavaScript, HTML and CSS.

If you are working with a framework of some kind you probably have a `build` script that you can run to create a minified version of your site. Here's what you have to do:

1. Log into Netlify,
2. Select/connect to your git provider,
3. Select the repo you would like to deploy,
4. Select what branch you would like to be deployed,
5. Specify the build command (i.e. `npm run build`),
6. Specify the build directory (i.e. `dist`),
7. Click the 'Deploy site' button.

Your newly deployed site will be given a random name like `dazzling-colden-123456.netlify.com` and already have SSL certs already set up using [Let's Encrypt](https://letsencrypt.org/). Setting up your [custom domain](https://www.netlify.com/docs/custom-domains/) is as easy as changing an CNAME DNS record.

Long story short, I'm on the band wagon. If I don't have to manage any of servers, I can spend more time building fun things.

🥳
