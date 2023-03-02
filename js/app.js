const burger = document.querySelector('.burger');
const navegation = document.querySelector('.navegation');
const links = document.querySelectorAll('.navegation a');
const fech = document.querySelector('.fech');
const sendMessage = document.getElementById("btnsend");

document.addEventListener('DOMContentLoaded', () => {
    showMenu();
    closeMenu();
    fechAct();
    messageSent();
});

function showMenu(){
    burger.addEventListener('click', ()=>{
        navegation.classList.toggle('ocult');
    });
}

function closeMenu() {
    links.forEach(link =>{
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = document.querySelector(e.target.attributes.href.value);
            changeSection(section);
            if(e.target.tagName === 'A'){
                navegation.classList.add('ocult');
            }  
        });
    });
} 

function changeSection(section){
    section.scrollIntoView({
        behavior:'smooth'
    })
}

function fechAct(){
    let fechtoday = new Date().getFullYear();
    fech.textContent = fechtoday;
}

function messageSent(){
    window.addEventListener("load",()=>{
        sendMessage.addEventListener('click', ()=>{
            alert("Mensaje enviado con exito");
        })
    })
}

