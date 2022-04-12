let choise = document.querySelectorAll(".choise");
let your_pick = document.querySelector(".your-pick");
let house_pick = document.querySelector(".house-pick");
let pick_sec = document.querySelector(".pick");
let win = document.querySelector(".win");
if (window.localStorage.length != 0) {
  win.innerHTML = window.localStorage.getItem("score");
}
let h3 = document.querySelector(".result");
let button = document.querySelector(".again");
let arr = ["paper", "rock", "scissors"];
let ran = arr[Math.floor(Math.random(0) * 3)];
choise.forEach((e) => {
  e.onclick = () => {
    e.parentElement.parentElement.style.display = "none";
    your_pick.innerHTML = e.cloneNode(true).innerHTML;
    your_pick.classList.add(e.classList[0]);
    your_pick.classList.add(e.classList[1]);
    house_pick.classList.add(e.classList[1]);
    pick_sec.style.display = "flex";
    setTimeout(() => {
      choise.forEach((a) => {
        if (a.classList.contains(ran)) {
          house_pick.innerHTML = a.innerHTML;
          house_pick.classList.add(ran);
          house_pick.classList.add("new");
          house_pick.classList.remove("house-pick");
        }
      });
      setTimeout(() => {
        if (house_pick.classList[1] === your_pick.classList[1]) {
          h3.innerHTML = "draw";
        } else {
          if (result(house_pick.classList[1], your_pick.classList[1])) {
            h3.innerHTML = "You Win";
            your_pick.classList.add("win2");
            win.innerHTML++;
            window.localStorage.setItem("score", win.innerHTML);
          } else {
            house_pick.classList.add("win2");
            h3.innerHTML = "You Lose";
            if (win.innerHTML > 0) win.innerHTML--;
            window.localStorage.setItem("score", win.innerHTML);
          }
        }
      }, 50);
    }, 1000);
  };
});

function result(home, guest) {
  if (guest === "rock" && home === "scissors") {
    return true;
  } else if (guest === "scissors" && home === "paper") {
    return true;
  } else if (guest === "paper" && home === "rock") {
    return true;
  } else {
    return false;
  }
}
let rules = document.querySelector(".rules");
let img = document.querySelector(".image");
rules.onclick = () => {
  img.classList.add("block");
  let close = document.querySelector(".image svg");
  close.onclick = () => {
    img.classList.remove("block");
  };
};
