let list = document.querySelectorAll(".skill");
list.forEach(skill => {

    let url = skill.getAttribute('data-img');
    cError(url)
    skill.style.background = "url('" + url + "')";
})

/*
for (var i = 0; i < list.length; i++) {
  var url = list[i].getAttribute('data-image');
  list[i].style.backgroundImage="url('" + url + "')";
}*/