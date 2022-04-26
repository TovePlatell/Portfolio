const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)


const projectContainer = document.getElementById("project-container");
const project =  projectContainer.getElementsByClassName("project-card");

function next(){
    projectContainer.append(project[0]);

}

function prev(){
    projectContainer.prepend(project[project.length - 1]);
    
}