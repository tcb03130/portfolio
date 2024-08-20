document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("myVideo");
  if (video) {
    video.setAttribute("preload", "auto");
  }
});

window.addEventListener("scroll", () => {
  const scrollToTop = document.querySelector(".scroll-to-top");
  if (scrollToTop) {
    scrollToTop.classList.toggle("show", window.scrollY > 200);
  }
});

document.querySelector(".scroll-to-top")?.addEventListener("click", (event) => {
  event.preventDefault();

  function scrollToTop() {
    let currentPosition = window.pageYOffset;
    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentPosition - currentPosition / 8);
    }
  }

  scrollToTop();
});

document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  if (cursor) {
    const mouseX = e.pageX + 10; // 커서 이미지의 x좌표
    const mouseY = e.pageY + 10; // 커서 이미지의 y좌표
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  }
});

function openImageInFullscreen(imageUrl) {
  const fullscreenDiv = document.getElementById("fullscreen-image");
  const fullscreenImg = document.getElementById("fullscreen-img");

  fullscreenImg.src = imageUrl;
  fullscreenDiv.style.display = "flex";

  fullscreenDiv.onclick = function () {
    fullscreenDiv.style.display = "none";
  };
}
