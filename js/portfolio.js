//! to clear console !//
if (typeof console._commandLineAPI !== 'undefined') {
    console.API = console._commandLineAPI;
} else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
    console.API = console._inspectorCommandLineAPI;
} else if (typeof console.clear !== 'undefined') {
    console.API = console;
}
console.API.clear()
    //* project object*//
const projects = [{
            id: 1,
            title: "Elixir-Web App",
            stack: "HTML | CSS | Bootstrap | JS | JQuery | Ajax | PHP | MySqli",
            view: "img/projects/elixir.png",
            summary: "Elixir is a LAMP Stack web application where people who can provide house-hold services can register and get hired by people who needs service.",
            url: "https://proelixir.in"
        },
        {
            id: 2,
            title: "Previous Portfolio",
            stack: "HTML | CSS | JS |",
            view: "img/projects/oldPort.png",
            summary: "Designed UI like that of a resume.",
            url: "oldPort/"
        }, {
            id: 3,
            title: "PhotoEditor",
            stack: "React JS | CSS",
            view: "img/projects/pe.png",
            summary: "Webpage with two images where user can try out giving different effects using sliders.",
            url: "https://reactphotoeditor.netlify.app/"

        }, {
            id: 4,
            title: "Weather App",
            stack: "React JS | CSS",
            view: "img/projects/wa.png",
            summary: "Gives Weather details, automatically detects user location or user can provide location manually. (Well suited for mobile devices)",
            url: "https://reactweathercast.netlify.app/"
        }, {
            id: 5,
            title: "Instagram Bot",
            stack: "Python | Selenium | Beautifulsoup",
            view: "img/projects/bot.jpg",
            summary: "Python bot which logs into our account and likes upto 45 posts having user specified hashtag.",
            url: "https://github.com/arvndvv/InstagramBot.git"
        }

    ]
    // cRemarks(projects.length);

//? Design Images ?//
let dir = "img/gallery/";
let images = [];
let imgCount = 21;
for (let i = 1; i < imgCount; i++) {
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
        desc.style.right = "-100%";

        document.querySelector("#open_card").style.opacity = 0;
        document.querySelector("#open_card").style.visibility = "hidden";
        clearClass('#port-view');
        view.classList.add('view', 'design');
        view.style.width = "65%"
        view.style.transform = "translate(-20%, -50%)"
        var id = window.setTimeout(function() {}, 0);

        while (id--) {
            window.clearTimeout(id); // will do nothing if no timeout with id is present
        }

        //! load images
        let imgIndex = 0;
        for (i = 0; i < 4; i++) {
            let clm = document.createElement('div');
            clm.classList.add("column");
            for (let j = 0; j < images.length / 4; j++) {
                let img = document.createElement('img');
                img.src = images[imgIndex];
                imgIndex++;
                clm.appendChild(img)
            }
            document.querySelector("#gallery").appendChild(clm)


        }


    }

    //? if projects is selected
    if (x === 'projects') {
        document.querySelector("#gallery").innerHTML = '';
        desc.style.right = "-5%";
        view.classList.remove('design');
        view.classList.add('project');
        view.style.width = "50%";
        view.style.transform = "translate(-50%, -50%)";
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