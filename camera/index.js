const API_KEY = "g9Tc5Eh1F1ZXp90A39StwzgjTulvjFSC";
const URL = "https://upload.giphy.com/v1/gifs";
const video = document.getElementById("video");
let recorder;
const recordButton = document.getElementById("record");
const stopButton = document.getElementById("stop");

function getStreamAndDisplay() {
  navigator.mediaDevices
    .getUserMedia({
      audio: false,
      video: {
        height: { max: 480 },
      },
    })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
      recorder = RecordRTC(stream, {
        type: "gif",
        frameRate: 1,
        quality: 10,
        width: 360,
        height: 240,
        onGifRecordingStarted() {
          console.log("started");
        },
      });
    });
}

getStreamAndDisplay();

recordButton.addEventListener("click", () => recorder.startRecording());
stopButton.addEventListener("click", () => {
  recorder.stopRecording(async (recording) => {
    console.log("grabacion: ", recording);

    const form = new FormData();
    form.append("file", recorder.getBlob(), "myGif.gif");
    try {
      await fetch(`${URL}?api_key=${API_KEY}`, { method: "POST", body: form });
    } catch (error) {
      console.log("algo salio mal: ", error);
    }
  });
});
