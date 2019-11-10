const signin = document.getElementById('signin')
const signup = document.getElementById('signup')

const signi = function () {
    var s = document.getElementsByClassName('signIn')[0].style;
    s.opacity = 1;
    function fade() { 
        (s.opacity -= .1) < 0 ? s.display = "none" : setTimeout(fade, 40)
    }
    fade()
    var d = document.getElementsByClassName('signUp')[0].style;
    d.display = 'block'
    d.opacity = 1
    var b = document.getElementById('signin').style
    var e = document.getElementById('signup').style
    b.display = 'none'
    e.display = 'block'
    console.log('signin')
}
const signu = function () {
    var s = document.getElementsByClassName('signUp')[0].style;
    s.opacity = 1;
    function fade() {
        (s.opacity -= .1) < 0 ? s.display = "none" : setTimeout(fade, 40)
    }
    fade()
    var d = document.getElementsByClassName('signIn')[0].style;
    d.display = 'block'
    d.opacity = 1
    var b = document.getElementById('signup').style
    var e = document.getElementById('signin').style
    b.display = 'none'
    e.display = 'block'
    console.log('signup')
}

signin.addEventListener('click', signi)
signup.addEventListener('click', signu)


