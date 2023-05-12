let hiddencontentLeft = document.querySelector(".hidden-content-left");
let hiddencontentRight = document.querySelector(".hidden-content-right");

let yesLeft = document.querySelector(".yes-left");
let noLeft = document.querySelector(".no-left");
let contentyesLeft = document.querySelector(".content-yes-left");
let contentnoLeft = document.querySelector(".content-no-left");
let confirmyesLeft = document.querySelector(".confirm-yes-left");
let confirmnoLeft = document.querySelector(".confirm-no-left");

let yesRight = document.querySelector(".yes-right");
let noRight = document.querySelector(".no-right");
let contentyesRight = document.querySelector(".content-yes-right");
let contentnoRight = document.querySelector(".content-no-right");
let confirmyesRight = document.querySelector(".confirm-yes-right");
let confirmnoRight = document.querySelector(".confirm-no-right");

//Yes functions

function btnyesLeft() {
    contentyesLeft.style.display = 'flex';
}

yesLeft.onclick = btnyesLeft;

function btnconfirmLeft() {
    contentyesLeft.style.display = 'none';
}

confirmyesLeft.onclick = btnconfirmLeft;

function btnyesRight() {
    contentyesRight.style.display = 'flex';
}

yesRight.onclick = btnyesRight;

function btnconfirmRight() {
    contentyesRight.style.display = 'none';
}

confirmyesRight.onclick = btnconfirmRight;

//No functions

function btnnoLeft() {
    contentnoLeft.style.display = 'flex';
}

noLeft.onclick = btnnoLeft;

function btnredirectLeft() {
    contentnoLeft.style.display = 'none';
    contentyesLeft.style.display = 'flex';
}

confirmnoLeft.onclick = btnredirectLeft;

function btnnoRight() {
    contentnoRight.style.display = 'flex';
}

noRight.onclick = btnnoRight;

function btnredirectRight() {
    contentnoRight.style.display = 'none';
    contentyesRight.style.display = 'flex';
}

confirmnoRight.onclick = btnredirectRight;

// Show left

function updateLeft() {

    function reqListener1() {
        let left = this.responseText.trim();
        console.log(left);

        hiddencontentLeft.style.opacity = left;
    }

    let oReq1 = new XMLHttpRequest();
    oReq1.addEventListener("load", reqListener1);
    oReq1.open("GET", "https://cmd.camp/iot/get/egp2azr6");
    oReq1.send();
};

window.setInterval(updateLeft, 500);

// Show right

function updateRight() {

    function reqListener2() {
        let right = this.responseText.trim();
        console.log(right);

        hiddencontentRight.style.opacity = right;
    }

    let oReq2 = new XMLHttpRequest();
    oReq2.addEventListener("load", reqListener2);
    oReq2.open("GET", "https://cmd.camp/iot/get/7yjAWjJs");
    oReq2.send();
};

window.setInterval(updateRight, 500);