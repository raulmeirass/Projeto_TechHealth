const sideMenu = document.querySelector(".sidebar");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

var userName = document.getElementById("userName");
var perfilEmail = document.getElementById("perfilEmail");
var perfilPermissao = document.getElementById("perfilPermissao");

userName.innerHTML = sessionStorage.NOME_USUARIO;
perfilName.innerHTML = sessionStorage.NOME_USUARIO;
perfilEmail.innerHTML = sessionStorage.EMAIL_USUARIO;
perfilPermissao.innerHTML = sessionStorage.HOSPITAL_USUARIO;


menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})


closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})

// Mudança de tema

themeToggler.addEventListener('click', () => {
    console.log("apertou!!");
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})