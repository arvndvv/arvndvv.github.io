//* jquery
//? <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

//*jqyery ends

//* sweetalert 
//!  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>

//* sweetalert end
let blogImages = []
const assignBlogImages = ()=>{
    blogImages.forEach(obj=>{
        obj.element.src = obj.img;
    })
    blogImages = [];
}
//?skills
let skillitems = [{
        img: 'img/skills/html-5.svg',
        name: 'HTML5'
    }, {
        img: 'img/skills/css.svg',
        name: 'CSS3'
    }, {
        img: 'img/skills/js.webp',
        name: 'JS'
    }, {
        img: 'img/skills/react.svg',
        name: 'ReactJs'
    }, {
        img: 'img/skills/angular.svg',
        name: 'Angular'
    }, {
        img: 'img/skills/rxjs.webp',
        name: 'RXJS'
    }, {
        img: 'img/skills/bootstrap.svg',
        name: 'Bootstrap'
    },
    // {
    //     img: 'img/skills/php.svg',
    //     name: 'PHP'
    // }
    // , {
    //     img: 'img/skills/sql.svg',
    //     name: 'SQL'
    // },
    //  {
    //     img: 'img/skills/python.svg',
    //     name: 'Python'
    // },
    //  {
    //     img: 'img/skills/c.webp',
    //     name: 'C'
    // }, {
    //     img: 'img/skills/cpp.png',
    //     name: 'C++'
    // },
    {
        img: 'img/skills/photoshop.svg',
        name: 'Photoshop'
    }, {
        img: 'img/skills/illustrator.svg',
        name: 'Illustrator'
    }, {
        img: 'img/skills/xd.svg',
        name: 'XD'
    }, {
        img: 'img/skills/sass.webp',
        name: 'SASS'
    }
];

let body = document.querySelector('body');
let loader = document.querySelector('#loader');

window.onload = function() {
    removeLoader()
};

function removeLoader() {
    loader.classList.add('no-loader');
    body.classList.remove('no-scroll');

}
//? sweet alert2 toast |currently used in app.js
const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
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
let blog = document.querySelector('#blog');

//? load skills
let skillset = document.querySelector("#skillset");
let skillFrag = document.createDocumentFragment()
skillset.innerHTML = "";
for (i = 0; i < skillitems.length; i++) {
    let span = document.createElement('span');
    span.classList.add("skill-wrapper");
    let sub = document.createElement('i');
    sub.classList.add('skill');
    sub.style.background = "url('" + skillitems[i].img + "')";
    sub.dataset.name = skillitems[i].name;
    span.appendChild(sub);
    skillFrag.appendChild(span);
}
skillset.appendChild(skillFrag);



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
        if (scrollPos + 80 < offset(blog).top) {
            if (scrollPos + 80 < offset(portfolio).top) {
                if (scrollPos + 80 < offset(skills).top) {
                    if (scrollPos + 80 < offset(about).top) {
                        //? scroll reached home
                        clearClass('.nav ul li');
                        navItems[0].classList.add('active')
                        if (scrollPos == offset(home).top) {
                            //? scroll reached top of home
                            nav.style.background = "transparent";
                            //? hides Slideup
                            document.querySelector("#slideup").style.opacity = "0";
                            document.querySelector("#slideup").style.display = "none";

                        }

                    } else {
                        //? scroll reached about
                        clearClass('.nav ul li');
                        navItems[1].classList.add('active')
                        document.querySelector("#slideup").style.opacity = "1";
                        document.querySelector("#slideup").style.display = "inline";
                    }
                } else {
                    //? scroll reached skills
                    clearClass('.nav ul li');
                    navItems[2].classList.add('active')
                    document.querySelector("#slideup").style.opacity = "1";
                    document.querySelector("#slideup").style.display = "inline";
                }

            } else {
                //? scroll reached portfolio
                clearClass('.nav ul li');
                navItems[3].classList.add('active')
                document.querySelector("#slideup").style.opacity = "1";
                document.querySelector("#slideup").style.display = "inline";

                if(blogImages.length){
                    assignBlogImages()
                }
               
            }
        } else {
            //? scroll reached blog
            clearClass('.nav ul li');
            navItems[4].classList.add('active')
            document.querySelector("#slideup").style.opacity = "1";
            document.querySelector("#slideup").style.display = "inline";
            if(blogImages.length){
                assignBlogImages()
            }

        }
    } else {
        //? scroll reached contact
        clearClass('.nav ul li');
        navItems[5].classList.add('active')
        document.querySelector("#slideup").style.opacity = "1";
        document.querySelector("#slideup").style.display = "inline";
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

//* show menu in mobile devices

const showMenu = () => {
        document.querySelector('.nav ul').classList.toggle('menu-show');
        document.querySelector('.nav .hamburger').classList.toggle('ham-active');
    }
    //! to calculate the remaining height after occupied by abt data
let abtheight = document.querySelector(".about-img-wrapper").offsetHeight;
let screenHeight = window.innerHeight;
//cError(abtheight);
let particleHeight = screenHeight - abtheight;


// particle.min.js hosted on GitHub
// Scroll down for initialisation code
//?particle code is taken from https://codepen.io/JulianLaval/pen/KpLXOO
//*https://rawgit.com/JulianLaval/canvas-particle-network/master/particle-network.min.js
!(function(a) {
    var b =
        ("object" == typeof self && self.self === self && self) ||
        ("object" == typeof global && global.global === global && global);
    "function" == typeof define && define.amd ?
        define(["exports"], function(c) {
            b.ParticleNetwork = a(b, c);
        }) :
        "object" == typeof module && module.exports ?
        (module.exports = a(b, {})) :
        (b.ParticleNetwork = a(b, {}));
})(function(a, b) {
    var c = function(a) {
        (this.canvas = a.canvas),
        (this.g = a.g),
        (this.particleColor = a.options.particleColor),
        (this.x = Math.random() * this.canvas.width),
        (this.y = Math.random() * this.canvas.height),
        (this.velocity = {
            x: (Math.random() - 0.5) * a.options.velocity,
            y: (Math.random() - 0.5) * a.options.velocity
        });
    };
    return (
        (c.prototype.update = function() {
            (this.x > this.canvas.width + 20 || this.x < -20) &&
            (this.velocity.x = -this.velocity.x),
            (this.y > this.canvas.height + 20 || this.y < -20) &&
            (this.velocity.y = -this.velocity.y),
            (this.x += this.velocity.x),
            (this.y += this.velocity.y);
        }),
        (c.prototype.h = function() {
            this.g.beginPath(),
                (this.g.fillStyle = this.particleColor),
                (this.g.globalAlpha = 0.7),
                this.g.arc(this.x, this.y, 1.5, 0, 2 * Math.PI),
                this.g.fill();
        }),
        (b = function(a, b) {
            (this.i = a),
            (this.i.size = {
                width: this.i.offsetWidth,
                height: this.i.offsetHeight
            }),
            (b = void 0 !== b ? b : {}),
            (this.options = {
                particleColor: void 0 !== b.particleColor ? b.particleColor : "#fff",
                background: void 0 !== b.background ? b.background : "#1a252f",
                interactive: void 0 !== b.interactive ? b.interactive : !0,
                velocity: this.setVelocity(b.speed),
                density: this.j(b.density)
            }),
            this.init();
        }),
        (b.prototype.init = function() {
            if (
                ((this.k = document.createElement("div")),
                    this.i.appendChild(this.k),
                    this.l(this.k, {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        "z-index": 1
                    }),
                    /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background))
            )
                this.l(this.k, { background: this.options.background });
            else {
                if (!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background))
                    return (
                        console.error(
                            "Please specify a valid background image or hexadecimal color"
                        ), !1
                    );
                this.l(this.k, {
                    background: 'url("' + this.options.background + '") no-repeat center',
                    "background-size": "cover"
                });
            }
            if (!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor))
                return (
                    console.error(
                        "Please specify a valid particleColor hexadecimal color"
                    ), !1
                );
            (this.canvas = document.createElement("canvas")),
            this.i.appendChild(this.canvas),
                (this.g = this.canvas.getContext("2d")),
                (this.canvas.width = this.i.size.width),
                (this.canvas.height = particleHeight),
                this.l(this.i, { position: "relative" }),

                this.l(this.canvas, { "z-index": "20", position: "relative" }),
                window.addEventListener(
                    "resize",
                    function() {
                        return this.i.offsetWidth === this.i.size.width &&
                            this.i.offsetHeight === this.i.size.height ?
                            !1 :
                            ((this.canvas.width = this.i.size.width = this.i.offsetWidth),
                                (this.canvas.height = this.i.size.height = this.i.offsetHeight),
                                clearTimeout(this.m),
                                void(this.m = setTimeout(
                                    function() {
                                        this.o = [];
                                        for (
                                            var a = 0; a <
                                            (this.canvas.width * this.canvas.height) /
                                            this.options.density; a++
                                        )
                                            this.o.push(new c(this));
                                        this.options.interactive && this.o.push(this.p),
                                            requestAnimationFrame(this.update.bind(this));
                                    }.bind(this),
                                    500
                                )));
                    }.bind(this)
                ),
                (this.o = []);
            for (
                var a = 0; a < (this.canvas.width * this.canvas.height) / this.options.density; a++
            )
                this.o.push(new c(this));
            this.options.interactive &&
                ((this.p = new c(this)),
                    (this.p.velocity = { x: 0, y: 0 }),
                    this.o.push(this.p),
                    this.canvas.addEventListener(
                        "mousemove",
                        function(a) {
                            (this.p.x = a.clientX - this.canvas.offsetLeft),
                            (this.p.y = a.clientY - this.canvas.offsetTop);
                        }.bind(this)
                    ),
                    this.canvas.addEventListener(
                        "mouseup",
                        function(a) {
                            (this.p.velocity = {
                                x: (Math.random() - 0.5) * this.options.velocity,
                                y: (Math.random() - 0.5) * this.options.velocity
                            }),
                            (this.p = new c(this)),
                            (this.p.velocity = { x: 0, y: 0 }),
                            this.o.push(this.p);
                        }.bind(this)
                    )),
                requestAnimationFrame(this.update.bind(this));
        }),
        (b.prototype.update = function() {
            this.g.clearRect(0, 0, this.canvas.width, this.canvas.height),
                (this.g.globalAlpha = 1);
            for (var a = 0; a < this.o.length; a++) {
                this.o[a].update(), this.o[a].h();
                for (var b = this.o.length - 1; b > a; b--) {
                    var c = Math.sqrt(
                        Math.pow(this.o[a].x - this.o[b].x, 2) +
                        Math.pow(this.o[a].y - this.o[b].y, 2)
                    );
                    c > 120 ||
                        (this.g.beginPath(),
                            (this.g.strokeStyle = this.options.particleColor),
                            (this.g.globalAlpha = (120 - c) / 120),
                            (this.g.lineWidth = 0.7),
                            this.g.moveTo(this.o[a].x, this.o[a].y),
                            this.g.lineTo(this.o[b].x, this.o[b].y),
                            this.g.stroke());
                }
            }
            0 !== this.options.velocity &&
                requestAnimationFrame(this.update.bind(this));
        }),
        (b.prototype.setVelocity = function(a) {
            return "fast" === a ? 1 : "slow" === a ? 0.33 : "none" === a ? 0 : 0.66;
        }),
        (b.prototype.j = function(a) {
            return "high" === a ?
                5e3 :
                "low" === a ?
                2e4 :
                isNaN(parseInt(a, 10)) ?
                1e4 :
                a;
        }),
        (b.prototype.l = function(a, b) {
            for (var c in b) a.style[c] = b[c];
        }),
        b
    );
});

// Initialisation

var canvasDiv = document.getElementById("particles");
var options = {
    particleColor: "#fff",
    background: '#151419',
    interactive: false,
    speed: "fast",
    density: "high"
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);

//* project object*//
const projects = [{
            id: 1,
            title: "Elixir-Web App",
            stack: "HTML | CSS | Bootstrap | JS | JQuery | Ajax | PHP | MySqli",
            view: "img/projects/elixir.webp",
            summary: "Elixir is a LAMP Stack web application where people can hire workers for various services.",
            url: "https://proelixir.in"
        },
        {
            id: 2,
            title: "Online Resume",
            stack: "HTML | CSS | JS |",
            view: "img/projects/oldPort.png",
            summary: "Designed and developed UI like that of a resume.",
            url: "https://arvndvv.github.io/Online-Resume/"
        }, {
            id: 3,
            title: "PhotoEditor",
            stack: "React JS | CSS",
            view: "img/projects/pe.png",
            summary: "Website with two images where user can try out giving different effects using sliders.",
            url: "https://reactphotoeditor.netlify.app/"

        }, {
            id: 4,
            title: "Weather App",
            stack: "React JS | CSS",
            view: "img/projects/wa.png",
            summary: "Gives Weather details, automatically detects user location or user can provide location manually. (Well suited for mobile devices)",
            url: "https://reactweathercast.netlify.app/"
        },
        {
            id: 5,
            title: "ECart",
            stack: "Angular | Node | Express | Mongoose ",
            view: "img/projects/ecart.png",
            summary: "An ecart application which has, user login, registration, product list, add to cart options.",
            url: "https://ecart-by-arv.herokuapp.com/"
        },
        {
            id: 6,
            title: "Instagram Bot",
            stack: "Python | Selenium | Beautifulsoup",
            view: "img/projects/bot.jpg",
            summary: "Python bot which logs into our account and likes upto 45 posts having user specified hashtag.",
            url: "https://github.com/arvndvv/InstagramBot.git"
        },
        {
            id: 7,
            title: "Parallax Landing Page",
            stack: "HTML | CSS | JavaScript ",
            view: "img/projects/parallax.png",
            summary: "A landing page which has parallax background when you scroll.",
            url: "https://arvndvv.github.io/parallaxLanding/"
        },
        {
            id: 8,
            title: "RADAR - Search Engine",
            stack: "HTML | SCSS | JavaScript ",
            view: "img/projects/radar.png",
            summary: "A search engine built with wiki search api.",
            url: "https://arvndvv.github.io/RADAR-Search-Engine/"
        },
        {
            id: 9,
            title: "MAC Address Spoofer",
            stack: "Python",
            view: "img/projects/macspoofer.png",
            summary: "A tool to change MAC address of your machine,works for Linux Machines only.",
            url: "https://github.com/arvndvv/MAC_Address_Spoofer.git"
        }, {
            id: 10,
            title: "IP Tracker",
            stack: "Python",
            view: "img/projects/iptracker.png",
            summary: "simple python snippet to get details about a domain or ip.",
            url: "https://github.com/arvndvv/IP-Tracker.git"
        },
        {
            id: 11,
            title: "ConsoleStyles",
            stack: "JavaScript",
            view: "img/projects/cs.png",
            summary: "Js framework to make console logging more beautiful.",
            url: "https://github.com/arvndvv/ConsoleStyles.git"
        },
        {
            id: 12,
            title: "My Portfolio Website",
            stack: "HTML | CSS | JavaScript",
            view: "img/projects/cport.png",
            summary: "There is a lot I have learned between the timespan of my previous portfolio and the current one",
            url: "#"
        },


    ]
    // cRemarks(projects.length);

//? Design Images ?//
let dir = "img/gallery/";
let images = [];
let imgCount = 24;
for (let i = 1; i <= imgCount; i++) {
    let path = dir + i + '.jpg';
    images.push(path);
}
//cSuccess(images)


let descCard = document.querySelector("#proj-desc");
let viewCard = document.querySelector("#port-view");
let interval = 3000;
// how much time should the delay between two iterations be (in milliseconds)?
let pIndex = -1;
const changeCard = (x = 1) => {
    if (x === 1) {

        // cSuccess("1", pIndex)
        pIndex++;
        if (pIndex == projects.length) {
            pIndex = 0;
        }
        var id = window.setTimeout(function() {}, 0);

        while (id--) {
            window.clearTimeout(id); // will do nothing if no timeout with id is present
        }
        setTimeout(changeCard, 10000);

    }

    //    cSuccess("2", pIndex)
    if (x === -1) {

        if (pIndex <= 0) {
            pIndex = projects.length - 1;
        } else {
            pIndex--;
        }
        var id = window.setTimeout(function() {}, 0);

        while (id--) {
            window.clearTimeout(id); // will do nothing if no timeout with id is present
        }
        setTimeout(changeCard, 10000);
    }
    // cError(pIndex)
    descCard.children[0].innerHTML = projects[pIndex].title;
    descCard.children[1].innerHTML = projects[pIndex].stack;
    descCard.children[2].innerHTML = projects[pIndex].summary;
    descCard.children[3].children[0].attributes.href.value = projects[pIndex].url;
    descCard.children[4].children[1].innerText = `(${pIndex+1}/${projects.length})`;
    viewCard.children[0].src = projects[pIndex].view;



    setTimeout(changeCard, 10000);
}

changeCard(1);


//! toggling between designs and projects

let desc = document.querySelector("#portfolio .desc");
let view = document.querySelector("#portfolio #port-view");
const togglePort = x => {

    clearClass('#portfolio ul li');
    //? clear class is defined nav.js

    document.getElementById(x).classList.add('active');
    //? if designs is selected
    if (x === 'designs') {
        desc.classList.add("hideDesc");

        document.querySelector("#open_card").style.opacity = 0;
        document.querySelector("#open_card").style.visibility = "hidden";
        document.querySelector("#open_card").classList.remove("rotate");
        clearClass('#port-view');
        view.classList.add('view', 'design');

        var id = window.setTimeout(function() {}, 0);

        while (id--) {
            window.clearTimeout(id); // will do nothing if no timeout with id is present
        }

        //! load images (make sure to have img count multiple of 4)
        let imgIndex = 0;
        const Designfrag = document.createDocumentFragment()
        for (i = 0; i < 4; i++) {
            let clm = document.createElement('div');
            clm.classList.add("column");
            for (let j = 0; j < images.length / 4; j++) {
                let img = document.createElement('img');
                //cError(i)
                //cSuccess(j)
                img.setAttribute('alt','design')
                img.src = images[imgIndex];
                // cRemarks(imgIndex)
                // cWarn(images[imgIndex])
                imgIndex++;
                clm.appendChild(img)
            }
            Designfrag.appendChild(clm)

        }
        document.querySelector("#gallery").appendChild(Designfrag)

    }

    //? if projects is selected
    if (x === 'projects') {
        document.querySelector("#gallery").innerHTML = '';
        desc.classList.remove("hideDesc");
        view.classList.remove('design');
        view.classList.add('project');
        document.querySelector("#open_card").style.visibility = "visible";
        document.querySelector("#open_card").style.opacity = 1;
        setTimeout(changeCard, 10000);
    }
}
const openCard = () => {
        view.classList.toggle('opened_card');
        // document.querySelector("open_card").style.transform = "rotate(180deg)"
        document.querySelector("#open_card").classList.toggle("rotate")
    }
    //? list of Success expressions
let msgs = ["Hurreh!", "Yuhooo!", "Boom!", "Daang!", "Et voilà!"];

//? list of error expressions
let errMsgs = ["Oops..", "Alas!", "huh!", "Come On!", "No Tricks!"];

//generate random number in range
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let form = document.getElementById('contact-form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let fields = document.querySelectorAll('.check');
    let Empty = false;
    for (i = 0; i < 3; i++) {
        if (fields[i].value == '') {
            Empty = true;
        }
    }
    if (!Empty) {
        const [email,message,name] = (e.target.elements);
        console.log(email.value);
        const contactWrapper = document.querySelector('.contact-wrapper');
        contactWrapper.classList.add('sending');
        const formData = {
            name:name.value,
            email:email.value,
            message:message.value,
            _template:'table'
        }
        console.log(formData,'formData');
        fetch(form.action, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: "POST",
            body: JSON.stringify(formData)
            
        }).then(
            response => response.json()
        ).then((html) => {
            // Data Successfully Send
            //alert('success')
            let msgIndex = getRandomInt(msgs.length);
            Swal.fire(
                msgs[msgIndex],
                'Your Message is Delivered to Aravind!',
                'success'
            );
            form.reset();
            contactWrapper.classList.remove('sending');

        });
    } else {
        let errIndex = getRandomInt(errMsgs.length);

        Swal.fire(
            errMsgs[errIndex],
            'No field should be empty!',
            'error'
        );
    }
});
//! to clear console !//
if (typeof console._commandLineAPI !== 'undefined') {
    console.API = console._commandLineAPI;
} else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
    console.API = console._inspectorCommandLineAPI;
} else if (typeof console.clear !== 'undefined') {
    console.API = console;
}
//console.API.clear();
//! to notify users if thier browser is outdated 
(function(u) {
    var s = document.createElement('script');
    s.async = true;
    s.src = u;
    var b = document.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(s, b);
})('//updatemybrowser.org/umb.js');

//! detect the device and inform to try desktop
/*window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };*/
window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
//cSuccess(mobileAndTabletCheck());
if (mobileAndTabletCheck()) {

    Toast.fire({
        icon: 'info',
        title: 'Use desktop for better Experience!'
    })
}

//blog
let domain = 'https://aravindvv.medium.com';
let blogs = [{
        title: 'Isn’t it time to change our education system?',
        url: domain + '/isnt-it-time-to-change-our-education-system-8baa3daccf5e',
        img: './img/blog/edu.webp',
        tags: ['Education']
    },
    {
        title: "How I Tried to become famous? Why we shouldn't try this method!",
        url: domain + '/how-i-tried-to-become-famous-why-we-shouldnt-try-this-method-918ed6d41f99',
        img: './img/blog/fame.webp',
        tags: ['Life', 'Cyber']
    },
    {
        title: 'How to add Custom Header (Banner) on your Terminal (Linux)',
        url: domain + '/custom-header-banner-on-your-terminal-linux-4abfe7f5b052',
        img: './img/blog/term.webp',
        tags: ['Linux', 'Terminal']
    },
    {
        title: 'The New GitHub Profile README.md',
        url: domain + '/the-new-github-profile-readme-md-1936b615aab7',
        img: './img/blog/read.webp',
        tags: ['Github', 'Readme']
    },
    {
        title: 'Making An Instagram Bot',
        url: domain + '/making-an-instagram-bot-4c6412ef00a0',
        img: './img/blog/insta.webp',
        tags: ['Instagram Bot', 'Python']
    },
]
window.addEventListener('load', () => {
    const frag = document.createDocumentFragment()
    blogs.forEach(blog => {
        let blogItem = document.createElement('a');
        blogItem.classList.add('blog-item');
        blogItem.setAttribute('aria-label','blog-item')
        blogItem.setAttribute('href', blog.url);
        let blogImg = document.createElement('img');
        blogImg.setAttribute('alt','blog');
        // blogImg.src = blog.img;
        blogImages.push({element:blogImg,img:blog.img})
        blogItem.appendChild(blogImg);
        let details = document.createElement('div');
        details.setAttribute('class', 'blog-item__details');
        let tags = document.createElement('div');
        tags.classList.add('tags');
        blog.tags.forEach(tagName => {
            let tag = document.createElement('span');
            tag.classList.add('tag');
            tag.textContent = tagName;
            tags.appendChild(tag);
        });
        details.appendChild(tags);
        let title = document.createElement('h1');
        title.classList.add('blog-item__title');
        title.textContent = blog.title;
        details.appendChild(title);
        blogItem.appendChild(details);
        frag.appendChild(blogItem);
    })
    document.querySelector('.blog-container').appendChild(frag)

})