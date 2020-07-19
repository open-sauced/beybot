/* Config */
const twitchTvHandle = "bdougieYO";
const repoOwner = "sgrove";
const repoName = "blog";

/* Sound Effects */
const pewAudio = new Audio("horn.wav");
const magicChime = new Audio("Magic_Chime.mp3");

/* GIFs */
const beyGif = "https://media.giphy.com/media/VxkNDa92gcsRq/giphy.gif";
const welcomeGif = "https://media.giphy.com/media/l3V0doGbp2EDaLHJC/giphy.gif";
const pizzaGif = "https://media.giphy.com/media/3o6nUXaNE4wdhq8Foc/giphy.gif";

ComfyJS.Init(twitchTvHandle);
ComfyJS.onCommand = (user, command, message, flags, extra) => {
  if (flags.broadcaster && command == "test") {
    console.log("!test was typed in chat");
  }

  if (command == "yo") {
    console.log("!yo was typed in chat");
    new gifAlert(user, beyGif, pewAudio, command);
    setTimeout(removeGif, 5000);
  }

  if (command == "welcome") {
    console.log("!welcome was typed in the chat");
    new gifAlert(message, welcomeGif, magicChime, command);
    setTimeout(removeGif, 5000);
  }

  if (flags.broadcaster && command == "pizza") {
    console.log("!pizza was typed in chat");
    new gifAlert(message, pizzaGif, magicChime, command);
    setTimeout(removeGif, 5000);
  }
};

ComfyJS.onChat = (user, message, flags, self, extra) => {
  console.log(user + ":", message);
};

const generateTitle = {
  yo: " is hype!",
  welcome: " needs a welcome!",
  pizza: " needed a pizza party!",
  starred: " starred us, like we knew they would!",
};

function gifAlert(user, gif, audio, type) {
  removeGif(); // ensure that any previous gif is removed

  const container = document.createElement("div");

  const img = new Image();
  img.src = gif;

  const title = document.createElement("h1");
  title.innerHTML = user + generateTitle[type];

  const content = document.getElementById("content");
  content.appendChild(title);

  container.appendChild(img);
  content.appendChild(container);
  audio.play();
  setTimeout(removeGif, 5000);
}

function removeGif() {
  const contentElement = document.getElementById("content");
  if (contentElement.firstElementChild) {
    contentElement.firstElementChild.remove();
  }
}
