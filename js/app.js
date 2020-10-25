// hides nav when scrolled down
let prevScrollPos = 0;
document.addEventListener("scroll", function() {
        let nav = document.querySelector("nav");
        let scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
        //let windowHeight = window.innerHeight;
        let windowHeight = document.documentElement.clientHeight;

        // cRemarks(prevScrollPos)

        //cError(scrollPos)

        if (scrollPos > prevScrollPos) {

            prevScrollPos = scrollPos;

            if (scrollPos + 60 >= windowHeight) {

                nav.classList.add("desktop-close");
            }
        } else {
            prevScrollPos = scrollPos;
            nav.classList.remove("desktop-close");

        }


    })
    //clear class of given element
function removeClass(x) {
    document.querySelectorAll(x).forEach(el => {
        el.classList = ''
    })
}
//changes style of nav element when clicked
let navEl = document.querySelectorAll('.nav ul li a');

navEl.forEach(li => {
    li.addEventListener('click', function(e) {
        removeClass('.nav ul li');
        e.target.parentElement.classList.add('active');

    })
});