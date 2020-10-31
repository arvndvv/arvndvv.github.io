let body = document.querySelector('body');
let loader = document.querySelector('#loader');

window.onload = function() {
    removeLoader()
};

function removeLoader() {
    loader.classList.add('no-loader');
    body.classList.remove('no-scroll');

}