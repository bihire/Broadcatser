
var save = document.getElementById("save")
save.onclick = function (e) {
    e.preventDefault()
    console.log(save)
    window.location.href = "./article_detail.html";
};


var cancel = document.getElementById("cancel")
cancel.onclick = function (e) {
    e.preventDefault()

    window.location.href = "./article_detail.html";
};