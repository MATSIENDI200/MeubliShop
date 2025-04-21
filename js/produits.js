document.addEventListener("DOMContentLoaded", function () {
  const likeBtns = document.querySelectorAll(".like-btn");

  likeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("liked");
      const liked = btn.getAttribute("data-liked") === "true";
      btn.setAttribute("data-liked", !liked);
    });
  });
});