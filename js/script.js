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

// function toggleImage(imageId, button) {
//   var img = document.getElementById(imageId);

//   if (img.style.display === "none" || img.style.display === "") {
//     img.style.display = "block"; // 이미지 보이기
//     button.textContent = "이미지 숨기기"; // 버튼 텍스트 변경
//   } else {
//     img.style.display = "none"; // 이미지 숨기기
//     button.textContent = "이미지 보이기"; // 버튼 텍스트 변경
//   }
// }
function toggleImage(imageId, button) {
  var img = document.getElementById(imageId);

  if (img.style.display === "none" || img.style.display === "") {
    img.style.display = "block"; // 이미지 보이기
    button.textContent = "이미지 숨기기"; // 버튼 텍스트 변경

    // 새 창에서 이미지 열기
    var newWindow = window.open(img.src, "_blank", "width=800,height=600");

    // 새 창이 닫히면 버튼 텍스트를 "이미지 보이기"로 변경
    newWindow.onbeforeunload = function () {
      img.style.display = "none"; // 이미지 숨기기
      button.textContent = "이미지 보이기"; // 버튼 텍스트 변경
    };
  } else {
    img.style.display = "none"; // 이미지 숨기기
    button.textContent = "이미지 보이기"; // 버튼 텍스트 변경
  }
}
