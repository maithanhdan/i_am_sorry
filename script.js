"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");


const messages = [
  "Không Bao Giờ",
  "Anh bicc lỗi rồi ạa",
  "Mong bé tha lỗi choo anhh :((",
  "Anhh saii rồi , anhh đáng trách ạ",
  "Bé đừng giận anhh nữa nhoo",
  "Anhhh iu bé nhắm nhunnn đóoooo",
  "Anhh xin lỗi bé nhiều lắmmmm 😭",
  "Bé ơi đừng bỏ anh mà đi mà 💔",
  "Anh sẽ thay đổi hết vì bé ạ",
  "Bé là tất cả của đời anh luôn ❤️",
  "Không có bé thì anh sống làm sao được",
  "Anh hứa sẽ yêu bé nhiều hơn nữa",
  "Bé cho anh cơ hội cuối cùng đi 🥺",
  "Anh không thể sống thiếu bé được",
  "Bé là ánh sáng của cuộc đời anh",
  "Xin bé đấy... anh cần bé lắm 😢",
];

const MAX_IMAGES = 5;


let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Anh iu bé ,Anh hứa hongg làm bé buồn nữa đouuu :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  // No maximum font size limit - button will grow infinitely!
  yesButton.style.fontSize = `${newFontSize}px`;

  // Also increase padding proportionally for better visual effect
  const currentPadding = parseFloat(computedStyle.getPropertyValue("padding-top"));
  const newPadding = currentPadding * 1.2;
  yesButton.style.padding = `${newPadding}px ${newPadding * 1.5}px`;
}

function generateMessage(noCount) {
  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
