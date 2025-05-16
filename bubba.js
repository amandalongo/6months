const text =
  "dear chris,hi bubba happy 6 months oh my god! i would say i can't believe it but i would be lying if i did.  ";

const paragraph = Array.from(text);
let i = 0;

let typedText = "";
let breakInserted = false;

function dashOut(arr) {
  if (i < arr.length) {
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

    i++;
    setTimeout(() => dashOut(arr), interval(currentChar));
  }
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
