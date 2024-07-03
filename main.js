const btns = document.querySelectorAll("[data-key]");
let voice = new Audio("./sounds/01_sounds_219069__annabloom__click1.wav");

let keysCode = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", " "];

let shiftKey = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', "Enter", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", " "];

btns.forEach(btn => {
  btn.addEventListener("click", () => handleBtnClick(btn.getAttribute("data-key")))
});

addEventListener("keypress", (e) => handleBtnClick(e.key));

function handleBtnClick(key) {
  let myKey;
  if (keysCode.includes(key)) {
    myKey = key;
  } else {
    for (let i = 0; i < shiftKey.length; i++) {
      if (shiftKey[i] == key) {
        myKey = keysCode[i];
        break;
      }
    }
  }
  console.log(myKey);
  voice.play();
  let targetElement = [...btns].filter(btn => btn.getAttribute("data-key") == myKey)[0]
  targetElement.classList.add("click");
  setTimeout(_ => targetElement.classList.remove("click"), 100);
};

addEventListener("load", () => document.getElementById("result").focus());
