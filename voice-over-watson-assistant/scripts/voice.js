//webkitURL is deprecated but nevertheless
URL = window.URL || window.webkitURL;
let gumStream;

let rec;

let input;

let AudioContext = window.AudioContext || window.webkitAudioContext;
let audioContext;

// Click on mic
let clickMic = document.getElementById("recordVoice");
clickMic.addEventListener("click", processVoice);

let flag = false;
let flagTrigger = false;
function processVoice() {
  flag = !flag;
  const filterColor = flag ? "invert(1)" : "grayscale(100%)";
  document.getElementById("recordVoice").style.filter = filterColor;
  if (flag) {
    startRecording();
  } else {
    flagTrigger = true;
    stopRecording();
  }
}

function startRecording() {
  let constraints = {
    audio: true,
    video: false,
  };

  audioContext = new AudioContext();

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {
      console.log(
        "getUserMedia() success, stream created, initializing Recorder.js ..."
      );

      gumStream = stream;

      input = audioContext.createMediaStreamSource(stream);

      rec = new Recorder(input, {
        numChannels: 1,
      });

      rec.record();
      console.log("Recording started");
    })
    .catch(function (err) {
      console.log(err);
    });
}

function stopRecording() {
  console.log("stopButton clicked");
  rec.stop(); //stop microphone access
  gumStream.getAudioTracks()[0].stop();
  //create the wav blob and pass it on to createDownloadLink
  rec.exportWAV(invokeSTT);
}

let recordVoice;
function invokeSTT(blob) {
  let file = new File([blob], new Date().toISOString() + ".wav");
  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Basic YXBpa2V5OklqLU5CVmpfc3Q4QmVTaHpodG0zLXZZZURkUUdEYXMxQmo5N3dsRWthSHJH"
  );
  myHeaders.append("Content-Type", "audio/wav");
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: file,
    redirect: "follow",
  };

  const baseUrl = new URL(
    "https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/0cfb5b5c-aad7-4de7-af40-39ba832dc3a4/v1/recognize?model=en-US_Multimedia&background_audio_suppression=0.3"
  );

  fetch(baseUrl.href, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      let output = JSON.parse(result);

      recordVoice = output.results[0].alternatives[0].transcript;
      recordVoice = recordVoice.replace("%HESITATION", "");
    })
    .catch((error) => console.log("error", error));
}

async function preReceiveHandler(event) {
  if (event.data.output.generic != null) {
    for (const element of event.data.output.generic) {
      await playAudio(element.text);
    }
  }
}

window.watsonAssistantChatOptions = {
  integrationID: "49e14ac1-2c12-4f5a-8c40-fe33a3b52c4d", // The ID of this integration.
  region: "us-south", // The region your integration is hosted in.
  serviceInstanceID: "784de2c7-96f2-467c-b510-500974e01e5d", // The ID of your service instance.
  onLoad: function (instance) {
    instance.on({ type: "receive", handler: preReceiveHandler });

    document
      .getElementById("recordVoice")
      .addEventListener("click", function () {
        if (flagTrigger) {
          flagTrigger = false;
          setTimeout(function () {
            const sendObject_input = {
              input: {
                message_type: "text",
                text: recordVoice,
              },
            };
            const sendOptions_input = {
              silent: false,
            };
            instance
              .send(sendObject_input, sendOptions_input)
              .catch(function () {
                console.error("This message did not send!");
                console.log("Speechsent!");
              });
          }, 5000);
        }
      });

    instance.render();
  },
};
setTimeout(function () {
  const t = document.createElement("script");
  t.src =
    "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
    (window.watsonAssistantChatOptions.clientVersion || "latest") +
    "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});

async function playAudio(text2speechContent) {
  let myHeaders = new Headers();
  var host = window.location.protocol + "//" + window.location.host;
  myHeaders.append(
    "Authorization",
    "Basic YXBpa2V5OmJLb3hzb1Vhd05IZF9hUW1LdVV3RTdUNF9aZW5qZExGWWxWS21LenhKMFU1"
  );
  //myHeaders.append("Access-Control-Allow-Origin", host);
 
  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const baseUrl = new URL(
    "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/bc169411-2396-4664-bc78-3368a70ca647/v1/synthesize"
  );
  baseUrl.searchParams.append("accept", "audio/mp3");
  baseUrl.searchParams.append("voice", "en-US_AllisonV3Voice");
  baseUrl.searchParams.append("text", text2speechContent);

  await fetch(baseUrl.href, requestOptions)
    .then((result) => {
      return playon(result);
    })

    .catch((error) => console.log("error", error));
}

function blobToFile(theBlob, fileName) {
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}

async function playon(result) {
  let file;
  await result.blob().then((data) => {
    file = blobToFile(data, "received.mp3");
  });
  return new Promise(function (resolve, reject) {
    let objectUrl = window.URL.createObjectURL(file);
    document.getElementById("log").innerHTML = "";
    document.getElementById("log").innerHTML +=
      '<audio id="audio" hidden crossOrigin="anonymous" controls src=' +
      objectUrl +
      ">";

    let audio = document.getElementById("audio");
    audio.load();
    audio.play();

    audio.onerror = reject;
    audio.onended = resolve;
  });
}
