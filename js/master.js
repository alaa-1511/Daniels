window.addEventListener('scroll',  function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 600) { 
        navbar.classList.add('scrolled'); 
    } else {
        navbar.classList.remove('scrolled'); 
    }
  });
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        
        document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
  });


//  skills
let section = document.querySelector(".about");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
    let offset = 0;

    // offset 
    if (window.innerWidth >= 992) {
        offset = 40; 
    } else if (window.innerWidth >= 768) {
        offset = 100;  
    } else {
        offset = 300;  
    }

    
    if (window.scrollY >= section.offsetTop + offset) {
        console.log("scroll");

        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });

    
        window.onscroll = null;
    }
};



// protifolio
    let menuPortfolio = document.querySelectorAll(".menu-Portfolio li");
    let imgs =Array.from(document.images);


    menuPortfolio.forEach((li) => {
        li.addEventListener("click", removeActive);
        li.addEventListener('click', changeImage);
    });


    // remove and add  Active
    function removeActive(){
        menuPortfolio.forEach((li) => {
          li.classList.remove("active");
           this.classList.add("active");
        });
    }
    // manage imgs
    function changeImage() {
    imgs.forEach((img)=>{
        img.style.display = "none";
    });
    
document.querySelectorAll(this.dataset.cat).forEach((el)=>{
    el.style.display = "block";
})
};

// counter
let nums = document.querySelectorAll('.nums .num');
let counterSection = document.querySelector('.counter'); 
let started = false;

window.addEventListener("scroll", function () {
    let offset;
    if (window.innerWidth <= 576) {
        offset = 200;  
    } else {
        offset = 100;  
    }
    if (window.scrollY >= counterSection.offsetTop - window.innerHeight + offset) {
        if (!started) {
            nums.forEach(num => startCounter(num));
            started = true;
        }
    }
});

function startCounter(el) {
    let goal = el.dataset.goal;
   
    let interval = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(interval);
        }
    }, 2000 / goal);
}
// nav-link
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
  
    window.addEventListener("scroll", () => {
      let currentSection = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
  
        if (pageYOffset >= sectionTop - 60 && pageYOffset < sectionTop + sectionHeight - 60) {
          currentSection = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });

      if (pageYOffset < sections[0].offsetTop - 60) {
        navLinks.forEach((link) => link.classList.remove("active"));
        document.querySelector(".nav-link[href='#section1']").classList.add("active");
      }
    });
  });
// loader
  document.addEventListener("DOMContentLoaded", function () {
    
    setTimeout(() => {
        const loader = document.getElementById("loader");
        const content = document.getElementById("content");
        loader.classList.add("fade-out");
        loader.addEventListener("transitionend", () => {
            loader.style.display = "none";
            content.style.display = "block";
        });
    }, 1500); // يمكنك تغيير الوقت هنا
});

  
