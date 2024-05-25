let switchMode = document.getElementById("theme-switch");

switchMode.onclick = function () {
    let theme = document .getElementById("theme") ;

    if (theme.getAttribute("href") == "../style.css") {
        theme.href = "../style-dark.css";

    } else {
        theme.href = "../style.css";
    }
}