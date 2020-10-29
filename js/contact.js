//generate random number in range
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault();

    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        // Data Successfully Send
        //alert('success')
        let msgs = ["Hurreh!", "Yuhooo!", "Boom!", "Daang!", "Et voilà!"];
        let msgIndex = getRandomInt(msgs.length);
        Swal.fire(
            msgs[msgIndex],
            'Your Message is Delivered to Aravind!',
            'success'
        );
        form.reset();
    });
});