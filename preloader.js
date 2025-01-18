// preloader
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.pointerEvents = "none";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  });
  
  