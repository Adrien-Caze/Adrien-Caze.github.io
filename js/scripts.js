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

let typedSequence = '';
const SECRET_CODE = '1993';
let doomLoaded = false;

document.addEventListener('keydown', function(e) {
  if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

  typedSequence += e.key;

  if (typedSequence.length > SECRET_CODE.length) {
    typedSequence = typedSequence.slice(-SECRET_CODE.length);
  }

  if (typedSequence === SECRET_CODE) {
    typedSequence = '';
    openDoom();
  }

  if (e.key === 'Escape') {
    closeDoom();
  }
});

function openDoom() {
  const modal = document.getElementById('doomModal');
  if (!modal) return;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  if (!doomLoaded) {
    doomLoaded = true;
    Dos(document.getElementById('doomCanvas'), {
      wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js",
    }).ready((fs, main) => {
      fs.extract("assets/doom.zip").then(() => {
       main([
        "-c",
        "cd DOOM",
        "-c",
        "DOOM.EXE"
]);
    });
    });
  }
}

function closeDoom() {
  const modal = document.getElementById('doomModal');
  if (!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = '';
}