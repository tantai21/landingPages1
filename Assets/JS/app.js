window.onscroll = () => {
  //   loginForm.classList.remove("active");
  //   navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".headerr").classList.add("active");
  } else {
    document.querySelector(".headerr").classList.remove("active");
  }
};
window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".headerr").classList.add("active");
  } else {
    document.querySelector(".headerr").classList.remove("active");
  }
};
