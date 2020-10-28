document.querySelectorAll(".skill").forEach(skill => {

    let url = skill.getAttribute('data-img');
    //cError(url)
    skill.style.background = "url('" + url + "')";
});