
![beybot](https://user-images.githubusercontent.com/5713670/86497808-eb7e5f00-bd37-11ea-8cc4-4765e91d2065.png)

This is a twitch bot built on the [ComfyJS](https://github.com/instafluff/ComfyJS) (a wrapper around [tmi.js](https://github.com/tmijs/tmi.js)).

# How can I implement this in my chat?

Before I jump into I code I need to share some of the streaming basics.

## OBS Studio

OBS Studio is a free and open source software for live streaming and screen recording. If you are are using a streaming platform there is a good chance that that tool is built on top of the OBS library. This walk through will show OBS Studio, consult your platforms documentation or community for how to add browser source plugins.

B**rowser Source plugins**
When you set up an out of the box alert or chat system, like [Streamlabs](https://streamlabs.com/), they require you to add something call a Browser Source plugin. To do this you add the URL pointing to the plugin, provided in the Streamlabs dashboard. This is the backbone to most streaming interactions on Twitch. Browser source plugins are HTML, CSS, and some JavaScript—so basically webpages. 

If you are looking to code live on stream, you probably have this skills to make chat alerts  

## The easier path with ComfyJS

ComfyJS is maintained by [Instafluff](https://www.twitch.tv/instafluff), which you should give a follow for comfiest live code stream on Twitch. 

Everything you need to make a bot run lives in my open-sauced/beybot repo, linked below. This chatbot template was intentionally created without JavaScript frameworks in mind in hopes that anyone live coding stream could apply their own desired flavor to it. If you are interested, I would love to see a post where someones take this bot to the next level with Vue, React, or even Svelte.

https://github.com/open-sauced/beybot


If you would like to see this chat command working live here is a clip of me interacting with the basic `!yo` command.

[clip please]

**Step 1: In your fork replace the Twitch channel name.**

Then the `[index.html](https://github.com/open-sauced/beybot/blob/HEAD/index.html#L27)`  of the beybot, you will need to update my handle, “bdougieYO” to your Twitch handle. You are more than welcome to test this using my chat, but be sure to say hello if you if I am streaming while you are testing. 

There is only only one location you need to change:


    ComfyJS.Init( "bdougieYO" );

**Step 2: Deploy using GitHub Pages**

If you are unfamiliar, GitHub provides a low effort way for you to host simple HTML files as a webpage using their github.io domain. You will need to go to your repo settings to set up a GitHub Page for your forked repo. You can learn more about GitHub Pages at pages.github.com.

![](https://paper-attachments.dropbox.com/s_202334A481577855209C92DA29E80CC6349876B8BAA86FB00EF2859B2EC0BDD6_1594016982976_Screenshot+2020-07-05+23.27.44.png)


*When viewing the live site, it will be blank. You can open the web console and see the commands printed there, but keep in mind the page has intentionally been left blank in order to hide and show the Beyonceé gifs.* 

Your set up for GitHub Pages should like the above and provide a ✅ when ready to view.  If this site require more to build than a single HTML file, you could also check the deploy environments page to check on the status of the deploy.  This can be found on the side bar of your repo’s home page.

![](https://paper-attachments.dropbox.com/s_202334A481577855209C92DA29E80CC6349876B8BAA86FB00EF2859B2EC0BDD6_1594017161655_Screenshot+2020-07-05+23.31.52.png)


Now that you have a URL, you can include this in your OBS browser source. 

**Step 3: Add browser source plugin**

In OBS add a new source to the Scene of your choosing. OBS studio has a few different source options, but choose Browser and proceed with adding browser source, using your deployed GitHub Pages URL (**username.github.io/beybot)**.  

![](https://paper-attachments.dropbox.com/s_202334A481577855209C92DA29E80CC6349876B8BAA86FB00EF2859B2EC0BDD6_1593994390643_Screenshot+2020-07-05+17.12.55.png)


*One thing to keep in mind, OBS will be using a cached version of the site at the moment you add the browser plugin. If you make updates, you will need to clear the “Refresh cache of current page” button (I spent a lot of time not knowing that existed).* 

![](https://paper-attachments.dropbox.com/s_202334A481577855209C92DA29E80CC6349876B8BAA86FB00EF2859B2EC0BDD6_1594017692929_Screenshot+2020-07-05+23.41.25.png)


**Step 4: Test in your chat by open your typing !yo in the chat.**

Ideally you will test this in your Twitch chat, but feel to stop by my chat and test this out. But if you must, I live stream myself contributing and triaging open-source project every Tuesday and Fridays so please say hi if you stop by.


https://www.twitch.tv/bdougieyo


Go ahead and type !yo in the chat while OBS is open and weep tears of joy, because that was hopefully easy. If it wasn’t let me know in the comments below. 

[gif of this happening]()

That is it. You are now equipped to extend for new commands for you and your chat to interact. 

## Examples in the wild

These chat interaction are basic, but if you want to see more examples of chat interactions, check out the following channels. 


- [Changethe baldbeardedbuilder's VScode theme](https://www.twitch.tv/baldbeardedbuilder/clip/TangibleKathishFriesRuleFive?filter=clips&range=7d&sort=time)
- [Shave Jason live on the air](https://www.twitch.tv/jlengstorf/clip/JollyBlushingMacaroniCoolCat?filter=clips&range=30d&sort=time)
- [Noopkats presenting new subscriber alert](https://www.twitch.tv/noopkat/clip/MoldyBitterTriangleWholeWheat?filter=clips&range=30d&sort=time) 

I hope this is a good start in getting you towards making the most complex chatbot interactions.


