// JavaScript File
window.addEventListener("load", init, false);

function init() {
    hellolink.addEventListener("click", helloaction, false);
    edulink.addEventListener("click", eduaction, false);
    skillslink.addEventListener("click", skillsaction, false);
    mcvlink.addEventListener("click", mcvaction, false);
    conlink.addEventListener("click", conaction, false);
}
function helloaction(){
    hello.style.display="block";
    mycv.style.display="none";
    education.style.display="none";
    skills.style.display="none";
    contacts.style.display="none";
}

function eduaction(){
    hello.style.display="none";
    mycv.style.display="none";
    education.style.display="block";
    skills.style.display="none";
    contacts.style.display="none";
}
function mcvaction(){
    hello.style.display="none";
    mycv.style.display="block";
    education.style.display="none";
    skills.style.display="none";
    contacts.style.display="none";
}
function skillsaction(){
    hello.style.display="none";
    mycv.style.display="none";
    education.style.display="none";
    skills.style.display="block";
    contacts.style.display="none";
}
function conaction(){
    hello.style.display="none";
    mycv.style.display="none";
    education.style.display="none";
    skills.style.display="none";
    contacts.style.display="block";
}