const text =
  "ahhh the month of loveeee,february was such a good month bubba we did so much and we also accomplished so much too. we tackled school and sase together, we got to conviently spend valentines day in nyc together, nerc together, you kindly spent almost like 30 minutes in the rain and cold trying to dig out my car from the ice, we experienced our first and last double date with jae and caroline 😅, and we got matching build a bears emmy and earl. end of february and into early march we had our “fighting” moments hehe where we would square up on each other and that was so fun hehe so we will be running that back next year. we also had ur birthday dinner and i soft launchhhheddddd uuu and i loved how we got dressed up, we look so good tgt when we dress up and i love dressing up with you!! we made another platonic podcast with a roum tour, fortnite, and memories talk w some yummy tension too hehe. we had our little study sessions in stratton where we listened to music tgt and had privacyyy(that should be our spot i love doing work w u literally anywhere tho) and during our build a bear date you got me a smiskiiiiii awwww. i want to thank you for putting me first during this month. it meant so much to me especially towards the end bc i would always think about how ldr was coming so quickly and i really wanted to spend as much time w u as possible before we left each other for awhile. i also really wanted to highlight our nerc/valentine’s day memories. despite having such a stressful, tiring travel day, we made the most out of our little nyc date. even tho some things were really overstimulating and a lot to handle, you always were there for me and made sure that i was okay and i just love you so much for that. i had so much fun w u that night despite everything and you just made it so much more special. i loved walking around the city w u, i love when u do the sidewalk rule and i loved taking pictures of you bc ur such a good modellll mhmmm and getting the initial necklaces too meant so much to me, and them closing right afterwards was like it was meant to be for us to get them. thank you for every little thing you do in situations like these to make me feel safe. i feel safest when im with you and especially when we travel you just put all my anxiety at ease.to many more valentine’s days,amanda ";

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
      if (!breakInserted && typedText.endsWith("ahhh the month of loveeee,")) {
        typedText += "<br><br>"; // add break to the tracked text
        breakInserted = true;
      }
  
      if (!breakInserted && typedText.endsWith("all my anxiety at ease.")) {
        typedText += "<br><br>"; // add break to the tracked text
        breakInserted = true;
      }
  
      if (!breakInserted && typedText.endsWith("to many more valentine’s days,")) {
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
    fullText = fullText.replace("ahhh the month of loveeee,", "ahhh the month of loveeee,<br><br>");
    fullText = fullText.replace("all my anxiety at ease.", "all my anxiety at ease.<br><br>");
    fullText = fullText.replace("to many more valentine’s days,", "to many more valentine’s days,<br>");
  
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
    title.textContent = "february 2025";
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
  
