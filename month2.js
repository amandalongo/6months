const text =
  "hi handsome,its now december and i know we spent a lot of this tweaking out about finals but imma do another lil summary of everythinggg we did in december and then i will go and talk in depth about one of my fav memories from december. omg we made banana bread again at the beginning of december, we also watched cars together and i remember i was like falling asleep but it was so fun watching it in your roum, it was so cozy. another nonchalant frat - winter wonderland where we were tweaking out about ryan being really weird with grace and avoiding her at all costs, we had our lil boston trip to the sowa market, where we also got matcha and got matching rings and saw alex lap and chris son, and we also acted like rich people in prudentialll. omg there was exec photoshoot and our other crumbl trip where we made the video(s). then we had to go on winter break naurrrrr but we facetimed all the time, we tweaked out over all of the exec photos, played fortnite, slept on ft together, went to IKEA (which we should go again and actually play house tgt heheh) with all of these things in mind, i particularly enjoyed all of our facetime calls and sleeping on facetime together. i got so comfortable with you being apart of my day to day life, where you became an integral part of my day! especially seeing you at night because we would start having constant sleepovers and it all felt right. im really glad that we both agreed and felt comfortable doing these day to day things together and making time for each other in our daily routines. and i especially enjoy how this carried over into ldr / medium distance. our nightly facetimes together were always so fun and everything that we would do during winter break to make the distance not feel so difficult would always mean so much to me. i loved how we would do the song splanations, our core memories, send each other those long texts, locket, etc etc. everything we do for each other whether we are together or not, is always to keep that love and that spark alive. i love you so much for putting so much time and effort into these things and making the distance during this time so easy.mwuah mwuah thank you bubby,amanda";

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
      if (!breakInserted && typedText.endsWith("hi handsome,")) {
        typedText += "<br><br>"; // add break to the tracked text
        breakInserted = true;
      }
  
      if (!breakInserted && typedText.endsWith("this time so easy.")) {
        typedText += "<br><br>"; // add break to the tracked text
        breakInserted = true;
      }
  
      if (!breakInserted && typedText.endsWith("mwuah mwuah thank you bubby,")) {
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
    fullText = fullText.replace("hi handsome,", "hi handsome,<br><br>");
    fullText = fullText.replace("this time so easy.", "this time so easy.<br><br>");
    fullText = fullText.replace("mwuah mwuah thank you bubby,", "mwuah mwuah thank you bubby,<br>");
  
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
    title.textContent = "december 2024";
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
  