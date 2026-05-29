
const video = document.getElementById("introVideo");

const popup = document.getElementById("truthPopup");



// --- Fullscreen automatique ---

document.addEventListener("click", () => {

  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }

}, { once: true });



// --- Empêcher pause ---

video.addEventListener("pause", () => {

  video.play();

  showTruthPopup();

});



// --- Empêcher skip ---

video.addEventListener("seeking", () => {

  video.currentTime = 0;

  showTruthPopup();

});



// --- Empêcher vitesse x2 etc ---

video.addEventListener("ratechange", () => {

  if (video.playbackRate !== 1) {

    video.playbackRate = 1;

    showTruthPopup();

  }

});



// --- Popup ministère de la vérité ---

function showTruthPopup() {

  popup.style.display = "flex";

  setTimeout(() => {

    popup.style.display = "none";

  }, 3000);

}



// --- Fin de vidéo ---

video.addEventListener("ended", () => {

  document.body.innerHTML = `

    <div style="
      width:100vw;
      height:100vh;
      background:black;
      color:#ffcc00;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      font-family:monospace;
      text-align:center;
    ">

      <h1 style="
        font-size:5rem;
        text-shadow:
          0 0 10px #ffcc00,
          0 0 20px #ffcc00;
      ">
        FOR SUPER EARTH
      </h1>

      <p style="
        margin-top:20px;
        font-size:1.5rem;
      ">
        Democracy has been preserved.
      </p>

    </div>
  `;

setTimeout(() => { window.location.href = "index.html"; }, 4000);

});
