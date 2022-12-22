let burgerBtn = document.querySelector('#burger');
let menuHeader = document.querySelector('#menu-header');
let body = document.querySelector('body');

burgerBtn.onclick = menuShow;
body.onclick = function() {
    menuHeader.classList.remove('active')
};
menuHeader.onclick = function() {
    event.stopPropagation()
}
function menuShow() {
    event.stopPropagation()
    menuHeader.classList.toggle('active');
}