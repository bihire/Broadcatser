const signin = document.getElementById('signin')
const signup = document.getElementById('signup')

const signi = (a,b)=> {
    var s = document.getElementsByClassName(a)[0].style;
    s.opacity = 1;
    function fade() { 
        (s.opacity -= .1) < 0 ? s.display = "none" : setTimeout(fade, 40)
    }
    fade()
    var d = document.getElementsByClassName(b)[0].style;
    d.display = 'block'
    d.opacity = 1
    var b = document.getElementById('signin').style
    var e = document.getElementById('signup').style
    b.display = 'none'
    e.display = 'block'
}

signin.addEventListener('click', signi('signIn','signUp'))
signup.addEventListener('click', signi('signUp','signIn'))


