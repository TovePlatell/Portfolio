
const hamburgerButton = document.querySelector('#hamburger')
const navList = document.querySelector('#nav-list');

const toggleButton = () => {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)


const projectContainer = document.querySelector("#project-container");
const project =  projectContainer.getElementsByClassName("project-card");

const next = () => {
    projectContainer.append(project[0]);
    console.log(next)

}

const prev = () => {
    projectContainer.prepend(project[project.length - 1]);
    console.log(prev)
    
}

// const hamburgerButton = document.querySelector('#hamburger')
// const navList = document.querySelector('#nav-list')

// const toggleButton = () => {

//     navList.classList.toggle('show')
// }

// hamburgerButton.addEventListener('click', toggleButton)

// const slideContainer = document.querySelector('.head-project-container')
// const slide = document.querySelector('.project-container')
// const nextBtn = document.querySelector('#nextBtn')
// const prevBtn = document.querySelector('#prevBtn')
// const interval = 5000;

// let slides = document.querySelectorAll('.project-card');
// let index = 1;
// let slideId;

// const firstClone = slides[0].cloneNode(true);
// const lastClone = slides[slides.length -1].cloneNode(true);

// firstClone.id = 'firstCard'
// lastClone.id = 'lastCard'

// slide.append(firstClone);
// slide.prepend(lastClone);

// const slideWidth = slides[index].clientWidth;

// slide.style.transform = `translateX(${-slideWidth * index}px)`;


// const startSlide = () => {
    
//     slideId = setInterval(() => { 
//         moveToNextSlide()
// }, interval);
// }


// const getSlides = () => document.querySelectorAll('.project-card')




//   slide.addEventListener('transitionend', ()=>{
//     slides = getSlides();
//       if(slides[index].id ===firstClone.id){
//           slide.style.transition = 'none';
//           index =1;
//           slide.style.transform = `translateX(${-slideWidth * index}px)`
//       }
//       if(slides[index].id === lastClone.id){
//         slide.style.transition = 'none';
//         index = slides.length -2;
//         slide.style.transform = `translateX(${-slideWidth * index}px)`
//     }
//   })

//   const moveToNextSlide = () =>{
//     slides = getSlides();
//       if(index >= slides.length -1) 
//       return;
//     index++;
//     slide.style.transform = `translateX(${-slideWidth * index}px)`
//     slide.style.transition = '.7s';

//   }

//   const moveToPreviousSlide = () =>{
//       if(index <= 0) return;
   
//     index--;
//     slide.style.transform = `translateX(${-slideWidth * index}px)`
//     slide.style.transition = '.7s';
//   }


//   slideContainer.addEventListener('mouseenter', () =>{
//       clearInterval(slideId)
//   });

//   slideContainer.addEventListener('mouseleave', startSlide);

//   nextBtn.addEventListener('click', moveToNextSlide)
//   prevBtn.addEventListener('click', moveToPreviousSlide)
// startSlide();
// const projectContainer = document.querySelector('.project-container')
// const carouselCard = document.querySelectorAll('.project-card')

// //buttons
// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// let counter = 1;
// const size = carouselCard[0].clientWidth;



// //button listener
// nextBtn.addEventListener('click', () => {
//     projectContainer.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     projectContainer.style.transform = 'translateX('+ (-size * counter) + 'px)';

// });
 
// //button listener
// prevBtn.addEventListener('click', () => {
//     projectContainer.style.transition = "transform 0.4s ease-in-out";
//     counter--;
//     projectContainer.style.transform = 'translateX('+ (-size * counter) + 'px)';

// });

// projectContainer.addEventListener('transitioned', () =>{
//     if (carouselCard[counter].id === 'lastCard'){
//         projectContainer.style.transition = "none";
//         counter = carouselCard.length - 2
//         projectContainer.style.transform = 'translateX('+ (-size * counter) + 'px)';


//     }
// });



// OLD SITE

// const hamburgerButton = document.getElementById('hamburger')
// const navList = document.getElementById('nav-list')

// function toggleButton(){
//     navList.classList.toggle('show')
// }

// hamburgerButton.addEventListener('click', toggleButton)


// const projectContainer = document.getElementById("project-container");
// const project =  projectContainer.getElementsByClassName("project-card");

// function next(){
//     projectContainer.append(project[0]);

// }

// function prev(){
//     projectContainer.prepend(project[project.length - 1]);
    
// }