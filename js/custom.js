const firstSection = document.querySelector("#firstSection");
const secondSection = document.querySelector("#secondSection");
const thirdSection = document.querySelector("#thirdSection");

const firstScroll = document.querySelector(".scroll");
const secondScroll = document.querySelector(".scroll2");
const thirdScroll = document.querySelector(".scroll3");

window.onscroll = function () {
  let check = firstSection.getBoundingClientRect().top;
  if (-check < firstSection.getBoundingClientRect().height - 10) {
    firstScroll.style.height = `${
      (-check / firstSection.getBoundingClientRect().height) * 20
    }px`;
  }
  console.log(check, firstSection.getBoundingClientRect().height);

  let check2 = secondSection.getBoundingClientRect().top;
  if (-check2 < secondSection.getBoundingClientRect().height - 10) {
    secondScroll.style.height = `${
      (-check2 / secondSection.getBoundingClientRect().height) * 20
    }px`;
  }
  console.log(check2, secondSection.getBoundingClientRect().height);

  let check3 = thirdSection.getBoundingClientRect().top;
  if (-check3 < thirdSection.getBoundingClientRect().height - 10) {
    thirdScroll.style.height = `${
      (-check3 / thirdSection.getBoundingClientRect().height) * 20
    }px`;
  }
  console.log(check3, thirdSection.getBoundingClientRect().height);
};
