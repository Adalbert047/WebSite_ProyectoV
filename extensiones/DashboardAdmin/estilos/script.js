document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");
    const menu = document.querySelector(".menus-container");

    menuBtn.addEventListener("click", function () {
        menu.style.display = menu.style.display = "block";
        menuBtn.style.display = menuBtn.style.display === "none" ? "block" : "none";
        closeBtn.style.display = closeBtn.style.display ="block";
    });

    closeBtn.addEventListener("click", function () {
        menu.style.display = "none";
        menuBtn.style.display = "block";
        closeBtn.style.display = "none";
    });
});