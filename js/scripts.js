/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/

// --- Easter Egg DOOM : taper "1993" sur n'importe quelle page ---
let clickCount = 0;

document.getElementById("profilePic").addEventListener("click", () => {

  clickCount++;

  if (clickCount >= 10) {
    activateVirusScan();
    clickCount = 0;
  }

});

function activateVirusScan() {

  const overlay = document.createElement("div");

  overlay.innerHTML = `
    <div id="virusBox">
      <h1>⚠ VIRUS DETECTE ⚠</h1>
      <p>Scan du système de fichier...</p>
      <div id="bar">
        <div id="En cours..."></div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  Object.assign(overlay.style, {
    position: "fixed",
    inset: "0",
    background: "black",
    color: "lime",
    zIndex: "999999",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "monospace"
  });

  const progress = overlay.querySelector("#progress");

  Object.assign(progress.style, {
    width: "0%",
    height: "100%",
    background: "lime"
  });

  const bar = overlay.querySelector("#bar");

  Object.assign(bar.style, {
    width: "400px",
    height: "30px",
    border: "2px solid lime"
  });

  let percent = 0;

  const interval = setInterval(() => {

    percent += Math.random() * 15;

    progress.style.width = percent + "%";

    if (percent >= 100) {

      clearInterval(interval);

      overlay.innerHTML = `
        <h1 style="color:red">
          Je vous ai bien eu 😄
        </h1>
      `;

      setTimeout(() => {
        overlay.remove();
      }, 2000);
    }

  }, 300);
}

function launchHellbomb() {

  window.open(
    "Engagez-Vous.html",
    "_blank"
  );

}


let sequence = [];

const hellbombCode = [
  "ArrowUp",
  "ArrowRight",
  "ArrowDown",
  "ArrowDown",
  "ArrowDown"
];

document.addEventListener("keydown", (e) => {

  sequence.push(e.key);

  if (sequence.length > hellbombCode.length) {
    sequence.shift();
  }

  if (
    JSON.stringify(sequence) ===
    JSON.stringify(hellbombCode)
  ) {

    launchHellbomb();

    sequence = [];
  }

});

