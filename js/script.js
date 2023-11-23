// if ($(window).width() <= 780) {
let bloc5 = document.querySelector(".bloc5");
let bloc6 = document.querySelector(".bloc6");
let bloc7 = document.querySelector(".bloc7");
let bloc8 = document.querySelector(".bloc8");

document.querySelector(".view").addEventListener("click", function () {
  let less = document.querySelector(".less");
  let view_ = document.querySelector(".view");
  bloc5.style.display = "block"; //block = rend visible
  bloc6.style.display = "block";
  bloc7.style.display = "block";
  bloc8.style.display = "block";
  less.style.display = "flex";
  view_.style.display = "none";
});

document.querySelector(".less").addEventListener("click", function () {
  let less = document.querySelector(".less");
  let view_ = document.querySelector(".view");
  bloc5.style.display = "none"; //none = cache
  bloc6.style.display = "none";
  bloc7.style.display = "none";
  bloc8.style.display = "none";
  view_.style.display = "flex"; // flex = visible et permet d'aligner le texte + icon
  less.style.display = "none";
});

// } else {
// }
//////////Carousel////////////

// let currentIndex = 0;

// function showSlide(index) {
//   const slidesContainer = document.querySelector(".container_slides");
//   const totalSlides = slidesContainer.children.length;

//   if (index >= totalSlides) {
//     index = 0;
//   } else if (index < 0) {
//     index = totalSlides - 1;
//   }

//   const translateValue = -index * 100 + "%";
//   slidesContainer.style.transform = "translateX(" + translateValue + ")";
//   currentIndex = index;
// }

// document.getElementById("left-btn").addEventListener("click", function () {
//   showSlide(currentIndex - 1);
// });

// document.getElementById("right-btn").addEventListener("click", function () {
//   showSlide(currentIndex + 1);
// });

//////////////// Caroussel + Slide ////////////////
// const img = document.querySelector(.container_slides);
// let btn_gauche = document.querySelector(".left-btn");
// let btn_droite = document.querySelector(".right-btn");

// let box1 = document.querySelector(".box1");
// let box2 = document.querySelector(".box2");
// let box3 = document.querySelector(".box3");

// document.querySelector(".btn_box").addEventListener("click", function () {
//   let less1 = document.querySelector(".btn_box2");
//   let all = document.querySelector(".btn_box");

//   box3.style.display = "block";
//   less1.style.display = "flex";
//   all.style.display = "none";
// });

// document.querySelector(".btn_box2").addEventListener("click", function () {
//   let less1 = document.querySelector(".btn_box2");
//   let all = document.querySelector(".btn_box");

//   box3.style.display = "none";
//   less1.style.display = "flex !important";
//   all.style.display = "none";
// });
