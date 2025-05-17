const text =
  "the month we had to start ldrrrmarch bubba! the month of finals, leaving each other before we start ldr and you meeting my parents and my familyyyy. we started the month out with kaven’s which was boring but we made it fun bc we were tgt obvvv and we started fighting heheheh, we spent days studying and i started missing you already bc the term was coming to an end so quick. i loved whenever we would study together, we would sit next to each other and whenever you would take breaks from typing to put ur hand on my thigh or just let me know that you are there with me was so sweet and you just know how to comfort me and utilize physical touch to make me feel so goodddd. we spent time at sever, you got rlly drunk having fun with your friends and i took care of you (which i am always happy to do bubby, i’m always gonna be there to make sure u are okayyyy), we made our last crumbl video and that was soooo fun tooooo, we grinded out tik toks together and doing the pillow thing was so much fun, and then when we went to go to trader joe’s where you got me AND my mom flowers 😚 you meeting my parents and my family was so special bubby i lit up after you left and everyone who met you said you were so sweet and a keeper. it meant the world to me to just get so much approval from my family about u and i knew they were gonna love you heheh. but then ldr starteddd and bubba i am so grateful to have u to do ldr w. we made every moment we got to call and text each other so special and we found so many ways to just keep the spark alive and to continue to put in just as much effort as we do when we r together irl. you watched me go through a tough few weeks with adjusting to soft eng and sase pres and all of that, but i also got to watch you flourish in a new country. anddd this was the month that we had somber sever and despite me getting too drunk and throwing up for the first time in years, i loved how the party was framed around you. you have such an amazing support system and you have so many ppl who respect you and love you. and i’m so glad i get to be one of those people. and i thought it was so sweet (not in the moment) that i was balling over u bc i missed u so much, but not only that, but how everyone who noticed came up to me and comforted me and reassured me that you will be back (shoutout mahit) im just so grateful to have you.loveeeee,amandaaa ";

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
      if (!breakInserted && typedText.endsWith("the month we had to start ldrrr")) {
        typedText += "<br><br>"; // add break to the tracked text
        breakInserted = true;
      }
  
      if (!breakInserted && typedText.endsWith("im just so grateful to have you.")) {
        typedText += "<br><br>"; // add break to the tracked text
        breakInserted = true;
      }
  
      if (!breakInserted && typedText.endsWith("loveeeee,")) {
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
    fullText = fullText.replace("the month we had to start ldrrr", "the month we had to start ldrrr<br><br>");
    fullText = fullText.replace("im just so grateful to have you.", "im just so grateful to have you.<br><br>");
    fullText = fullText.replace("loveeeee,", "loveeeee,<br>");
  
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
    title.textContent = "march 2025";
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
  