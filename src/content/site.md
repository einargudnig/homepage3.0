---
title: Building new website 🤖 
author: Einar Guðni Guðjónsson
date: 04 March 2021
description: More details.
slug: new-site-v2
---


# Building my new website 🔧

Like I mentioned in my first <a href="https://www.einargudni.com/blog/1612656000">post</a>  I stumbled up on a website that Brittany Chang made. I liked the look of her site instantly and since she was fine with people forking her repo I thought that it would be a good starting point for my new website.
The reason why I decided to go with a 'template' the someone else made is because I'm not a good designer, and I would probably have spent million hours to trying to design something that I will end not satisfied on.

One thing I decided to do was build the website using <a href="https://reactjs.org/">React</a> and by that I mean `create-react-app` instead of <a href="https://www.gatsbyjs.com/">Gatsby</a>. 

I thought it would be good for me to build it with React, it forced me to start almost from scratch and build it from ground up. I also wanted to add some features, and since I would be building it from scratch with React it was a good point to add some of these features early in the process. Instead of trying to add these features to the pre made project.

When I was almost finished with building the website a thought arrived and it was that perhaps I just should've used <a href="https://nextjs.org/">Next.js</a> 🤐
I'll probably end up remaking tyhis website in nextjs, but for now this will do.


I started with `create-react-app` since that is a great place to start with a quick and easy react application.
I wanted to implement a dark mode, so I used <a href="https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/">this</a> post as a guideline to build the useDarkMode hook that handled the dark mode functionality

### Routes

I also wanted to start a blog, to write posts like this, and that meant I had to use use `react-router-dom` to handle the routes. But also decide how to build, generate and publish the posts.

To handle different routes i had to do some tricks since `create-react-app` does only make client-side rendered webpage, I had build and manage the routes in  a different way if I had used gatsby.js


I made this `Main.js` component to hold all of the routes that I needed for this website, this component was then rendered in `App.js`  along with Navbar, Footer and social information.
Note this is just a small snippet for the component, not the whole component.
![App](https://imgur.com/HYmLN1H)


### Blog
I decided to use markdown to write the blog posts, I use <a href="https://obsidian.md/">Obsidian</> quite a lot. To organize, take notes and learn more. I write in markdown in Obsidian so I can write my posts there and then post them when they are ready.
I made a simple yet effective function to handle the blogposts, I used videos from <a href="https://www.youtube.com/watch?v=gT1v33oA1gI&list=PLASldBPN_pkBfRXOkBOaeCJYzCnISw5-Z&ab_channel=willjw3">this</a> playlist from willjw3 as a guideline.

In this setup I can write my posts in Obsidian, with correct format, and then just copy them to my project folder. I do need to run one small npm script to make the post visible on the site. It is simple and works.

### Styled Components

For this time being I used most of the styled components Brittany made. With some minor changes, I will make some changes over time, just for my own fun. This is the first time I've really used styled components, so it is a good opportunity for me to play around with them to see what they are capable of.
I like styled components, they did provide good consistency for me but they will bloat the files quite lot. I'm looking forward to use them more and see what they are capable of.

### Conclusion

I'm very happy with my new site. I could never have designed such a good looking website, so all kufos goes to Brittany Chang for her great design.
It was fun to rebuild it with React.js, all the way towards the part I thought that I should've used Next.js, but that is an opportunity for a new blogpost in the future.
These are my first steps into writing so let's hope i'll get better!
I have some planned posts and projects so stick around.