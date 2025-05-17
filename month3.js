const text =
  "its ur birthday month pretty boy,hi bubbaaaaa this month was so fun solely because i got to celebrate your 21st bday with you! even though i couldnt see you on the 13th, i got to celebrate with you on the 14th! i wanted to do something nice for your 21st and do a lil surprise for you! i honestly had this idea for awhile and i slowly accumulated all of the gifts for you as winter break went on. it was so fun sneaking into your place and your roum and setting everything up and i really enjoyed surprising you! i just loved spoiling you and giving you everything you deserved on that day. i wanted to give you all of my love and it was so fun watching you open all of your gifts too i am so incredibly excited to celebrate many more birthdays with you bubba. wait imma also do a full recap of january memories tooooo. the lil recaps are fun it’s so cool to see how much stuff we did in a month!! more facetimessss, i got to meet ur brother and monicaaaa i was so nervous but was so happy to meet them, i felt so welcomed by them and it was so nice to meet them, and ofc i met the famous kaia and kenji and they were the cutest things ever. that was the first time i got to meet corgis and pet them and play w them!!! and when i got called auntie by monica awww i felt alr welcome into your family. our super fun boston trip and all the pictures (the elevator one) and things that we were able to do together and i remember our deep talks and u just listening to me open up at the end of the night just meant so much to me. you getting ur wisdom teef out and then ofc ur birthdayyyy i wished i could celebrate w you and go out w u but im not 21😔😔 there was theta frat again and when we danced together without having to care abt being nonchalant (i need to dance with you again asap pls) we decorated your roummm and ur at home vball tournament!!!! i loved making the sign for you bubba and i loveeeee watching u play, i might be a silent fan but i always love cheering you on. omg and ofc our self care vloggggggg ugh that was sooo fun and i can’t wait to make more videos w u (and our kissing mmmm). i also think this memory was in december, but i loved sharing my childhood with you and hearing about yours too. one of my favorite things is getting to learn more about your childhood and how you grew up and seeing you as a kid was so cute (we would’ve been locked from day one if we knew each other as little ones)love,amanda";

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
      if (!breakInserted && typedText.endsWith("its ur birthday month pretty boy,")) {
        typedText += "<br><br>"; // add break to the tracked text
        breakInserted = true;
      }
  
      if (!breakInserted && typedText.endsWith("other as little ones)")) {
        typedText += "<br><br>"; // add break to the tracked text
        breakInserted = true;
      }
  
      if (!breakInserted && typedText.endsWith("love,")) {
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
    fullText = fullText.replace("its ur birthday month pretty boy,", "its ur birthday month pretty boy,<br><br>");
    fullText = fullText.replace("other as little ones)", "other as little ones)<br><br>");
    fullText = fullText.replace("love,", "love,<br>");
  
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
    title.textContent = "january 2025";
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
  