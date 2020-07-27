
![beybot](https://user-images.githubusercontent.com/5713670/86497808-eb7e5f00-bd37-11ea-8cc4-4765e91d2065.png)

This is a twitch bot built on the [ComfyJS](https://github.com/instafluff/ComfyJS) (a wrapper around [tmi.js](https://github.com/tmijs/tmi.js)).

# How can I implement this in my chat?

Before I jump into the code, I need to share some of the streaming basics.

## OBS Studio

[OBS Studio](https://obsproject.com/) is a free and open-source software for live-streaming and screen recording. This walk-through will show OBS Studio and consult your platform's documentation or community on how to add browser source plugins.

**Browser Source plugins**
When you set up an out of the box alert or chat system, like [Streamlabs](https://streamlabs.com/), they require you to add something called a Browser Source plugin. To do this, you add the URL pointing to the plugin, provided in the Streamlabs dashboard. This is the backbone of most streaming interactions on Twitch. Browser source plugins are HTML, CSS, and some JavaScript—so basically webpages. 

If you are looking to code live on stream, you probably have these skills to make chat alerts.  

## The happy path with ComfyJS

ComfyJS is maintained by [Instafluff](https://www.twitch.tv/instafluff), which you should give a follow for comfiest live code stream on Twitch. 

Everything you need to make a bot run lives in my open-sauced/beybot repo, linked below. This chatbot template contains no JavaScript framework code in the hopes that anyone live coding stream could apply their own desired flavor to it. If you are interested, I would love to see a post where someones take this bot to the next level with Vue, React, or even Svelte.

If you would like to see this chat command working live on the air here is a clip of me interacting with the basic `!yo` command.

![!yo in the wild](https://user-images.githubusercontent.com/5713670/88496209-4db23480-cf71-11ea-83c9-8c9b9fbc82d8.gif)

**Step 1: In your fork replace the Twitch channel name.**

In the [index.js](https://github.com/open-sauced/beybot/blob/HEAD/index.js#L2) of the beybot repo, you will need to replace my handle, "bdougieYO" with your Twitch handle. 

The name is the thing you will need to change:


    ComfyJS.Init( "bdougieYO" );


If you do not have a Twitch account but would like to test this out, you can test this using my chat. I live-stream myself contributing and triaging open-source projects every Tuesday and Friday.

[bdougie.live](https://bdougie.live/)

[![bdougie twitch account](https://user-images.githubusercontent.com/20134767/86605791-016c6980-bf5c-11ea-8250-2c03bb1f3318.png)](https://www.twitch.tv/bdougieyo)

**Step 2: Deploy using GitHub Pages**

If you are unfamiliar, GitHub provides a low effort way for you to host simple HTML files as a webpage using their github.io domain. You will need to go to your repo settings to set up a GitHub Page for your forked repo. You can learn more about GitHub Pages at pages.github.com.

![](https://paper-attachments.dropbox.com/s_202334A481577855209C92DA29E80CC6349876B8BAA86FB00EF2859B2EC0BDD6_1594016982976_Screenshot+2020-07-05+23.27.44.png)

Your set up for GitHub Pages should like the above and provide a ✅ when ready to view.  If this site requires more to build than a single HTML file, you could also check the deploy environments page to check the status of the deploy.  These settings are found on the sidebar of your repo's home page.

![](https://paper-attachments.dropbox.com/s_202334A481577855209C92DA29E80CC6349876B8BAA86FB00EF2859B2EC0BDD6_1594017161655_Screenshot+2020-07-05+23.31.52.png)

*When viewing the live site, it will be blank. You can open the web console and see the commands printed there, but keep in mind that the page has intentionally left blank to hide and show the Beyonceé gifs.* 

Now that you have a URL, you can include this in your OBS browser source. 

**Step 3: Add browser source plugin**

In OBS add a new source to the Scene of your choosing. OBS Studio has a few different source options, but choose Browser and proceed with adding browser source, using your deployed GitHub Pages URL (**username.github.io/beybot)**.  

![](https://paper-attachments.dropbox.com/s_202334A481577855209C92DA29E80CC6349876B8BAA86FB00EF2859B2EC0BDD6_1593994390643_Screenshot+2020-07-05+17.12.55.png)

*One thing to keep in mind, OBS will be using a cached version of the site at the moment you add the browser plugin. If you make updates, you will need to clear the "Refresh cache of current page" button (I spent a lot of time not knowing that existed).* 

![](https://paper-attachments.dropbox.com/s_202334A481577855209C92DA29E80CC6349876B8BAA86FB00EF2859B2EC0BDD6_1594017692929_Screenshot+2020-07-05+23.41.25.png)

**Step 4: Test in your chat by open your typing !yo in the chat.**

Ideally, you will test this in your Twitch chat, but if you made it this far without having your own my chat, feel free to stop by and test it out. 

Go ahead and type !yo in the chat while OBS is open and weep tears of joy, because that was hopefully easy if it wasn't let me know in the comments below. 

That is it. You can now extend this bot with new commands for you and your chat to interact. 

## Examples in the wild

These chat interactions are basic, but if you want to see more examples of chat interactions, check out the following channels. 


- [Change the baldbeardedbuilder's VScode theme.](https://www.twitch.tv/baldbeardedbuilder/clip/TangibleKathishFriesRuleFive?filter=clips&range=7d&sort=time)
- [Shave jlengstorf live on the air.](https://www.twitch.tv/jlengstorf/clip/JollyBlushingMacaroniCoolCat?filter=clips&range=30d&sort=time)
- [Noopkat's new subscriber alert.](https://www.twitch.tv/noopkat/clip/MoldyBitterTriangleWholeWheat?filter=clips&range=30d&sort=time) 

I hope this is a good start in getting you towards making the most complex chatbot interactions.
