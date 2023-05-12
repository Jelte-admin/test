let body = document.querySelector("body");
let hiddenContent = document.querySelector(".hidden-content");

let yes = document.querySelector(".yes");
let no = document.querySelector(".no");

let contentYes = document.querySelector(".content-yes");
let confirmYes = document.querySelector(".confirm-yes");
let contentNo = document.querySelector(".content-no");
let confirmNo = document.querySelector(".confirm-no");

function showContent() {
    hiddenContent.style.opacity = "1";

    setTimeout(function () {
        hiddenContent.style.opacity = "0";
    }, 30000);
}

body.onclick = showContent;

function showYes() {
    contentYes.style.display = "flex";
}

yes.onclick = showYes;

function hideYes() {
    contentYes.style.display = "none";
}

confirmYes.onclick = hideYes;

function showNo() {
    contentNo.style.display = "flex";
}

no.onclick = showNo;

function revisitYes() {
    contentNo.style.display = "none";
    contentYes.style.display = "flex";
}

confirmNo.onclick = revisitYes;