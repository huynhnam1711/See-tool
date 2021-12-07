let menu = document.querySelector('#menu-btn');
let navbar =document.querySelector('.header .navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Day and night
let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove("active"); 
}
