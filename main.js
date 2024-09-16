let menuIcon=document.querySelector("#menu-icon");
let navBar=document.querySelector(".navbar");

menuIcon.onclick=()=> {
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.toggle('active');
}

//show hidden content 

document.addEventListener("DOMContentLoaded", function() {
    const viewMoreLink = document.getElementById("viewMoreLink");
    const moreContent = document.getElementById("moreContent");

     
    viewMoreLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        
        if (moreContent.style.display === "none") {
            moreContent.style.display = "block";
            viewMoreLink.textContent = "Read Less";
            // Optionally change link text
        } else {
            moreContent.style.display = "none";
            viewMoreLink.textContent = "Read More"; // Optionally change link text
        }
    });
});

//scroll section active link 

let sections =document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll =()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if (top>=offset && top< offset+height){
            navLinks.forEach.apply(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+ ']').classList.add('active');
            });
        };
    });

    //sticky navbar


    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY >100);

    //remove toggle icon and nav bar 



    menuIcon.classList.remove('fa-xmark');
    navBar.classList.remove('active');
}; 

//scroll reveail 


ScrollReveal({
distance:'80px',
duration:2000,
delay:200,
});

ScrollReveal().reveal('.home-content,heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container, .portfolio-box, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content',{origin:'right'});

//typed js 

const typed = new Typed('.multiText',{
    strings:['Game Developer.','Data Analyst.','Web Developer.','Flutter Developer.'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true
});