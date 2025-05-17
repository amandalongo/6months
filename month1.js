const text =
  "hi bubby!lets take a lil trip down memory lane to november! many great memories in this month with us because ofc this is our anniversary month! i know we talked about alot of november in our memories, but we honestly did so so many things in november. im gonna summarize them all and then i will tell you an overall favorite MOMENT and im gonna make it hard on myself and pick a specific memory that will always come to mind for november. so yes, this was the month where we were fresh outta halloweekend, vibes were a lil sus and i know we both enjoyed spending time with each other because once you asked me to make banana bread with you i already knew this wasn’t gonna just plateau at being just friends. we made lovely banana bread, which btw was very date esque hang out (we arent slick this was literally so date coded you cant tell me otherwise holy shit, you literally planned our whole night and we did so many things) and then followed that up with our thrifitng hangout, where we always prolonged our hangouts more than they needed to be for platonic friends. then there was my lore dump yes, then speed run into you telling me you liked me. i cant wait to sit in those red chairs with you again next year, this is gonna be something we are going to be doing all the time this year btw. we had elections, we made it official, you told me you loved me and shortly after, i said it back, then our first kiss and sleepover, into us quickly getting more and more comfortable with each other and the love really starting to bloom. then our first date and the first time ive received flowers and an extremely heartfelt card. then our super cute date at the light garden! oh and ofc, sase stands up memories, theta (and being hella nonchalant) and the first time we had to be apart for thanksgiving. but with all of those extremely unforgettable memories, i want to highlight our first kiss again. maybe im just craving u rn but im particularly thinking about how special and amazing this moment was. i felt so connected with you in this moment and when we exchanged a longing look before you kissed me honestly made the kiss so much more special. our first kiss will always be so special to me because of the way it made me feel so safe and so at home. it just felt right. but yes ofc all of the other memories will be just as memorable to me but i wanna give our first kiss some love. and i didnt ever tell you this but when we first kissed i was scared it was going to be really awkward not just because i knew it was ur first kiss, but bc i felt like it was mine too and i was so scared i was gonna mess up or do something weird LOL. but may i say, omg when we kissed it was so natural and it was like it was meant to be (bc it was) so yeah quick glaze but ur such a good kisser and you have been from the start so ugh i love you for that thank yew. onto december now bubba!kisses for you,amanda ";

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
      if (!breakInserted && typedText.endsWith("hi bubby!")) {
        typedText += "<br><br>"; // add break to the tracked text
        breakInserted = true;
      }
  
      if (!breakInserted && typedText.endsWith("onto december now bubba!")) {
        typedText += "<br><br>"; // add break to the tracked text
        breakInserted = true;
      }
  
      if (!breakInserted && typedText.endsWith("kisses for you,")) {
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
    fullText = fullText.replace("hi bubby!", "hi bubby!<br><br>");
    fullText = fullText.replace("onto december now bubba!", "onto december now bubba!<br><br>");
    fullText = fullText.replace("kisses for you,", "kisses for you,<br>");
  
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
    title.textContent = "november 2024";
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
  