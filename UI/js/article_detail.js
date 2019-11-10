var modalDel = document.getElementById("myModal");

var btnDel = document.getElementsByClassName('myBtn')[0];

var spanDel = document.getElementsByClassName("close")[0];

btnDel.onclick = function () {
    modalDel.style.display = "block";
}

spanDel.onclick = function () {
    modalDel.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalDel) {
        modalDel.style.display = "none";
        console.log('bro we here')
    }
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



var modal = document.getElementById("myFlagModal");

var btn = document.getElementById('flag')

var span = document.getElementsByClassName("close")[1];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}
const commentBtn = document.getElementById('comment');
commentBtn.disabled = true;
const handleDisplayMatches = function () {

    if (this.value.length > 0) {
        commentBtn.disabled = false;        
        commentBtn.style.backgroundColor = '#4F62E8';
        commentBtn.style.cursor = 'pointer';

    } else {
        commentBtn.disabled = true;
        commentBtn.style.backgroundColor =  '#7CEBBE';
        commentBtn.style.cursor =  'context-menu';
    }
};


const commentField = document.querySelector('input[name="comment"]');

commentField.addEventListener('keyup', handleDisplayMatches);



// var link = document.getElementById("edit")
// link.onclick = (e) => {
//     e.preventDefault()
//     window.location.href = "./edit_article.html";
// };
