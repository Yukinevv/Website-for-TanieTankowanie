let tileDivs = document.getElementsByClassName("tile");
let tileDivsLeftHeaders = document.querySelectorAll(".left-side2 h3");
let tileDivsRightHeaders = document.querySelectorAll(".right-side2 h3");
let tileDivsLeftParagraphs = document.querySelectorAll(".left-side2 p");
let tileDivsRightParagraphs = document.querySelectorAll(".right-side2 p");
let change = true;

function handleResize() {
    let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth <= 1350 && change) {
        [tileDivs[1].innerHTML, tileDivs[2].innerHTML] = [tileDivs[2].innerHTML, tileDivs[1].innerHTML];
        [tileDivsLeftHeaders[1].innerHTML, tileDivsRightHeaders[0].innerHTML] = [tileDivsRightHeaders[0].innerHTML, tileDivsLeftHeaders[1].innerHTML];
        [tileDivsLeftParagraphs[1].innerHTML, tileDivsRightParagraphs[0].innerHTML] = [tileDivsRightParagraphs[0].innerHTML, tileDivsLeftParagraphs[1].innerHTML];
        change = false;
    } else if (windowWidth > 1350 && !change) {
        [tileDivs[1].innerHTML, tileDivs[2].innerHTML] = [tileDivs[2].innerHTML, tileDivs[1].innerHTML];
        [tileDivsLeftHeaders[1].innerHTML, tileDivsRightHeaders[0].innerHTML] = [tileDivsRightHeaders[0].innerHTML, tileDivsLeftHeaders[1].innerHTML];
        [tileDivsLeftParagraphs[1].innerHTML, tileDivsRightParagraphs[0].innerHTML] = [tileDivsRightParagraphs[0].innerHTML, tileDivsLeftParagraphs[1].innerHTML];
        change = true;
    }
}

window.addEventListener("resize", handleResize);