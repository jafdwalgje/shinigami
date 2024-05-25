let switchMode = document.getElementById("theme-switch");

switchMode.onclick = function () {
    let theme = document .getElementById("theme") ;

    if (theme.getAttribute("href") == "code/style.css") {
        theme.href = "code/style-dark.css";

    } else {
        theme.href = "code/style.css";
    }
}