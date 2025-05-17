const text =
  "dear chris,hi bubba happy 6 months oh my god! i would say i can't believe it but i would be lying if i did. and our journey all started because of senior banquet. i cant believe that this one decision to apply to senior banquet was going to flourish into so many opportunities, but more importantly, meeting the love of my life. i will forever be grateful that we met on february 7th. even though our love for each other didnt come around until later on, i always enjoyed getting to know you slowly and to have you in my life! the moments that we had during banquet (the flower moment), volleyball chris, magnetic, thrifting, making banana bread, halloween, talking to you over the summer about your trip to the phillipines, our first crumbl video, our days on the quad and my first gompei pic w you, all have a special place in my heart and these will always be some of my favorite memories of freshman, into sophomore year. but besides all that, these past 6 months have been so incredibly memorable, all because i had you by my side throughout all of it. you watched me grow this year in ways that i couldnt have done without your support. from sase, to tackling our classes together, to us spending d term apart, i watched myself grow as well as you grow too. and more importantly i watched us grow together as a couple. your gentle love for me and everything you have ever done for me has made me the happiest girl in the world. my love for you is so strong bubba and you are the one who showed me how much love i have to give and im so lucky to be able to give it all to you. im so grateful to have met my other half and soulmate. i just want to thank you for being such an amazing person for me. thank you for all of your patience, thank you for being my #1 fan, thank you for your gentle touch, thank you for comforting me on my tough days, thank you for always making time for me, thank you for making me laugh and smile more than i ever have, thank you for always opening the door for me, thank you for all of the flowers, thank you for navigating me through cities when we go out, thank you for every kind word you say, thank you for the small touches in public, thank you for sitting next to me so we can be closer, thank you for never judging me, thank you for comforting me when i cry, thank you for making distance so easy, thank you for making me food when i havent eaten, thank you for sharing your interests with me, thank you for our deep conversations, thank you for loving me so deeply, you have the kindest soul and i will forever admire you for being you. i would go on and on and ON my love, but i want you to read the rest of my letters! each letter represents a month (not including may because this month isnt over yet!) and each letter will have one of my favorite memories from that month, or multiple depending on how many things i want to talk about heheh (since every memory with you is my favorite). enjoy my love, thank you for coming into my life and i cant wait to experience the rest of my life with you. cheers to us bubby mwuah 😚 i love you forever and always, amanda ";

const paragraph = Array.from(text);
let i = 0;

let typedText = "";
let breakInserted = false;

function dashOut(arr) {
  if (i < arr.length && !isFastForwarding) {

    const currentChar = arr[i];
    const target = document.querySelector(".letterBody");

    typedText += currentChar;

    // Normal case: append letter
    target.innerHTML = typedText;

    // Insert line break exactly once
    if (!breakInserted && typedText.endsWith("dear chris,")) {
      typedText += "<br><br>"; // add break to the tracked text
      breakInserted = true;
    }

    if (!breakInserted && typedText.endsWith("😚")) {
      typedText += "<br><br>"; // add break to the tracked text
      breakInserted = true;
    }

    if (!breakInserted && typedText.endsWith("i love you forever and always,")) {
      typedText += "<br>"; // add break to the tracked text
      breakInserted = true;
    }

    i++;
    setTimeout(() => dashOut(arr), interval(currentChar));
  }
}

let isFastForwarding = false;

function fastForward() {
  isFastForwarding = true;
  const target = document.querySelector(".letterBody");

  // Add line breaks at specific places before rendering all at once
  let fullText = text;
  fullText = fullText.replace("dear chris,", "dear chris,<br><br>");
  fullText = fullText.replace("😚", "😚<br><br>");
  fullText = fullText.replace("i love you forever and always,", "i love you forever and always,<br>");

  target.innerHTML = fullText;
}


function interval(letter) {
  if ([";", ".", ","].includes(letter)) {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  const container = document.querySelector(".textCont");
  container.innerHTML = ""; // clear previous content

  // Create and style the title
  const title = document.createElement("div");
  title.textContent = "I love you";
  title.style.fontFamily = "Megrim";
  title.style.fontSize = "2rem";
  title.style.fontWeight = "bold";
  title.style.textAlign = "center";
  title.style.color = "#091540";
  title.style.letterSpacing = "1px";
  title.style.textTransform = "uppercase";
  title.style.paddingBottom = "10px";
  title.style.marginBottom = "20px";

  // Create a new div for the animated text
  const letter = document.createElement("div");
  letter.classList.add("letterBody");
  letter.style.whiteSpace = "pre-wrap";

  // Append both elements
  container.appendChild(title);
  container.appendChild(letter);

  // Begin typing
  dashOut(paragraph);
}


document.addEventListener("DOMContentLoaded", () => {
  startFromBegin();
});
