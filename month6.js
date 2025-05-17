const text =
  "our first full month of ldrrhi bubba! im here to talk about aprilllllll aww the first full month of ldr and we grew so much independently in this month and i just cherished all of our calls together. i went about my day to day life always thinking about you whenever i did anything. whether it was sase or when i went out or when i wake up in the morning and go to sleep at night i always just thought about you. i missed you so much this month because it was OUR month, banquet month, spring and all of our original memories month and ugh i just wished you were there with me. but more importantly, i was so privileged to see you grow and to see you thrive in copenhagen. it was so fun getting to support you throughout ur trip and iqp and also just see all the amazing things you did from biking to clubbing and taking trips with your friends. i also just appreciated how whenever we had conversations, they were so productive and i always felt like we grew as a couple when we talked things through. and breakaway tickettsssss im so excited to get to spend ur senior year with you. i want to make sure its as memorable as possible and thats one of the things that i want to experience with you, so i am so happy and excited that i bought us those tickets to go bc ik its gonna be so fun. we get to be rave coupleee mhmmmm. i’m also so glad we decided to talk about the future with you parents and deciding to tell them the truth soon rather than sit in the lie. i know that doing this is going be a lot for the both of us but we already proved we can tackle any situation that comes our way as long as we do it together. so thank you for doing this and i will forever be grateful for that. this concludesss all my letters bubby and i can’t wait to keep making memories as the months go on. i love you forever and ever bubby i can’t wait to see you.yours forever,amanda";

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
      if (!breakInserted && typedText.endsWith("our first full month of ldrr")) {
        typedText += "<br><br>"; // add break to the tracked text
        breakInserted = true;
      }
  
      if (!breakInserted && typedText.endsWith("i love you forever and ever bubby i can’t wait to see you.")) {
        typedText += "<br><br>"; // add break to the tracked text
        breakInserted = true;
      }
  
      if (!breakInserted && typedText.endsWith("yours forever,")) {
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
    fullText = fullText.replace("our first full month of ldrr", "our first full month of ldrr<br><br>");
    fullText = fullText.replace("i love you forever and ever bubby i can’t wait to see you.", "i love you forever and ever bubby i can’t wait to see you.<br><br>");
    fullText = fullText.replace("yours forever,", "yours forever,<br>");
  
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
    title.textContent = "april 2025";
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
  