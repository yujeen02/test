const changeFruit = function (type) {
  if (type === "사과") {
    document.querySelector("img").src = "./imgs/apple.jpeg";
  } else if (type === "바나나") {
    document.querySelector("img").src = "./imgs/banana.jpeg";
  } else if (type === "포도") {
    document.querySelector("img").src = "./imgs/grape.jpeg";
  } else {
    document.querySelector("img").src = "./imgs/pitch.jpeg";
  }
};
