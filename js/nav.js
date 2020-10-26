//* get element offset position
function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

//* clear class of given element
function clearClass(x) {

    document.querySelectorAll(x).forEach(el => {
        el.classList = '';

    })
}
//* hides nav when scrolled down and mark menu according 
//* to active section
let prevScrollPos = 0;

let nav = document.querySelector("nav");
let home = document.querySelector('#home');
let about = document.querySelector('#about');
let skills = document.querySelector('#skills');
let portfolio = document.querySelector('#portfolio');
let contact = document.querySelector('#contact');
//! scroll listener
document.addEventListener("scroll", function() {

    nav.style.background = "var(--dark)";
    let scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
    //let windowHeight = window.innerHeight;
    let windowHeight = document.documentElement.clientHeight;

    //cError("home:" + offset(home).top)
    //cError("skill:" + offset(skills).top)
    //cRemarks("scrollpos:" + scrollPos)
    //! auto marking active section
    let navItems = document.querySelectorAll('.nav ul li')
    if (scrollPos + 80 < offset(contact).top) {
        if (scrollPos + 80 < offset(portfolio).top) {
            if (scrollPos + 80 < offset(skills).top) {
                if (scrollPos + 80 < offset(about).top) {
                    //? scroll reached home
                    clearClass('.nav ul li');
                    navItems[0].classList.add('active')
                    if (scrollPos == offset(home).top) {
                        //? scroll reached top of home
                        nav.style.background = "transparent";
                    }

                } else {
                    //? scroll reached about
                    clearClass('.nav ul li');
                    navItems[1].classList.add('active')
                }
            } else {
                //? scroll reached skills
                clearClass('.nav ul li');
                navItems[2].classList.add('active')
            }

        } else {
            //? scroll reached portfolio
            clearClass('.nav ul li');
            navItems[3].classList.add('active')
        }
    } else {
        //? scroll reached contact
        clearClass('.nav ul li');
        navItems[4].classList.add('active')
    }

    // cRemarks(prevScrollPos)

    //cError(scrollPos)
    //! menu open and close
    if (scrollPos > prevScrollPos) {

        prevScrollPos = scrollPos;

        if (scrollPos + 60 >= windowHeight) {

            nav.classList.add("desktop-close");
        }
    } else {
        prevScrollPos = scrollPos;
        nav.classList.remove("desktop-close");

    }


});
//* changes style of nav element when clicked
let navEl = document.querySelectorAll('.nav ul li a');

navEl.forEach(li => {
    li.addEventListener('click', function(e) {
        clearClass('.nav ul li');
        e.target.parentElement.classList.add('active');

    })
});

//! mousemove listener

document.addEventListener("mousemove", function(event) {
    handleMouseMove(event);
});
let hoveredMenu = false;

function handleMouseMove(e) {
    //cWarn("mouse moved")
    //cBlackGreen(hoveredMenu)
    let scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
    if (!(scrollPos + 80 < offset(about).top)) {
        let y = e.clientY;
        //cRemarks(y)
        if (!hoveredMenu) {
            //cSuccess("")
            if (y <= 60) {
                hoveredMenu = true;
                nav.classList.remove("desktop-close");
            }
        } else {
            if (y > 60) {

                hoveredMenu = false;
                nav.classList.add("desktop-close");
            }
        }
    }
}