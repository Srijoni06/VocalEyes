document.getElementById('speakBtn').onclick = function () {
  const message = document.getElementById('message').value.trim();
  const emotion = document.getElementById('emotion').value;

  if (!message) {
    alert("Please enter a message to speak!");
    return;
  }

  const utter = new SpeechSynthesisUtterance(message);

  switch (emotion) {
    case 'Happy':
      utter.pitch = 1.5;
      utter.rate = 1.2;
      utter.volume = 1;
      break;
    case 'Sad':
      utter.pitch = 0.8;
      utter.rate = 0.9;
      utter.volume = 0.8;
      break;
    case 'Angry':
      utter.pitch = 1.1;
      utter.rate = 1.4;
      utter.volume = 1;
      break;
    case 'Surprised':
      utter.pitch = 1.8;
      utter.rate = 1.3;
      utter.volume = 1;
      break;
    case 'Nervous':
      utter.pitch = 1.3;
      utter.rate = 1.5;
      utter.volume = 0.9;
      break;
    case 'Fear':
      utter.pitch = 1.3;
      utter.rate = 1;
      utter.volume = 0.7;
      break;
    case 'Disgust':
      utter.pitch = 0.7;
      utter.rate = 0.8;
      utter.volume = 0.9;
      break;
    default:
      utter.pitch = 1;
      utter.rate = 1;
      utter.volume = 1;
  }

  window.speechSynthesis.cancel(); // shut up the last guy
  window.speechSynthesis.speak(utter); // and slay with the new one 😤
};
