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

//---------------------------------------------------------------------

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

document.querySelectorAll('.menu div').forEach(n => {
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    });
});

//---------------------------------------------------------------------

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (window.pageYOffset > 1800 && windowWidth > 1350) toTop.classList.add('active');
    else toTop.classList.remove('active');
});