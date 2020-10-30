//? list of Success expressions
let msgs = ["Hurreh!", "Yuhooo!", "Boom!", "Daang!", "Et voilà!"];

//? list of error expressions
let errMsgs = ["Oops..", "Alas!", "huh!", "Come On!", "No Tricks!"];

//generate random number in range
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault();
    let fields = document.querySelectorAll('.check');
    let Empty = false;
    for (i = 0; i < 3; i++) {
        if (fields[i].value == '') {
            Empty = true;
        }
        //  cError(fields[i].value);
        // cSuccess(Empty)
    }
    if (!Empty) {
        fetch(form.action, {
            method: "POST",
            body: new FormData(document.getElementById("sheetdb-form")),
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
        });
    } else {
        let errIndex = getRandomInt(errMsgs.length);
        Swal.fire({
            icon: 'error',
            title: errMsgs[errIndex],
            text: 'No field should be empty!'
        })
    }
});