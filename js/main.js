
//swiper js testimoial section

    var swiper = new Swiper(".swiper", {
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    });

//navmenu

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

menuBtn.addEventListener('click' , () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display ='inline-block';
})
closeBtn.addEventListener('click', () =>{
    menu.style.display = 'none',
    menuBtn.style.display ='inline-block',
    closeBtn.style.display = 'none';
})

const navItems = menu.querySelectorAll('li');
const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}
navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click' ,() => {
        changeActiveItem();//call this method to remove active 
        link.classList.add('active');
    })
})

//remore about
const readmoreBtn = document.querySelector('.read-more');
const readmoreContent = document.querySelector('.read-more-content');

readmoreBtn.addEventListener('click',() => {
    readmoreContent.classList.toggle('show-content');
    if(readmoreContent.classList.contains('show-content')){
        readmoreBtn.textContent = "Show less";
    }else{
        readmoreBtn.textContent = "Show more";
    }
})



// show,hide skills js

const skillItem = document.querySelectorAll('section.skills .skill');

skillItem.forEach(skill =>{
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items');
    })
})

//add box shadow on scroll

window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle('show-box-shadow'
    ,window.scrollY >100);
})
